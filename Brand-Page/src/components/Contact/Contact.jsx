import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={`${styles.contactDiv} container`}>
            <div className={styles.contactDivContent}>
                <h1>Contact me. 📞</h1>
                <p>
                    Please feel free to reach out to me. 😁 Fill out the form and I will get back to you as soon as possible. 🚀
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