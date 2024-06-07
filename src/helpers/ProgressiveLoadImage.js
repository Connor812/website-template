import React, { useState, useEffect, useRef } from 'react';

function ProgressiveLoadImage({ src, alt, className, height, width }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = src;

        setIsLoaded(false); // Reset the loading state

        // Check if the image is already loaded
        if (img.complete) {
            setIsLoaded(true);
            if (imgRef.current) {
                imgRef.current.classList.remove('image-loading');
            }
        } else {
            img.onload = () => {
                setIsLoaded(true);
            };
        }
    }, [src]);

    return (
        <>
            {!isLoaded ? (
                <div
                    className={`image-placeholder ${className}`}
                    style={{ width: width, height: height }}
                />
            ) : (
                <img
                    alt={alt}
                    src={src}
                    className={`${className} ${isLoaded ? '' : 'image-loading'}`}
                    ref={imgRef}
                    loading="lazy"
                    width={width}
                    height={height}
                />)}
        </>
    );
}

export default ProgressiveLoadImage;