import React from 'react';
import TextStyle from './HeaderTextStyle';

const Heading = ({
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
                <h2 className={className} onClick={onClick}>
                    {value}
                </h2>
           }
            
        </>
    );
};

export default Heading;