import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    
    <section className="section internships">
        
        <div className="internship-item alionax">
            
            <div className="internship-item-thumbnail">
                <img src="./images/logo-alionax.jpg" />
            </div>

            <div className="internship-item-content">
                <h4>ALIONAX - Développement de l'intranet</h4>
                <small>28 Mai - 29 Juin [2018]</small>
                <p>Amélioration de la rapidité de chargement des données, optimisation des systèmes utilisés avec une refonte totale de l'intranet côté backend.
                    Correction d'erreurs bloquant certaines fonctionnalités. Gestion rapide du prestashop de l'entreprise et gestion et reconfiguration de certains
                    ordinateurs hors d'usages.
                </p>

                <div className="internship-item-content-actions">
                    <Link to="/internships/alionax" className="btn btn-white">En savoir plus</Link>
                    <a href="./ressources/rapport_alionax.pdf" target="_blank" className="btn btn-outline btn-white">Télécharger le rapport</a>
                </div>
            </div>
        </div>

        <div className="internship-item ecf">

            <div className="internship-item-thumbnail">
                <img src="./images/logo-ecf.png" />
            </div>

            <div className="internship-item-content">
                <h4>ECF - Développement d'une application de gestion des élèves</h4>
                <small>7 Janvier - 15 Février [2019]</small>
                <p>Conception d'une application web ainsi qu'un serveur permettant de gérer les élèves, les administrateurs, les moniteurs ainsi que les
                    formations disponibles, les cours suivis par chaque élève ainsi que le planning de ceux-ci.</p>

                <div className="internship-item-content-actions">
                    <Link to="/internships/ecf" className="btn btn-white">En savoir plus</Link>
                    <a href="./ressources/rapport_ecf.pdf" target="_blank" className="btn btn-outline btn-white">Télécharger le rapport</a>
                </div>
            </div>
        </div>
    </section>
)