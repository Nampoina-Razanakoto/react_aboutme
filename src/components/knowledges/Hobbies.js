import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Interets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span> Course a pied</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span> Astronomie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-tv"></i>
                    <span> Jeux Video</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-video"></i>
                    <span> Cinema</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span> Premaculture</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;