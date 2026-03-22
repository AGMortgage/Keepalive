"use client"
import SearchBox from "@/components/ui/searchbox"
import Charts from "@/components/ui/charts"

import SummaryCard from "@/components/ui/summary_card";
import { usePollingContext } from '@/Context/pollingContext';
import Loader from '@/components/ui/loader '
export default  function Dashboard() {
    const {loading, pollCategories, pollServices} = usePollingContext()
    
 if (loading) return  <Loader />
    return  (   

       <div className="bg-[#f6f6f6] px-5 ">
           
            <div><SummaryCard /></div>
            <div className="pt-5">
            <SearchBox />
            </div>
            
            <div className="pt-5">
            <Charts categories={pollCategories} services={pollServices}/>
            </div>
            
            </div>)
}