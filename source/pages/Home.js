import React from 'react';

import PPE from '../components/PPE';
import ProjectSlider from '../components/ProjectSlider';

export default class Index extends React.Component {

  	render() {
		return (
			<>
				<ProjectSlider perPage={4}>

					<PPE number="01" date="17/10/2017" tag="Front end"
                        title="Portefeuille de compétences" 
                        background="./images/thumbnail-portfolio.jpg" />

                    <PPE number="02" date="15/05/2018" tag="PHP MVC"
                        title="Maison de la culture" 
                            
                        background="./images/thumbnail-mdc.jpg" />

                    <PPE number="03" date="06/12/2018" tag="Laravel"
                        title="Administration: Laboratoire GSB">

                        <a href="https://github.com/thomasDelaporte/GSB-Administration" target="_blank" className="ion ion-logo-github"></a>
                        <a href="./ressources/rapport_ppe3.pdf" target="_blank" className="ion ion-md-document"></a>
                    </PPE>

                    <PPE number="04" date="21/06/2019" tag="Android"
                        title="Application: laboratoire GSB" 
                        background="./images/thumbnail-applicationgsb.jpg"
                        images={[
                            './images/ppe4/5.jpg',
                            './images/ppe4/0.jpg',
                            './images/ppe4/1.jpg',
                            './images/ppe4/2.jpg',
                            './images/ppe4/3.jpg',
                            './images/ppe4/4.jpg',
                            './images/ppe4/6.jpg',
                            './images/ppe4/7.jpg',
                            './images/ppe4/8.jpg'
						]}>

                            <a href="https://github.com/thomasDelaporte/GSB-Application" target="_blank" className="ion ion-logo-github"></a>
                            <a href="./ressources/rapport_ppe4.pdf" target="_blank" className="ion ion-md-document"></a>
                        </PPE>

                    <PPE number="05" date="21/06/2019" tag="CakePHP"
                        title="Pascal Puyravaud" 
                        background="./images/thumbnail-pascal.jpg"
						link="http://pascalpuyravaud.fr/"
						images={[
							'./images/pascal/admin-albums.png',
                            './images/pascal/admin-album-update.png',
                            './images/pascal/admin-musiques.png',
						]}
						 />
				</ProjectSlider>
			</>
		)
  	}
}
