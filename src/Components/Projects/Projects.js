import React, {useState, useEffect} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion, AnimatePresence} from 'framer-motion';
import { buttonVariant, overlayVariant } from './Variants';
import * as styles from './styles.module.css';

function Projects() {
    const [project, setProject] = useState('');
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const handleMouseEnter = (project) => {
        setProject(project);
    }

    const handleMouseLeave = () => {
        setProject('');
    }

    useEffect(() => {
        console.log(project);
    }, [project])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                Projects
            </h1>
            <button className={styles.contact_button}>
                contact me
            </button>
            <article className={styles.project}>
                <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('design portfolio')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'design portfolio' && 
                            <motion.div 
                                className={styles.overlay} 
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}>
                                    <div className={styles.content}>
                                        <motion.button variants={buttonVariant}>
                                            view project
                                        </motion.button>
                                        <motion.button variants={buttonVariant}> 
                                            view code
                                        </motion.button>
                                    </div>
                            </motion.div>}                        
                    </AnimatePresence>
                </div>
                <h2>
                    design portfolio 
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
            <article className={styles.project}>
                <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('e-learning landing page')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'e-learning landing page' &&  
                            <motion.div 
                                className={styles.overlay}
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}>
                                <div className={styles.content}>
                                    <motion.button variants={buttonVariant}>
                                        view project
                                    </motion.button>
                                    <motion.button variants={buttonVariant}>
                                        view code
                                    </motion.button>
                                </div>
                            </motion.div>}                        
                    </AnimatePresence>
                </div>
                <h2>
                    e-learning landing page
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
            <article className={styles.project}>
                <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('todo web app')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'todo web app' && 
                            <motion.div 
                                className={styles.overlay}
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}>
                                    <div className={styles.content}>
                                        <motion.button variants={buttonVariant}>
                                            view project
                                        </motion.button>
                                        <motion.button variants={buttonVariant}>
                                            view code
                                        </motion.button>
                                    </div>
                            </motion.div>}                        
                    </AnimatePresence>
                </div>
                <h2>
                    todo web app
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                    <p>
                        javascript
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
            <article className={styles.project}>
            <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('entertainment web app')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'entertainment web app' && 
                            <motion.div 
                                className={styles.overlay}
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}>
                                    <div className={styles.content}>
                                        <motion.button variants={buttonVariant}>
                                            view project
                                        </motion.button>
                                        <motion.button variants={buttonVariant}>
                                            view code
                                        </motion.button>
                                    </div>
                            </motion.div>}
                    </AnimatePresence>
                </div>
                <h2>
                     entertainment web app
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                    <p>
                        javascript
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
            <article className={styles.project}>
                <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('memory game')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'memory game' && 
                            <motion.div 
                                className={styles.overlay}
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}>
                                    <div className={styles.content}>
                                        <motion.button variants={buttonVariant}>
                                            view project
                                        </motion.button>
                                        <motion.button variants={buttonVariant}>
                                            view code
                                        </motion.button>
                                    </div>
                            </motion.div>}                        
                    </AnimatePresence>
                </div>
                <h2>
                    memory game
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                    <p>
                        javascript
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
            <article className={styles.project}>
                <div className={styles.project_image} onMouseEnter={() => handleMouseEnter('art gallery showcase')} onMouseLeave={handleMouseLeave}>
                    <img alt='project image'/>
                    <AnimatePresence>
                        {project === 'art gallery showcase' && 
                            <motion.div 
                                className={styles.overlay}
                                initial='hide'
                                animate='show'
                                exit='exit'
                                variants={overlayVariant}
                                >
                                <div className={styles.content}>
                                    <motion.button variants={buttonVariant}>
                                        view project
                                    </motion.button>
                                    <motion.button variants={buttonVariant}>
                                        view code
                                    </motion.button>
                                </div>
                            </motion.div>}
                    </AnimatePresence>
                </div>
                <h2>
                    art gallery showcase
                </h2>
                <div className={styles.project_tech}>
                    <p>
                        html
                    </p>
                    <p>
                        css
                    </p>
                    <p>
                        javascript
                    </p>
                </div>
                {tablet && <div className={styles.project_buttons}>
                    <button>
                        view project
                    </button>
                    <button>
                        view code
                    </button>
                </div>}
            </article>
        </section>  
    )
}

export default Projects;