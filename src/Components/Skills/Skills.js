import React from 'react';
import * as styles from './styles.module.css';
import images from './images';

//i will need to double check the ring pattern images on the background

function Skills(){
    return(
        <section className={styles.container}>
            <div className={styles.skill}>
                <strong>
                    HTML
                </strong>
                <em>
                    4 Years Experience
                </em>
            </div>
            <div className={styles.skill}>
                <strong>
                    CSS
                </strong>
                <em>
                    4 Years Experience
                </em>
            </div>
            <div className={styles.skill}>
                <strong>
                    Javascript
                </strong>
                <em>
                    4 Years Experience
                </em>
            </div>
            <div className={styles.skill}>
                <strong>
                    Accessibility
                </strong>
                <em>
                    4 Years Experience
                </em>
            </div>
            <div className={styles.skill}>
                <strong>
                    React
                </strong>
                <em>
                    3 Years Experience
                </em>
            </div>
            <div className={styles.skill}>
                <strong>
                    Sass
                </strong>
                <em>
                    3 Years Experience
                </em>
            </div>
            <img className={styles.rings} src={images['rings']} alt='background image'/>
        </section>
    )
}

export default Skills;