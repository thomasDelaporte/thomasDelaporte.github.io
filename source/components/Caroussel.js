import React from 'react';
import { enableScroll, disableScroll } from '../utils/Events';

export default class Caroussel extends React.PureComponent {

    constructor(props){
        super(props);

        this.state = {
            isOpen: props.isOpen || false,
            imageIndex: 0
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyboardEvent);
    }

    componentWillUnmount() {

        enableScroll();
        document.removeEventListener('keydown', this.keyboardEvent);
    }

    static getDerivedStateFromProps(props, currentState) {

        if(currentState.isOpen != props.isOpen) {
            
            if(props.isOpen) disableScroll();

            return {isOpen: props.isOpen}
        }
        
        return null;
    }

    keyboardEvent = (e) => {
        
        if(!this.state.isOpen)
            return;

        if(e.keyCode == 27){
            this.closeCaroussel();
        } else if(e.keyCode == 37){
            this.moveIndex(-1);
        } else if(e.keyCode == 39){
            this.moveIndex(1);
        }
    }
    
    moveIndex = (amount) => {
        
        if(!this.props.images) 
            return;

        this.setState(({imageIndex}) => {
            
            const futureIndex = imageIndex + amount;
            if(this.props.images[futureIndex] == undefined)
                return;

            return {
                imageIndex: futureIndex
            }
        })
    }

    closeCaroussel = () => {

        enableScroll();
        this.props.closeCaroussel();
    }

    render(){

        if(this.props.images === undefined || this.state.isOpen == false)
            return null;

        return (
            <div className="caroussel">

                <button className="btn btn-gradient btn-close" onClick={this.closeCaroussel}>
                    <i className="ion ion-md-close"></i>
                </button>

                {this.state.imageIndex != 0 && 
                    <button className="btn btn-black btn-previous"  onClick={() => this.moveIndex(-1)}>
                        <i className="ion ion-md-arrow-round-back"></i>
                    </button>
                }
                
                <img src={this.props.images[this.state.imageIndex]} />
                
                {this.state.imageIndex != this.props.images.length - 1 &&
                    <button className="btn btn-black btn-next" onClick={() => this.moveIndex(1)}>
                        <i className="ion ion-md-arrow-round-forward"></i>
                    </button>
                }
            </div>
        )
    }
}