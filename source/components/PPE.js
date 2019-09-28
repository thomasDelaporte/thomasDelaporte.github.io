import React from 'react';
import Caroussel from './Caroussel';

export default class PPE extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isImageOpen: false,
        }
    }

    openLightBox = () => {
        this.setState({ isImageOpen: true });
    }

    closeLightBox = () => {
        this.setState({ isImageOpen: false });
    }

    render(){
        return (
            <div className="project-item">
				<h1>{this.props.number}</h1>
				<small className="projects-item-info"><b>{this.props.date}</b>{this.props.tag}</small>
				<h3>{this.props.title}</h3>
            
                <div className="project-item-links">
                    {this.props.images &&
                        <a href="#" onClick={this.openLightBox}>Voir les images</a>
                    }

                    {this.props.link &&
                        <a href={this.props.link} target="_blank">Voir projet</a>
                    }
                </div>
                
                {this.props.background &&
                    <img src={this.props.background} />
                }

                {this.props.children !== undefined &&
                    <div className="project-item-more">
                        {this.props.children}
                    </div>
                }
                
                {this.props.images &&
                    <Caroussel 
                        isOpen={this.state.isImageOpen} images={this.props.images} closeCaroussel={this.closeLightBox} />
                }
                
			</div>
        )
    }
}