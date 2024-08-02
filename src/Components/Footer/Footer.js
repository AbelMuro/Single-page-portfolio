import React from 'react';
import Form from './Form';
import * as styles from './styles.module.css';

//i will need to implement the line, logo and the social links below the form
function Footer() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Contact
                </h1>
                <p>
                    I would love to hear about 
                    your project and how I could help. 
                    Please fill in the form, and 
                    I’ll get back to you as soon 
                    as possible.
                </p>   
                <Form/>                          
            </div>
        </section>
    )
}

export default Footer;