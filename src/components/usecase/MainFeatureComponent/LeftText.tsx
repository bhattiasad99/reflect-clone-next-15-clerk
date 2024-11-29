import TypographyComponent from '@/components/custom/TypographyComponent'
import { FileText } from 'lucide-react'
import React from 'react'

const LeftText = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className="w-fit p-2 rounded-full bg-orange-200 bg-opacity-15">
                <FileText size={20} color="#916524" />
            </div>
            <TypographyComponent variant='h2' classExtends='text-[#634518] font-semibold'>
                Rich Text Editor
            </TypographyComponent>
            <TypographyComponent variant='p' classExtends='text-primary text-sm'>
                Express yourself fully with our powerful editor featuring:
            </TypographyComponent>
            <li className="list-none">
                <ul className='text-sm flex gap-2 items-center'>
                    <div className="w-2 h-2 bg-primary rounded-full">&nbsp;</div>
                    <span>Format text with ease</span>
                </ul>
                <ul className='text-sm flex gap-2 items-center'>
                    <div className="w-2 h-2 bg-primary rounded-full">&nbsp;</div>
                    <span>Embed links</span>
                </ul>
            </li>
        </div>
    )
}

export default LeftText