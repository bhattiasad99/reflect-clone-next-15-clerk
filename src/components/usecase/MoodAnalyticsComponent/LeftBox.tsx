import { Card } from '@/components/ui/card'

const LeftBox = () => {
    return (
        <Card className='p-3 space-y-4 hidden md:block h-44'>
            <div className='w-full h-4/5 bg-gradient-to-b from-[#f7ecda] to-[#f3e1c2] rounded-md ' />
            <div className="flex justify-between">
                <div className='w-12 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
                <div className='w-12 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
                <div className='w-12 h-4 bg-[#fac569]  rounded-md bg-opacity-35' />
            </div>
        </Card>
    )
}

export default LeftBox