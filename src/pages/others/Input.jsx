import React from 'react';

const Input = ({inputName,subInputName,placeholder,storeChange,storeValue}) => {
    return (
        <div className='label'>
            <div>{inputName}<span className='span'>{subInputName}</span></div>
      <input
                type="number"
                placeholder={placeholder}
                title={placeholder}
                onChange={(e) => {
                    storeChange(parseFloat(e.target.value))
                }
            }
            />
           
        </div>
    );
};

export default Input;