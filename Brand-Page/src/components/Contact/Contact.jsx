import styles from './Contact.module.css';
import {MdOutlinePhoneCallback} from 'react-icons/md';

const Contact = () => {
    const onSubmitForm = (e) => {
        let name, email, message;
        e.preventDefault();
        name = e.target[0].value;
        email = e.target[1].value;
        message = e.target[2].value;

        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
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
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            <div className={styles.contactDivImage}>
                <img src="images/messi1.jpg" alt="contactDiv-image" />
            </div>
        </div>
    );
};

export default Contact;