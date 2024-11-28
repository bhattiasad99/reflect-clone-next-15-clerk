import { FC, ReactNode } from "react"

type IProps = {
    children: ReactNode
}

const AuthLayout: FC<IProps> = ({ children }) => {
    return (
        <div className="flex justify-center pt-20">{children}</div>
    )
}

export default AuthLayout