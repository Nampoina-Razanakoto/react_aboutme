import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Pour me contacter</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Antananarivo,Manjakaray</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0326259598">
                                <span className="clickInput" onClick={() =>{ alert('Numero copié!');}}>
                                    032 62 595 98
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="nampoinarazanakoto@gmail.com">
                                <span className="clickInput" onClick={() =>{ alert('Adresse copié!');}}>
                                    nampoinarazanakoto@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/nampoina-razanakoto-2953381a4/" target="blank" rel="noopener noreferrer" >
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Nampoina-Razanakoto" target="blank" rel="noopener noreferrer" >
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/RazanakotoNamp4" target="blank" rel="noopener noreferrer" >
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://web.facebook.com/nampoina.razanakoto" target="blank" rel="noopener noreferrer" >
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </ul>
                </div>
            </div>  
        </div>
    );
};

export default Contact;