import React from 'react';

export default () => (
    
    <section className="section section-f">
        <div className="container">
            
            <div className="grid grid-1-2">
                <div className="contact-general">
                    <h4>Générale</h4>

                    <ul className="list">
                        <li>Milhaud 30540, France</li>
                        <li>thomas.delaporte30@gmail.com</li>
                    </ul>
                </div>

                <div className="contact-form">
                    <h4>Une question précise ?</h4>
                    <p>Vous avez <b>une idée, un projet</b> que vous souhaitez réalisez ou un besoins spécifiques en liens avec mes compétences.
                        N'hésitez pas a me contacter a travers de ce formulaire si l'envie vous prends.</p>

                    <form className="form form-disabled">
                        <div className="form-row">
                            <input type="text" placeholder="Nom" disabled />
                            <input type="mail" placeholder="Adresse mail" disabled />
                        </div>
                        
                        <div className="form-row">
                            <input type="phone" placeholder="Téléphone (optionnel)" disabled />
                            <input type="text" placeholder="Sujet" disabled />
                        </div>
                            
                        <textarea placeholder="Votre message" disabled></textarea>
                            
                        <input type="submit" className="btn btn-white" value="Envoyer" disabled />
                    </form>
                </div>
            </div>
        </div>
    </section>
)
