import React from 'react';
import InputStyle from './InputStyle';

const Input = ({
    value,
    type,
    id,
    onChange,
    onFocus,
    onKeyPress,
    className,
    name,
    placeholder,
    defaultChecked,
    useStyle,
    checked,
    onClick
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
                <InputStyle type={type} id={id} defaultChecked={defaultChecked} className={className} value={value} name={name} onChange={onChange} onFocus={onFocus} placeholder={placeholder} onKeyPress={onKeyPress} checked={checked} onClick={onClick}>
                    
                </InputStyle>
           ) : 
                <input type={type} id={id} className={className} value={value} name={name} onChange={onChange} placeholder={placeholder} onKeyPress={onKeyPress} checked={checked} onClick={onClick}/>
           }
            
        </>
    );
};

export default Input;