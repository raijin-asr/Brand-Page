import styles from './Contact.module.css';
import {MdOutlinePhoneCallback} from 'react-icons/md';
import React, { useState } from 'react';

const Contact = () => {
    //use of useState hook to store the form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmitForm = (e) => {
        // let name, email, message;
        e.preventDefault();

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
          }

        //fetching the form ---future use
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setMessage(e.target[2].value);
        
        // name = e.target[0].value;
        // email = e.target[1].value;
        // message = e.target[2].value;

        // alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        setIsFormSubmitted(true);

    };
    return (
        <div className={`${styles.contactDiv} container`}>
            <div className={styles.contactDivContent}>
                <h1>Contact me <MdOutlinePhoneCallback fontSize="26px"/></h1>
                <p>
                    Please feel free to reach out to me. 😁 Fill out the form and I will get back to you as soon as possible. 🚀
                </p>

                <div className={styles.contactDivForm}>
                    <form onSubmit={onSubmitForm}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        <button>Submit</button>
                    </form>
                  
                </div>
                {isFormSubmitted && (
                        <div className={styles.cardbox}>
                        <p><strong>Name:</strong> {name}
                        <strong>Email:</strong> {email}
                        <strong>Message:</strong> {message}</p>
                        </div>
                    )}
            </div>
            <div className={styles.contactDivImage}>
                <img src="images/messi1.jpg" alt="contactDiv-image" />
            </div>
        </div>
    );
};

export default Contact;