import React, {useState} from 'react';

const UseInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouch] = useState(false);
    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouch(true);
    };

    return {
        value: enteredValue, hasError, valueChangeHandler, inputBlurHandler
    }

    return (
        <div>
             
        </div>
    )
}

export default UseInput 