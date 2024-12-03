'use client'
import LinkComponent from '@/components/custom/LinkComponent'
import { FC, ReactNode, Suspense } from 'react'
import { BarLoader } from 'react-spinners';

type IProps = {
    children: ReactNode
}

const WriteLayout: FC<IProps> = ({ children }) => {
    return (
        <div>
            <div className="mb-2 text-primary">
                <LinkComponent href="/dashboard">← Back to Dashboard</LinkComponent>
            </div>
            <Suspense fallback={<BarLoader color="orange" width={"100%"} />}>
                <div>{children}</div>
            </Suspense >
        </div>
    )
}

export default WriteLayout
