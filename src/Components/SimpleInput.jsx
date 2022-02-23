import React, {useState, useEffect} from "react";
import UseInput from "../Hooks/UseInput";


const SimpleInput = (props) => {
    //const nameInputRef = useRef();
    const { value: enteredName,
             hasError: nameInputHasError, 
             valueChangeHandler: nameChangeHandler, 
             inputBlurHandler: nameBlurHandler} = UseInput(value => value.trim() !== '')
    //const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false); //got rid of this state bc we don't need an extra validation state for inputing a name field, 
    //const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    //const [formIsValid, setFormIsValid] = useState();

    // useEffect(() => { // tracks the effect happening on the state and returns a statement to the console, need better explanation for this code, however, in this case it was not needed
    //     if (enteredNameIsValid) {
    //         console.log('Name Is Valid')
    //     }
    // }, [enteredNameIsValid])

    //const enteredNameIsValid = enteredName.trim() !== '';
    //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched//this checks that enteredNameIsValid params are not met and that enteredNameTouched params were met, a double form of validation

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched
    
    
    let formIsValid = false
    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    } //*This is the same as the useEffect below, except more lean and doesn't cause the code to recheck the state with every event
    
    // useEffect(() => {// same as code above, except checks the state more rigorously
    //     if (enteredNameIsValid) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false)
    //     }
    // }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // if (event.target.value.trim() !== '') {//FORM VALIDATION, this if check sees that the input field has characters entered into the field, 'trim' gets rid of whitespace,
        //     //and if the enteredName state is empty, then it returns back to preventDefault and the app won't move forward
        //     setEnteredNameIsValid(true);
        // }
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
        // if (enteredName.trim() === '') {//FORM VALIDATION, this if check sees that the input field has characters entered into the field, 'trim' gets rid of whitespace,
        //     //and if the enteredName state is empty, then it returns back to preventDefault and the app won't move forward
        //     setEnteredNameIsValid(false);
        // }
    };

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        //setEnteredNameTouched(true);
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        // if (enteredName.trim() === '') {//FORM VALIDATION, this if check sees that the input field has characters entered into the field, 'trim' gets rid of whitespace,
        //     //and if the enteredName state is empty, then it returns back to preventDefault and the app won't move forward
        //     setEnteredNameIsValid(false)
        //     return;
        // }
        //setEnteredNameIsValid(true);
        //console.log(enteredName)//checking state output
        // const enteredValue = nameInputRef.current.value;//this just sets state/informs the console what the state is
        // console.log(enteredValue);
        //nameInputRef.current.ref = ''//this will also clear input field, but it is bad practice and not recommended
        setEnteredName('');//clears the input field by using state
        setEnteredNameTouched(false);
        setEnteredEmail('');
        setEnteredEmailTouched(false);

    }


    const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input type='text'
                 id="name"
                  onChange={nameInputChangeHandler} 
                  value={enteredName} 
                  onBlur={nameInputBlurHandler}/>
                {nameInputIsInvalid && <p className="error-text">Name Must Not Be Empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">E-mail Address</label>
                <input type='email'
                 id="email"
                  onChange={emailInputChangeHandler} 
                  value={enteredEmail} 
                  onBlur={emailInputBlurHandler}/>
                {emailInputIsInvalid && <p className="error-text">E-mail Must Not Be Empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput