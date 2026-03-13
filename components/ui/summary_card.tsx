"use client"

import { dashboard } from "@/types/dashboard";
interface CardProps {
  stats: dashboard;
}
export default function SummaryCard ({stats}: CardProps) {


 
 
   
    return (
        <div className=" ">
           <div className="grid 
                grid-cols-[repeat(2,minmax(50px,1fr))]  
                md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  
                pt-5 
                gap-2 px-3 mb-3 bg">
               
                <div className="rounded-lg p-4 bg-white">
                    
                        <div className="text-center font-bold " >Total Services</div>
                        <div className="text-center text-blue-600 font-bold">{stats?.totalServices}</div>

                   

                </div>
                <div className="rounded-lg p-4 bg-white">
                    
                        <div className="text-center font-bold" >Total Up</div>
                        <div className="text-center text-green-600 font-bold">{stats?.latestChecks?.filter(x => x.status === "UP").length ?? 0}</div>

                   

                </div>
                <div className="rounded-lg p-4 bg-white">
                    
                        <div className="text-center font-bold" >Total Down</div>
                        <div className="text-center text-red-600  font-bold">{stats?.latestChecks?.filter(x => x.status === "DOWN").length ?? 0}</div>

                   

                </div>
                <div className="rounded-lg p-4 bg-white">
                    
                        <div className="text-center font-bold" >Total Checks</div>
                        <div className="text-center  font-bold">{stats?.totalChecks}</div>

                   

                </div>
                <div className="rounded-lg p-4 bg-white">
                    
                        <div className="text-center font-bold" >Latest Check</div>
                        <div className="text-center  font-bold">{stats?.latestChecksCount}</div>

                   

                </div>
                 
                
            </div>
            
        </div>
    )
}