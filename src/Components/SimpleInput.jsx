import React, {useState, useRef} from "react";


const SimpleInput = (props) => {
    const nameInputRef = useRef()
    const [enteredName, setEnteredName] = useState('')
    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredName)
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        nameInputRef.current.ref = ''//this will also clear input field, but it is bad practice and not recommended
        setEnteredName('');//clears the input field by using state

    }
    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input ref={nameInputRef} type='text' id="name" onChange={nameInputChangeHandler} value={enteredName}/>
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput