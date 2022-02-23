import React, {useState} from 'react';

const BasicForm = (props) => {
    const [enteredFirst, setEnteredFirst] = useState('');
    const [enteredLast, setEnteredLast] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    const [touchFirst, setTouchFirst] = useState(false);
    const [touchLast, setTouchLast] = useState(false);
    const [touchEmail, setTouchEmail] = useState(false);

    const [enteredFirstIsValid, setEnteredFirstIsValid] = useState(false);
    const [enteredLastIsValid, setEnteredLastIsValid] = useState(false);
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setTouchFirst(true);
        if (enteredFirst.trim == '') {
            setEnteredFirstIsValid(fasle);
            return
        }
        setEnteredFirstIsValid(true);
        setTouchLast(true);
        if (enteredLast.trim() == '') {
            setEnteredLastIsValid(false);
            return;
        }
        setEnteredLastIsValid(true);
        setTouchEmail(true);
        if (enteredEmail.includes() !== '@') {
            setEnteredEmailIsValid(false);
            return;
        }
        setEnteredEmailIsValid(true);
        setEnteredEmail('');
        setEnteredFirst('');
        setEnteredLast('');
    };

    const fistBlurHandler = () => {
        setTouchFirst(true);
        if (enteredFirst.trim() !== '') {
            setEnteredFirstIsValid(false);
        }
    };

    const lastBlurHandler = () => {
        setTouchLast(true);
        if (enteredLast.trim() !== '') {
            setEnteredLastIsValid(false);
        }
    };

    const emailBlurHandler = () => {
        setTouchEmail(true);
        if (enteredEmail.includes() !== '@') {
            setEnteredEmailIsValid(false);
        }
    };

    const firstInputChangeHandler = (event) => {
        setEnteredFirst(event.target.value);
        if (event.target.value.trim() !== '') {
            setEnteredFirstIsValid(true);
        }
    };

    const lastInputChangeHandler = (event) => {
        setEnteredLast(event.target.value);
        if (event.target.value.trim() !== '') {
            setEnteredLastIsValid(true);
        }
    };

    const emailtInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        if (event.target.value.includes == '@') {
            setEnteredEmailIsValid(true);
        }
    };

    const firstInputIsValid = !enteredFirstIsValid && touchFirst;
    const lastInputIsValid = !enteredLastIsValid && touchLast;
    const emailInputIsValid = !enteredEmailIsValid && touchEmail;
    
    const firstInputClasses = firstInputIsValid
    ? 'form-control invalid'
    : 'form-control'

    const lastInputClasses = lastInputIsValid
    ? 'form-control invalid'
    : 'form-control'

    const emailtInputClasses = emailInputIsValid
    ? 'form-control invalid'
    : 'form-control'

    const 
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={firstInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input type='text' id="name" value={enteredFirst} onChange={firstInputChangeHandler} onBlur={fistBlurHandler} />
                    {firstInputIsValid && <p className='error-text'>First Name Must Not Be Empty</p>}
                </div>
                <div className={lastInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id='name' value={enteredLast} onChange={lastInputChangeHandler} onBlur={lastBlurHandler}/>
                    {lastInputIsValid && <p className='error-text'>Last Name Must Not Be Empty</p>}
                </div>
            </div>
            <div className={emailtInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input type='text' id='name' value={enteredEmail} onChange={emailtInputChangeHandler} onBlur={emailBlurHandler}/>
                {emailInputIsValid && <p className='error-text'>Email Must Not Be Empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={firstInputIsValid || lastInputIsValid || emailInputIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm
