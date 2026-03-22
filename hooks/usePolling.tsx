"use client"
import {useEffect, useState} from "react";
import { Summary } from "@/service/api/services/getSummary";
import { dashboard, search } from "@/types/dashboard";



export default function usePolling(){
      const [pollServices, setPollServices] = useState<search[]>([])
      const [pollCategories, setPollCategories] = useState<string[]>([])
      const [pollDashboard, setPollDashboard] = useState<dashboard>()
      const [loading, setLoading] = useState(true) 
 
      const fetchData = async () =>{
        try {
      const [Services,Categories,Dashboard] = await Promise.all([
         Summary.getServices().catch(err => {console.error("getService fails:", err); return []}),
         Summary.getCategories().catch(err => {console.error("getCategories fails:", err); return []}),
         Summary.getDashboard().catch(err => {console.error("getDashboard fails:", err); return undefined})
      ])
      
      
       setPollServices(Services)
       setPollCategories(Categories)
       setPollDashboard(Dashboard)
       console.log("hi")
       
       
       
    } catch(error){
        console.error("Fetch failed, retrying...", error);
        
    }finally{
      setLoading(false)
    }
      };
      
console.log("loading:", loading);
      
      useEffect(() => {
    fetchData(); // 👈 call immediately on mount

    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval); // 👈 cleanup on unmount
  }, []);
     
     return {pollServices, pollCategories, pollDashboard, loading}
     
     

    
}