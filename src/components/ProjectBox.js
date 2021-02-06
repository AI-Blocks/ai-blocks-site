import React from 'react';
import './../Colors.css'
import './ProjectBox.css';
import PropTypes from 'prop-types';
import HoverVideoPlayer from 'react-hover-video-player';

export class ProjectBox extends React.Component {
    render() {
        return(
            <div className="boxContainer">
                <HoverVideoPlayer
                    videoSrc={this.props.src}
                    style={{
                        width: '100%',
                        height: '350px',
                        display: 'block',
                        marginBottom: '20px'
                    }}
                    sizingMode="container"
                />
                <div className="boxDetails">
                    <h3>{this.props.name}</h3>
                    {this.props.desc}
                </div>
            </div>
        );
    }
}

ProjectBox.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    cats: PropTypes.array
};

ProjectBox.defaultProps = {
    name: "Project",
    desc: "Project description."
};

