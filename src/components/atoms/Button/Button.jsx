import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import LoadSpinner from '../Loader/Loader';


const Button = ({
    type,
    id = '',
    value,
    useStyle,
    onClick,
    className = '',
    isLoading = false,
    loaderColor = '#fff',
    disabled = false,
    ...props
}) => {
    return (
        <>
           { (useStyle === undefined) ? (
               <ButtonStyle
               id={id}
               type={type}
               onClick={onClick}
               className={className}
               disabled={isLoading || disabled}
               {...props}
           >
               {isLoading ? (
                   <LoadSpinner type={`Oval`} color={loaderColor} height={20} width={20} />
               ) : (
                   value
               )}
           </ButtonStyle>
           ) : 
           <button
                id={id}
                type={type}
                onClick={onClick}
                className={className}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading ? (
                    <LoadSpinner type={`Oval`} color={loaderColor} height={20} width={20} />
                ) : (
                    value
                )}
            </button>           
           }
            
        </>
    );
};

export default Button;