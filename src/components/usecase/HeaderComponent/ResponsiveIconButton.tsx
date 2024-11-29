import { Button, ButtonProps } from '@/components/ui/button'
import { FC, ReactNode } from 'react'

type IProps = {
    children: ReactNode,
    icon: ReactNode
} & ButtonProps

const ResponsiveIconButton: FC<IProps> = ({ children, variant = 'default', icon }) => {
    return (
        <Button variant={variant} className="flex items-center gap-2">
            {icon}
            <span className="hidden md:inline">{children}</span>
        </Button>
    )
}

export default ResponsiveIconButton