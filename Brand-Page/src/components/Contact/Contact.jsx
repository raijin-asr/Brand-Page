import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={`${styles.contactDiv} container`}>
            <div className={styles.contactDivContent}>
                <h1>Contact Us</h1>
                <p>
                    We are happy to see you here. Please feel free to reach out to us.
                </p>

                <div className={styles.contactDivForm}>
                    <form>
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