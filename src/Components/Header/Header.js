import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function Header(){
    return(
        <header className={styles.container}>
            <strong>
                adamkeyes
            </strong>
            <ul className={styles.social_links}>
                <li className={styles.social_link}>
                </li>
                <li className={styles.social_link}>
                </li>
                <li className={styles.social_link}>
                </li>
                <li className={styles.social_link}>
                </li>
            </ul>
            <section className={styles.content}>
                <h1>
                    Nice to meet you! 
                    I'm <span>Adam Keyes</span>
                </h1>
                <p>
                    Based in the UK, I’m a front-end developer 
                    passionate about building accessible web 
                    apps that users love.
                </p>
                <button>
                    contact me
                </button>
            </section>
            <div className={styles.image_container}>
                <img className={styles.profile_image} alt='developers photo'/>
                <img className={styles.circle} src={icons['circle']} alt='background image'/>
            </div>
            <img className={styles.rings} src={icons['rings']} alt='background image'/>
        </header>
    )
}

export default Header;