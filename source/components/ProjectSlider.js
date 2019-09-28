import React from 'react';
import '../utils/Events';

export default class ProjectSlider extends React.PureComponent {

    constructor(props){
        super(props);

        this.projectsContainer = React.createRef();
        this.projectsCount = React.Children.count(props.children);

        this.state = {
            focusIndex: 0,
            offsetWidth: 0,
            maxIndex: (this.projectsCount - props.perPage),
            pause: (document.body.clientWidth <= 725)
        }
    }

    componentDidMount() {

        this.calculateItemWidth(() => {
            
            document.addEventListener('resize-end', this.resizeEvent);
            window.addEventListener('wheel', this.wheelEvent);
        });
    }

    componentWillUnmount() {
        document.removeEventListener('resize-end', this.reiszeEvent);
        window.removeEventListener('wheel', this.wheelEvent);
    }

    wheelEvent = (e) => {

        if(this.state.pause)
            return;

        this.moveSlide((e.deltaY < 0 || e.wheelDelta > 0)  ? -1 : 1);
    }

    moveSlide = (number) => {
        
        this.setState(({focusIndex}) => {

            const futureOffset = focusIndex + number;
            if(futureOffset < 0 || futureOffset > this.state.maxIndex)
                return;

            return {
                focusIndex: futureOffset
            }
        })
    }

    resizeEvent = ({detail: e}) => {

        if(e.target.outerWidth <= 725) {
            this.setState({ pause: true }); return;
        } else if(this.state.pause) this.setState({ pause: false });

        this.calculateItemWidth(() => {
            this.setState({ focusIndex: 0 });
        });
    }

    calculateItemWidth = (callback) => {

        const {current: slider} = this.projectsContainer;
        const {children} = slider;

        if(children.length <= 0) 
            return;

        const offsetWidth = children[0].offsetWidth;
        const maxIndex = this.projectsCount - Math.ceil((slider.offsetWidth / offsetWidth));

        this.setState({offsetWidth, maxIndex}, () => callback && callback(offsetWidth, slider));
    }

    render(){

        const { offsetWidth } = this.state;
        const offsetMargin = Math.min(Math.max(this.state.focusIndex * offsetWidth, 0), offsetWidth * this.state.maxIndex);

        return (
            <section className="section projects-slider">

                {this.state.focusIndex != 0 && !this.state.pause && 
                    <i className="ion ion-md-arrow-round-back" onClick={() => this.moveSlide(-1)}></i>
                }

                <div className="projects" style={{right: offsetMargin}} ref={this.projectsContainer}>
                    {this.props.children}
                </div>

                {this.state.focusIndex != this.props.max && !this.state.pause &&
                    <i className="ion ion-md-arrow-round-forward" onClick={() => this.moveSlide(1)}></i>
                }
			</section>
        )
    }
}