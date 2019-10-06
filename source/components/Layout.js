import React from "react"
import ReactGA from 'react-ga';
import { Link, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { enableScroll, disableScroll } from '../utils/Events';

class Layout extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			isActive: false
		}
	}

	componentDidMount() {

		ReactGA.initialize('UA-82411132-1', { debug: false });
		ReactGA.pageview(this.props.location.pathname);
	}

	componentDidUpdate(prevProps){

		if(this.props.location != prevProps.location)
			ReactGA.pageview(this.props.location.pathname);
	}

	handleNavigation = () => {

		this.setState({
			isActive: !this.state.isActive
		});
	}

	closeNavigation = () => {

		this.setState({ isActive: false }, function(){
			window.scrollTo(0, 0); enableScroll();
		});
	}
  
	render(){
		return (
			<div className="app">

				<Helmet>
					<meta name="description" content="Je suis un développeur front-end curieux et dynamique indépendant actuellement en étude."/>
				</Helmet>

				<nav className={"nav" + (this.state.isActive ? " is-active" : "")}>

					<span className="nav-menu" onClick={this.handleNavigation.bind(this)}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect x="15" y="15" width="4" height="4" fill="white"/>
							<rect x="8" y="15" width="4" height="4" fill="white"/>
							<rect x="1" y="15" width="4" height="4" fill="white"/>
							<rect x="15" y="8" width="4" height="4" fill="white"/>
							<rect x="8" y="8" width="4" height="4" fill="white"/>
							<rect x="1" y="8" width="4" height="4" fill="white"/>
							<rect x="15" y="1" width="4" height="4" fill="white"/>
							<rect x="8" y="1" width="4" height="4" fill="white"/>
							<rect x="1" y="1" width="4" height="4" fill="white"/>
						</svg>
					</span>

					<Link to="/" className="logo">

						<small>thomas</small>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.43 21.62">
							<path className="cls-1" d="M6.44.33H0v21H5.82c3.53,0,6.24-.91,8.12-2.75s2.82-4.48,2.82-7.95c0-3.25-.9-5.77-2.71-7.58S9.7.33,6.44.33ZM12,17.07c-1.46,1.44-3.65,2.15-6.56,2.15h-3V2.44H6q4.06,0,6.13,2.09c1.37,1.38,2.06,3.45,2.06,6.19S13.45,15.64,12,17.07Z" /><path className="cls-1" d="M47.28.2,39.85,19.08H33.66V.29H19.51v21H41.45l.86-2.21h0L44,14.61h8.42l2.61,6.68H57.6L49.34.2ZM31.22,19.11H22V11.38h9.27Zm0-9.89H22V2.46h9.27ZM44.9,12.41,47.37,5.9a27.6,27.6,0,0,0,.91-3c.33,1.2.66,2.21,1,3l2.44,6.51Z" /><path className="cls-1" d="M74.51,2A8.93,8.93,0,0,0,68.69.33H62v21h4.45V13.86h1.91a9.13,9.13,0,0,0,6-1.79A6.44,6.44,0,0,0,76.5,6.88,6,6,0,0,0,74.51,2ZM71,9.4a4.9,4.9,0,0,1-3.08.81H66.44V4h2a4,4,0,0,1,2.68.75A2.9,2.9,0,0,1,72,7,2.84,2.84,0,0,1,71,9.4Z" /><path className="cls-1" d="M89.55,0q-4.83,0-7.43,2.77t-2.59,8q0,5.25,2.58,8.05t7.41,2.8q4.83,0,7.42-2.8t2.58-8q0-5.22-2.56-8T89.55,0Zm0,17.89a4.67,4.67,0,0,1-4-1.79,8.75,8.75,0,0,1-1.33-5.3,8.65,8.65,0,0,1,1.35-5.3,4.67,4.67,0,0,1,4-1.79q5.31,0,5.3,7.09T89.52,17.89Z" /><path className="cls-1" d="M117.37,9.92a5.57,5.57,0,0,0,1-3.3,5.57,5.57,0,0,0-2.06-4.73Q114.28.33,110,.33h-6.12v21h4.45V13.27h2.37l5,8.06h5q-1.44-2.07-6.18-9.15A6.76,6.76,0,0,0,117.37,9.92Zm-4.49-1a5.48,5.48,0,0,1-3.11.7h-1.44V4h1.35a6.22,6.22,0,0,1,3.18.63,2.29,2.29,0,0,1,1,2.13A2.52,2.52,0,0,1,112.88,9Z" />
							<polygon className="cls-1" points="152.43 3.98 152.43 0.33 140.34 0.33 137.1 0.33 121.24 0.33 121.24 4.04 126.95 4.04 126.95 21.33 131.4 21.33 131.4 4.04 137.13 4.04 140.34 4.04 140.34 21.33 152.43 21.33 152.43 17.66 144.79 17.66 144.79 12.24 151.9 12.24 151.9 8.59 144.79 8.59 144.79 3.98 152.43 3.98" />
						</svg>
					</Link>

					<div className="nav-social">
						<a href="https://twitter.com/db_Magouille" target="_blank" rel="noopener noreferrer">
							<i className="ion ion-logo-twitter" style={{color: "#1da1f2"}}></i></a>
							
						<a href="https://github.com/ThomasDelap" target="_blank" rel="noopener noreferrer">
							<i className="ion ion-logo-github" style={{color: "#333"}}></i></a>

						<a href="https://gitlab.com/Kychloren" target="_blank" rel="noopener noreferrer">
							<i className="ion ion-logo-github" style={{color: "#fca326"}}></i></a>
					</div>

					<div className="nav-wrapper">
						<ul className="nav-content">
							<li>
								<Link to="/" onClick={this.closeNavigation}>Accueil</Link>
								<p>Liste de mes projets</p>	
							</li>
							<li>
								<Link to="/about" onClick={this.closeNavigation}>A propos</Link>
								<p>Vous voulez en savoir plus sur moi ?</p>
							</li>
							<li><Link to="/other" onClick={this.closeNavigation}>Projets divers</Link></li>
							<li><Link to="/interships" onClick={this.closeNavigation}>Stages</Link></li>

							<li><Link to="/contact" onClick={this.closeNavigation}>Contact</Link></li>
						</ul>
					</div>
				</nav>

				<main className="main">
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default withRouter(Layout);