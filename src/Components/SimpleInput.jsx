import React, {useState, useRef} from "react";


const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim() === '') {//FORM VALIDATION, this if check sees that the input field has characters entered into the field, 'trim' gets rid of whitespace,
            //and if the enteredName state is empty, then it returns back to preventDefault and the app won't move forward
            setEnteredNameIsValid(false)
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName)//checking state output
        const enteredValue = nameInputRef.current.value;//this just sets state/informs the console what the state is
        console.log(enteredValue);
        //nameInputRef.current.ref = ''//this will also clear input field, but it is bad practice and not recommended
        setEnteredName('');//clears the input field by using state

    }
    const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type='text' id="name" onChange={nameInputChangeHandler} value={enteredName}/>
                {!enteredNameIsValid && <p className="error-text">Name Must Not Be Empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput