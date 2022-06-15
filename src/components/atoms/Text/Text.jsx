import React from 'react';
import TextStyle from './TextStyle';

const Text = ({
    value,
    className,
    useStyle,
    onClick
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
                <TextStyle className={className} onClick={onClick}>
                    {value}
                </TextStyle>
           ) : 
                <p className={className} onClick={onClick}>
                    {value}
                </p>
           }
            
        </>
    );
};

export default Text;