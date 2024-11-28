import React, { ReactNode, CSSProperties } from "react";
import Link from "next/link";

interface LinkComponentProps {
    prefetch?: boolean;
    children?: ReactNode;
    linkStyle?: CSSProperties;
    href: string;
    selected?: boolean;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
    prefetch = true,
    children,
    linkStyle = {},
    href,
    selected,
    ...otherProps
}) => {
    return (
        <Link
            prefetch={prefetch}
            href={href}
            style={{
                fontWeight: selected ? "600" : "400",
                textDecoration: "none",
                color: "inherit",
                ...linkStyle,
            }}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default LinkComponent;
