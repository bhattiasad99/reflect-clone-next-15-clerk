import { ComponentPropsWithoutRef, FC, ReactNode } from "react"

type HeadingVariants = {
    h1: ComponentPropsWithoutRef<"h1">;
    h2: ComponentPropsWithoutRef<"h2">;
    h3: ComponentPropsWithoutRef<"h3">;
    h4: ComponentPropsWithoutRef<"h4">;
    h5: ComponentPropsWithoutRef<"h5">;
    p: ComponentPropsWithoutRef<"p">;
};

type VariantKeys = keyof HeadingVariants;

type IProps<V extends VariantKeys> = {
    children: ReactNode;
    variant?: V;
    className?: string; // add more tailwind classes
    classOverrite?: string; // replace all tailwind classes. If this is applied className will not be considered
} & HeadingVariants[V];

const TypographyComponent: FC<IProps<VariantKeys>> = ({ children, variant = "p", className = '', classOverrite = '', ...otherProps }) => {
    const propConfig = {
        common: {},
        baseClasses: {
            h1: 'text-5xl md:text-7xl lg:text-8xl',
            h2: '',
            h3: '',
            h4: '',
            h5: '',
            p: 'text-sm',
        }
    }

    const buildClass = (elem: VariantKeys) => classOverrite !== '' ? classOverrite : `${propConfig.baseClasses[elem]} ${className}`

    switch (variant) {
        case "h1":
            return <h1 className={buildClass('h1')} {...propConfig.common} {...otherProps}>{children}</h1>
        case "h2":
            return <h2 className={buildClass('h2')} {...propConfig.common} {...otherProps}>{children}</h2>
        case "h3":
            return <h3 className={buildClass('h3')} {...propConfig.common} {...otherProps}>{children}</h3>
        case "h4":
            return <h4 className={buildClass('h4')} {...propConfig.common} {...otherProps}>{children}</h4>
        case "h5":
            return <h5 className={buildClass('h5')} {...propConfig.common} {...otherProps}>{children}</h5>
        case "p":
            return <p className={buildClass('p')} {...propConfig.common} {...otherProps}>{children}</p>
    }
}

export default TypographyComponent