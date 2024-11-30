import { FC, ReactNode } from 'react'
import TypographyComponent from '../custom/TypographyComponent'

type IProps = {
    icon: ReactNode,
    title: string,
    description: string,
    points: string[]
}

const LandingPageFeature: FC<IProps> = ({ icon, title, description, points }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="w-fit p-2 rounded-full bg-orange-200 bg-opacity-15">
                {icon}
            </div>
            <TypographyComponent variant='h2' classExtends='text-[#634518] font-semibold'>
                {title}
            </TypographyComponent>
            <TypographyComponent variant='p' classExtends='text-primary text-sm'>
                {description}
            </TypographyComponent>
            <li className="list-none">
                {points.map(eachPt => <ul
                    key={eachPt}
                    className='text-sm flex gap-2 items-center'>
                    <div className="w-2 h-2 bg-primary rounded-full">&nbsp;</div>
                    <span>{eachPt}</span>
                </ul>)}
            </li>
        </div>
    )
}

export default LandingPageFeature