import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FC, ReactNode } from "react"

type IProps = {
    children: ReactNode,
    label: string
}

const TooltipComponent: FC<IProps> = ({ children, label }) => {
    return (
        <>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <p>{label}</p>
                </TooltipContent>
            </Tooltip>
        </>
    )
}

export default TooltipComponent