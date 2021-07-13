import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Experience</h3>
            <div className="exp-1">
                <h4>Projet d'etude 1ere Annee: Communication via Laser</h4>
                <h5>2018-2019</h5>
                <p>Projet d etude premiere annee, qui consiste a echanger des messages codees sous forme de signaux lumineux entre 2 conceptions; emetteur et recepteur de signaux lumineux.</p>
            </div>
            <div className="exp-2">
                <h4>Projet d'etude 2eme Annee: 3D-EVO</h4>
                <h5>2019-2020</h5>
                <p>Projet d etude deuxieme annee, qui consiste a recuperer une modele 3D d un objet grace a une projection de laser sur ce dernier; puis on recupere les informations de la projection grace a une camera, et apres on fait des calculs pour modeliser l objet en 3D.</p>
            </div>

        </div>
    );
};

export default Experience;