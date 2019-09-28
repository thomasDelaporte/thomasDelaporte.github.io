import React from 'react';

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
        document.removeEventListener('keydown', this.keyboardEvent);
    }

    static getDerivedStateFromProps(props, currentState) {

        if(currentState.isOpen != props.isOpen)
            return {isOpen: props.isOpen}

        return null;
    }

    keyboardEvent = (e) => {
        
        if(!this.state.isOpen)
            return;

        if(e.keyCode == 27){
            this.props.closeCaroussel();
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

    render(){

        if(this.props.images === undefined || this.state.isOpen == false)
            return null;

        return (
            <div className="caroussel">

                <button className="btn btn-black" onClick={this.props.closeCaroussel}>
                    <i className="ion ion-md-close"></i>
                </button>

                {this.state.imageIndex != 0 && 
                    <i className="ion ion-md-arrow-round-back" onClick={() => this.moveIndex(-1)}></i>
                }
                
                <img src={this.props.images[this.state.imageIndex]} />
                
                {this.state.imageIndex != this.props.images.length - 1 &&
                    <i className="ion ion-md-arrow-round-forward" onClick={() => this.moveIndex(1)}></i>
                }
            </div>
        )
    }
}