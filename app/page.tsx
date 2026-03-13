import SearchBox from "@/components/ui/searchbox"
import Charts from "@/components/ui/charts"
import { Summary } from "@/service/api/services/getSummary"
export default async function Dashboard() {
    const categories = await Summary.getCategories()
    const services = await Summary.getServices()
    
 
    return  (

       <div className="bg-[#f6f6f6] px-5 ">
        
            <div className="pt-5">
            <SearchBox categories={categories} services={services}/>
            </div>
            <div className="pt-5">
            <Charts categories={categories} services={services}/>
            </div>
            
            </div>)
}