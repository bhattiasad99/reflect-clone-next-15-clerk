import { pageContent } from "@/constants";
import { FC, ReactNode } from "react";

type IProps = {
    children: ReactNode,
    className?: string
}

const PageLayout: FC<IProps> = ({ children, className = '' }) => {
    return (
        <div className={`${pageContent} ${className}`}>{children}</div>
    )
}

export default PageLayout