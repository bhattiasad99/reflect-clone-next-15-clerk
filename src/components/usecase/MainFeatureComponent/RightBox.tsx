import { Card } from '@/components/ui/card'
import React from 'react'

const RightBox = () => {
    return (
        <Card className='p-3 space-y-4'>
            <div className="flex gap-1">
                <div className='w-4 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
                <div className='w-4 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
                <div className='w-4 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
            </div>

            <div className="flex flex-col gap-2">
                <div className='h-3 w-3/4 bg-[#fac569]  rounded-md bg-opacity-10' />
                <div className='h-3 w-full bg-[#fac569]  rounded-md bg-opacity-10' />
                <div className='h-3 w-1/2 bg-[#fac569]  rounded-md bg-opacity-10' />
                <div className='h-3 w-1/4 bg-[#fac569]  rounded-md bg-opacity-10' />
            </div>
        </Card>
    )
}

export default RightBox