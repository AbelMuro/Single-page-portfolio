import React from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './styles.css';

function App() {
    return(
        <main>
            <Header/>
            <Skills/>
            <Projects/>
            <Footer/>
        </main>
    )
}

export default App;