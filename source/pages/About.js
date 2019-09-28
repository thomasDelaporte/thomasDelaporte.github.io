import React from "react"

export default () => (
    <section className="section section-e about">

        <div className="about-wrapper">
                
            <div className="about-content">
                <h1>Bonjour! Je suis Thomas, <br/>un <b>Front-end Developpeur</b></h1>

                <p>Actuellement en recherche d'un contrat d'apprentissage dans le domaine du <br/>
                    <b>"Développement d'applications Web, Mobile, Bureaux"</b>.</p><br/>
                
                <p>Diplomé d'un <b>BTS SERVICES INFORMATIQUES AUX ORGANISATIONS</b> <i>(option SLAM)</i> au lycée CCI Nîmes. 
                    Je développe mes compétences en informatique depuis 5 ans à travers de <i>projets personnels et à
                    l'aide de projets scolaires</i> proposés tout au long de mon parcours. </p>

                <div className="about-links">
                    <a href="/ressources/cv.pdf" target="_blank" className="btn btn-outline btn-white">Curriculum vitae</a>
                </div>

                <div className="about-socials">
                    <h4>Réseaux sociaux</h4>

                    <ul className="about-socials-list">
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thomas-delaporte/">Linkedin</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/thomasDelaporte">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="thumbnail">
            <figure className="figure" id="c" disabled></figure>
        </div>
    </section>
)
