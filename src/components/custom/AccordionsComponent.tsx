import { FC, ReactNode } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

type SingleAccordionMenu = {
    label: string,
    content: string | ReactNode
}

type IProps = {
    menus: SingleAccordionMenu[]
}

const AccordionsComponent: FC<IProps> = ({ menus }) => {
    return (
        <Accordion type='single' collapsible className="w-full">
            {menus.map((eachMenu, index) => <AccordionItem key={index} value={`${index}`}>
                <AccordionTrigger className='!text-titles font-semibold hover:no-underline hover:font-bold transition-all'>{eachMenu.label}</AccordionTrigger>
                <AccordionContent>
                    {eachMenu.content}
                </AccordionContent>
            </AccordionItem>)}
        </Accordion>
    )
}

export default AccordionsComponent