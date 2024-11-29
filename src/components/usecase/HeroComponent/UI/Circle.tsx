import { FC } from "react"


type IProps = {
    classExtend?: string
}

const Circle: FC<IProps> = ({ classExtend = 'orange-600' }) => {
    return (
        <div className={`h-[0.6rem] w-[0.6rem] rounded-full ${classExtend}`} />
    )
}

export default Circle