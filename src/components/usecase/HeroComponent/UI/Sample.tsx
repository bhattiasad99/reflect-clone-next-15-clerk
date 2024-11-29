import { Calendar } from "lucide-react"
import Circle from "./Circle"
import TypographyComponent from "@/components/custom/TypographyComponent"

const Sample = () => {
    return (
        <div className="bg-white px-4 py-2 rounded-t-xl max-w-screen-md mx-auto">
            <div className="flex justify-between items-center border-b-[1px] pb-2 mb-2 border-gray-100">
                <div className="flex gap-2 items-center">
                    <Calendar size={18} />
                    Today&apos;s Entry
                </div>
                <div className="flex gap-1 items-center">
                    <Circle classExtend="bg-orange-300" />
                    <Circle classExtend="bg-orange-400" />
                    <Circle classExtend="bg-orange-500" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <TypographyComponent>Identify sources of happiness.</TypographyComponent>
                <div className="flex flex-col gap-2 w-full mb-4">
                    <div className="h-4 w-[80%] bg-orange-500 bg-opacity-10 rounded-md" />
                    <div className="h-4 w-[100%] bg-orange-400 bg-opacity-10 rounded-md" />
                    <div className="h-4 w-[40%] bg-orange-300 bg-opacity-10 rounded-md" />
                </div>
            </div>
        </div>
    )
}

export default Sample