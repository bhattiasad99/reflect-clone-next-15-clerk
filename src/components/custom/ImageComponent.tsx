import React, { CSSProperties } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ImageComponentProps {
    source: string | StaticImport;
    width?: string;
    height?: string;
    alt?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    position?: "absolute" | "relative" | "fixed" | "static" | "sticky";
    overflow?: "visible" | "hidden" | "clip" | "scroll" | "auto";
    imageClassName?: string;
    sizes?: string;
    imageStyle?: CSSProperties;
    containerStyle?: CSSProperties;
    onClick?: () => void;
    priority?: boolean;
    classes?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
    source,
    width = "100%",
    height = "100%",
    alt = "image",
    objectFit = "contain",
    position = "relative",
    overflow = "auto",
    imageClassName = "",
    sizes = "33vw",
    imageStyle = {},
    containerStyle = {},
    classes = '',
    priority = false,
    onClick,
    ...otherProps
}) => {
    return (
        <div className={`${classes} `}
            style={{
                position: position,
                overflow: overflow,
                height: height,
                width: width, ...containerStyle
            }}
        // {...otherProps}
        >
            <Image
                src={source}
                // placeholder="blur"
                alt={alt}
                fill={true}
                style={{ objectFit: objectFit, ...imageStyle }}
                className={`${imageClassName}`}
                sizes={sizes}
                priority={priority}
                onClick={onClick}
                {...otherProps}
            />
        </div>
    );
};

export default ImageComponent;
