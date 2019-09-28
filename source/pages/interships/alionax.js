import React from 'react';
import Image from '../../components/image';

export default class IntershipALIONAX extends React.Component {

    render(){
        return (
            <>

                <section className="section">
                    <div className="internship-header" style={{backgroundColor: '#719f41'}}>

                        <div className="internship-header-company">
                            <img src="../images/logo-alionax.jpg" />
                            <h2>Alionax</h2>
                            <span>Stage de développement du 28 mai 2018 au 29 juin 2018</span>
                        </div>
                        
                        <div>
                            <p><b>Alionax</b> est une structure créée en 2011 et spécialisée dans l’offre de stages de badminton haut de gamme et des produits
                             d’aides à l’entrainement comme des robots ou encore d’autres accessoires tels que des cordeuses.</p>
                            <p>Cette entreprise est située à Nîmes (30900), au 60 rue Etienne Lenoir, kilomètre Delta, immeuble Steto.</p>
                        </div>
                        
                        <div className="internship-header-tags">
                            <span className="internship-tag-item">
                                <i className="ion ion-md-code-working"></i>Développement
                            </span>

                            <span className="internship-tag-item">
                                <i className="ion ion-md-tablet-landscape"></i>Design
                            </span>

                            <span className="internship-tag-item">
                                <i className="ion ion-md-people"></i>Gestion de projet
                            </span>

                            <span className="internship-tag-item">
                                <i className="ion ion-md-cog"></i>Testing
                            </span>
                        </div>

                        <div className="internship-header-actions">
                            <a href="../ressources/rapport_alionax.pdf" target="_blank" className="btn btn-white">
                                Télécharger le rapport</a>
                        </div>
                    </div>
                </section>

                <section className="section internship-content">
                    <div className="container">
            
                        <div className="grid grid-e">
                            
                            <aside className="article">
                                <h3>Lettre de mission</h3>

                                <div className="article-flow">
                                    <p>L’objectif de l’Intranet étant de pouvoir améliorer la vitesse de travail des employés utilisant celui-ci
                                    dans l’entreprise, plusieurs systèmes sont demandés :</p>
                                    <ul className="list">
                                        <li>Pouvoir enregistrer des fichiers pour les responsables en Ressources Humaines</li>
                                        <li>Consulter et pouvoir enregistrer des rapports</li>
                                        <li>Consulter et pouvoir enregistrer les appels téléphoniques</li>
                                        <li>Gérer les demandes de stage

                                            <ul>
                                                <li>Gérer des entretiens téléphoniques / physiques</li>
                                                <li>Gérer les documents fournis lors de l'inscription</li>
                                                <li>Système de messagerie entre l'utilisateur et l'administration</li>
                                                <li>Filtrer les candidatures</li>
                                                <li>Système d'êtat</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </aside>

                            <Image src="../images/alionax/login.png" />
                        </div>

                        <div className="grid grid-images grid-e">

                            <Image src="../images/alionax/space.png" />
                            <Image src="../images/alionax/phones.png" />
                        </div>

                        <div className="grid grid-images grid-e">

                            <Image src="../images/alionax/documents.png" />
                        </div>
                    </div>
                </section>

                <section className="section section-f internship-content">
                    <div className="container">

                        <div className="grid grid-e">

                            <div className="internship-technology-item">

                                <div className="internship-technology-icons">
                                    <img src="../images/icons/bootstrap.svg" />
                                </div>

                                <p>Bootstrap est une collection d'outils utiles à la création du design (graphisme, animation et interactions avec la page dans le navigateur, etc.)
                                     de sites et d'applications web.</p>
                            </div>

                            <div className="internship-technology-item">

                                <div className="internship-technology-icons">
                                    <img src="../images/icons/php.svg" />
                                </div>

                                <p>PHP, est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP, mais pouvant également
                                     fonctionner comme n'importe quel langage interprété de façon locale.</p>

                                <p>Le site se base sur une architecture classique de type MVC.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section container internship-content">

                    <div className="grid grid-images grid-e">

                        <Image src="../images/alionax/internships.png" />
                        <Image src="../images/alionax/card.png" />
                    </div>

                    <div className="grid grid-images grid-e">

                        <Image src="../images/alionax/card-view.png" />
                        <Image src="../images/alionax/card-view-details.png" />
                    </div>
                </section>
            </>
        )
    }
}