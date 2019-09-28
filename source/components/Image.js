import React from 'react';
import disableScroll from 'disable-scroll';

export default class Image extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    componentWillMount(){
        document.addEventListener('keydown', this.closeLightboxKey);
    }

    componentWillUnmount(){

        document.removeEventListener('keydown', this.closeLightboxKey);
        disableScroll.off();
    }

    closeLightboxKey = (e) => {
        
        if(!this.state.isOpen) return;

        if(e.keyCode == 27){
            this.closeLigthbox();
        }
    }

    openLightbox = () => {

        this.setState({ isOpen: true }, function(){
            disableScroll.on();
        });
    }

    closeLigthbox = () => {

        this.setState({ isOpen: false }, function(){
            disableScroll.off();
        });
    }

    render(){
        return (
            
            <>
                <figure className="figure" onClick={this.openLightbox} disabled={!this.props.src}>

                    {this.props.btn && !this.state.isOpen &&
                        <a href={this.props.btn.link} className="btn btn-black" onClick={(e) => e.stopPropagation()} target="_blank">{this.props.btn.name}</a>
                    }

                    <img src={this.props.src} />
                </figure>

                {this.state.isOpen && (
                    <div className={"figure-lightbox" + (this.props.className ? " " + this.props.className : '')} onClick={this.closeLigthbox}>
                        <img src={this.props.src} />
                    </div>
                )}
            </>
        )
    }
}