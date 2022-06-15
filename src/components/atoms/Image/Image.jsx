import React from 'react';

const Image = ({
    image,
    className,
    alt,
    onClick
}) => {
    return (
        <>
            <img src={image} className={className} alt={alt} onClick={onClick}/>
        </>
    );
};

export default Image;