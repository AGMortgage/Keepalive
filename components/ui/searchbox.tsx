"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "./input"
import { faSearch, faFilter,faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./button"
import { Badge } from "@/components/ui/badge"

import { DropdownMenu,DropdownMenuContent,DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger, } from "./dropdown-menu";


import { search } from "@/types/dashboard"
import {  useState } from "react"
import { Summary } from "@/service/api/services/getSummary"
import { Link2 } from 'lucide-react';
import { usePollingContext } from '@/Context/pollingContext';




export default function SearchBox() {
  const {pollServices,pollCategories } = usePollingContext()
  
  
  
  const [filteredServices, setFilteredServices] = useState<search[]>(pollServices);

  
      
      const data = filteredServices

      // const seeMore = () =>{
      //   const data = filteredServices.slice(0,5)
      // }
      // const seeLess = () => {
      //   const data = filteredServices
      // }
    
  
 
  const handleStatusClick = (status: string) => {
  setFilteredServices(pollServices.filter((pollServices) => pollServices.status === status));
};  
 const handleCategoryClick = async (pollCategories : string) => {
    const data = await Summary.getByCategories(pollCategories);
    setFilteredServices(data);}
    
 const handleSearch = (value: string) => {
  
  setFilteredServices(
    !value.trim()
      ? pollServices
      : pollServices.filter((service) => {
          const cleanInput = value.trim().toLowerCase();
          const serviceName = service.name.trim().toLowerCase();
          return (
            serviceName.includes(cleanInput) &&
            serviceName.charAt(0) === cleanInput.charAt(0)
          );
        })
  );
};
 
 





    return(
        <div >
            <div className="md:flex">
            <div className="pl-3 flex items-center gap-2  bg-white rounded-full md:order-2 md:min-w-[40%]">
                <FontAwesomeIcon icon={faSearch} color="grey" />
            <Input  placeholder="Search services ..."  className="border-none"   onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <div className="flex gap-2 w-full  md:order-1">
                <Button variant="outline" className="mt-2 rounded-full">
                    <FontAwesomeIcon icon={faFilter} color="grey" className="" />
                    
                </Button>
                <DropdownMenu>  
                  <DropdownMenuTrigger asChild > 
                    <Button variant="outline" className="mt-2 rounded-full " >
                        Category <FontAwesomeIcon icon={faChevronDown} className="size-3.5" />
                    </Button>
                  </DropdownMenuTrigger >
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                        { pollCategories.map((pollCategories ) =>(
                         <DropdownMenuItem  textValue={pollCategories} key={pollCategories} onSelect={() => handleCategoryClick(pollCategories)}>
                          {pollCategories}
                         </DropdownMenuItem>
                         ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                    
                    </DropdownMenu>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                    <Button  className="mt-2 rounded-full " >
                        Status  <FontAwesomeIcon icon={faChevronDown} className="size-3.5" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuGroup>
                         <DropdownMenuItem onSelect={() => handleStatusClick('UP')} >
                          UP
                         </DropdownMenuItem>
                         <DropdownMenuItem onSelect={() => handleStatusClick('DOWN')}>
                          DOWN
                         </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                    </DropdownMenu>
               
               
               
            </div>
            </div>
             <div className="overflow-x-auto w-full border mt-2 rounded-lg bg-white md:mt-5 h-60 overflow-y-auto ">
                   <div className="sticky top-0 border-t-2 border-t-black bg-white z-10"></div>
                   <table className="w-full whitespace-nowrap ">
    <thead className="border-b-2 border-t-2 border-t-black sticky top-0 z-10 bg-white">
      <tr className="text-sm text-black text-center border-b ">
        <th className="font-medium p-2">Service</th>
        <th className="font-medium p-2">Status</th>
        <th className="font-medium p-2">Category</th>
        <th className="font-medium p-2 ">Last Ping</th>
        <th className="font-medium p-2 ">Response Time</th>
        <th className="font-medium p-2">Link</th>
      </tr>
    </thead>
     <tbody>
  {data.map((data) => (
    <tr key={data.id} className="text-center border-b">
      <td className="p-2">{data.name}</td>
      <Badge className={`${data.status === 'UP'? "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300":"bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"}`} >{data.status}</Badge>
      <td className="p-2">{data.category}</td>
      <td className="p-2 whitespace-nowrap">{data.last_ping}</td>
      <td className="p-2 whitespace-nowrap">{data.response_time}</td>
      <td className="p-2 text-blue-500"><Link href={data.url}><Link2></Link2></Link></td>
    </tr>
  ))}
</tbody>
                    </table>
                </div>

        </div>
    )
}