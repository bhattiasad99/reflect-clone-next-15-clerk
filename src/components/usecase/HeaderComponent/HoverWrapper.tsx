'use client'

import { FC, ReactNode, useEffect, useState } from "react"

type IProps = {
    children: ReactNode
}

const HoverWrapper: FC<IProps> = ({ children }) => {
    const [opaqueNav, setOpaqueNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = +window.scrollY.toFixed(0)
            const benchMark = 100;

            if (scrollPosition < benchMark) {
                setOpaqueNav(false)
            }

            else {
                setOpaqueNav(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <header className={`w-full fixed inset-x-0 top-0 opacity-${opaqueNav ? 10 : 100} hover:opacity-100 transition-all`}>{children}</header>
    )
}

export default HoverWrapper