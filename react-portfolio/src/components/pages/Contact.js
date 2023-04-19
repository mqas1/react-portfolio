import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

function Contact () {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormFocus = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    // if field loses focus without any input an error message will be rendered
    if (inputType === 'userName' && !inputValue){
      setErrorMessage(
        'Your name is required'
      );
      return;
    } else if (inputType === 'email' && !inputValue){
      setErrorMessage(
        'Your email is required'
      );
      return;
    } else if (inputType === 'message' && !inputValue){
      setErrorMessage(
        'A message is required'
      );
      return;
    }

    // validates email address with helper function in ./utils folder
    if (!validateEmail(email)) {
      setErrorMessage('Must be a valid email address');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
  
    // clears error message
    setErrorMessage('');
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If successful, we want to clear out the input after submitting a message.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form">
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleFormFocus}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleFormFocus}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleFormFocus}
          type="text"
          placeholder="message"
        />
        <button className='btn btn-primary' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;