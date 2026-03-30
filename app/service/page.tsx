import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { RefreshCcwIcon } from "lucide-react"
import SearchBox from "@/components/ui/searchbox"
export default function ServicePage() {
    return(
    <div className="w-full bg-[#f6f6f6]  min-h-screen md:px-4 ">
        <div className=" flex justify-end pt-5 ">
            <div className="  bg-white w-fit p-2 rounded-full ">
                <div className="flex gap-2 bg-[#f6f6f6] rounded-full p-0.5">
                <Button variant="outline" className="rounded-full "><RefreshCcwIcon/>Refresh</Button>
          <Button  className="rounded-full "> <Plus/>Create</Button>
          </div>

          </div>
          </div>
         <div className="mt-5"> <SearchBox/></div>
        </div>
    )
}