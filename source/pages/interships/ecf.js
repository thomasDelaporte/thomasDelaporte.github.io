import React from 'react';
import Image from '../../components/image';

export default () => (
    <>
        <section className="section">
            <div className="internship-header" style={{backgroundColor: '#2d6edc'}}>

                <div className="internship-header-company">
                    <img src="../images/logo-ecf.png" />
                    <h2>ECF Bouscaren</h2>
                    <span>Stage de développement du 7 janvier 2019 au 15 février 2019</span>
                </div>
                
                <div>
                    <p><b>ECF Bouscaren</b> est une structure créée en 1985 et spécialisée dans la formation des permis de conduire et propose également des 
                    formations spécifiques comme les stages d’éco-conduite, de récupération de points, l’handi’conduite ou encore le perfectionnement des
                    séniors.</p>
                    <p>Cette entreprise est située à Montpellier (34000), ou encore à Nîmes (30000) et à Lunel-Viel (34400).</p>
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
                    <a href="../ressources/rapport_ecf.pdf" target="_blank" className="btn btn-white">Télécharger le rapport</a>
                    <a href="http://116.203.23.205:81/" className="btn btn-outline btn-white">
                        Voir le site<i className="ion ion-md-arrow-forward"></i></a>
                </div>
            </div>
        </section>

        <section className="section internship-content">
            <div className="container">
    
                <div className="grid grid-e">
                    
                    <aside className="article">
                        <h3>Lettre de mission</h3>

                        <div className="article-flow">
                            <p>L’objectif de la plateforme de gestion étant de pouvoir améliorer la vitesse et la simplification de gestion des élèves, des formations, 
                                ainsi que l’emploi du temps, plusieurs systèmes sont demandés :</p>
                            <ul className="list">
                                <li>Pouvoir enregistrer/supprimer/modifier des moniteurs</li>
                                <li>Pouvoir enregistrer/supprimer/modifier des secrétaires (Administratif)</li>
                                <li>Pouvoir enregistrer/supprimer/modifier des élèves</li>
                                <li>Gérer les formations</li>
                                <li>Gérer les cours des élèves (Prévisualisation planning)</li>
                                <li>Système de mot de passe oublié</li>
                            </ul>

                            <p>La demande porte également sur la mise en place d’une application mobile dans le futur qui sera développé plus tard après le développement
                                complet et modification apporté à l’application développée lors de ce stage.</p>
                        </div>
                    </aside>

                    <Image src="../images/ecf/login.png" />
                </div>

                <div className="grid grid-images grid-e">

                    <Image src="../images/ecf/student-list.png" />
                    <Image src="../images/ecf/student-add.png" />
                </div>
            </div>
        </section>

        <section className="section section-f internship-content">
            <div className="container">

                <div className="grid grid-e">

                    <div className="internship-technology-item">

                        <div className="internship-technology-icons">
                            <img src="../images/icons/reactjs.svg" />
                        </div>

                        <p>ReactJS est une librairie JavaScript, qui permet véritablement de révolutionner le développement des interfaces pour les
                            applications web </p>
                    </div>

                    <div className="internship-technology-item">

                        <div className="internship-technology-icons">
                            <img src="../images/icons/nodejs.svg" />
                            <img src="../images/icons/apollo.svg" />
                            <img src="../images/icons/graphql.svg" />
                        </div>

                        <p>Le serveur est sous NodeJS. J’utilise une librairie « ApolloServer » permettant la création simplifié d’un serveur utilisant GraphQL
                            ainsi que d’outils pour faciliter le développement.</p>
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="section container internship-content">

            <aside className="article">
                    <h3>Système d'email</h3>

                    <div className="article-flow">
                        <p>Lors de la création d'un compte élève, moniteur, ou administrateur, le système envoie un mail de confirmation de création de compte avec 
                            les paramètres tels que le login et le mot de passe.</p>
                        <p>Le système de mailing se base sur <b>nodemailer</b> qui permet de simplement envoyer des mails aux utilisateurs. Une template a été créée pour
                            l'ensemble des mails de l'ECF Bouscaren respectant les normes HTML.</p>
                    </div>
                </aside>

            <div className="grid grid-e">
                
                <Image src="../images/ecf/account-email.png" className="figure-center" />
                <Image src="../images/ecf/password-email.png" className="figure-center" />
                <Image src="../images/ecf/confirm-email.png" className="figure-center" />
                
            </div>

            <div className="grid grid-images grid-e">

                <Image src="../images/ecf/student-item.png" />
                <Image src="../images/ecf/student-add.png" />
            </div>
        </section>
    </>
)
