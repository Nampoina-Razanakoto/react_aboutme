import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>About Nampoina</h1>
                    <h2>Etudiant ISPM ESIIA3</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target=" blank">Telecharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;