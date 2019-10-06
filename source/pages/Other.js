import React from 'react';
import { Redirect } from 'react-router-dom';
import path from 'path';

export default class Other extends React.PureComponent {
    
    constructor(props){
        super(props);

        this.state = {
            projects: [],
            projectIndexActive: null,
            isLoading: true,
            error: null
        }
    }

    componentDidMount() {

        fetch('https://thomasdelaporte.fr/-illustration/feed.json')
            .then(response => {

                if(response.ok)
                    return response.json()
                else throw new Error('Something went wrong...');
            })
            .then(data => this.setState({ projects: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleProjectActive(key) {

        this.setState(({ projectIndexActive }) => ({
            projectIndexActive: (projectIndexActive == key) ? null : key
        }));
    }

    closeProjectActive = (e) => {
        
        e.stopPropagation();
        this.setState({ projectIndexActive: null });
    }

    render() {

        if(this.state.error)
            return <Redirect to="/404" />

        if(this.state.isLoading)
            return null

        return (
            <section className="section other">
                {this.state.projects.map((project, i) => {

                    const projectActive = this.state.projectIndexActive == i;

                    return (
                        <div className={"project-item" + (projectActive ? ' is-active' : '')} key={i} onClick={this.handleProjectActive.bind(this, i)}>
                            {projectActive ? (
                                <>  
                                    <button className="btn btn-gradient btn-close" onClick={this.closeProjectActive}>
                                        <i className="ion ion-md-close"></i>
                                    </button>

                                    <iframe src={project.link} key={i} />
                                </>
                            ) : (
                                <>
                                    <h3>{project.title}</h3>
                                    <div className="project-item-info">{project.date}</div>

                                    <img src={path.join(project.link, project.image)} />
                                </>
                            )}
                        </div>
                    )
                })}
            </section>
        )
    }
}