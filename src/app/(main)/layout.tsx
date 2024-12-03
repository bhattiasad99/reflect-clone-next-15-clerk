import PageLayout from '@/components/layouts/PageLayout'
import { FC, ReactNode } from 'react'

type IProps = {
    children: ReactNode
}

const layout: FC<IProps> = ({ children }) => {
    return (
        <PageLayout>{children}</PageLayout>
    )
}

export default layout
