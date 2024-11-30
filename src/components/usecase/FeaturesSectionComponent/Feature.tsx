import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { FC, ReactNode } from 'react'

type IProps = {
    icon: ReactNode,
    title: string,
    description: string
}

const Feature: FC<IProps> = ({ icon, title, description }) => {
    return (
        <Card className='p-4 flex flex-col gap-2'>
            <div className="bg-[#f3c37c] bg-opacity-25 inline-flex p-2 w-min rounded-full">
                {icon}
            </div>
            <CardTitle className='text-titles'>{title}</CardTitle>
            <CardDescription className='text-primary-dark'>{description}</CardDescription>
        </Card>
    )
}

export default Feature