import React from 'react';
import './../Colors.css'
import './ProjectBox.css';
import PropTypes from 'prop-types';
import HoverVideoPlayer from 'react-hover-video-player';

export function ProjectBox(props) {
    const wrapperBoxRef = React.useRef();
    return(
        <div className="boxContainer" ref={wrapperBoxRef}>
            <HoverVideoPlayer
                videoSrc={props.src}
                style={{
                    width: '100%',
                    height: '350px',
                    display: 'block',
                    marginBottom: '20px'
                }}
                sizingMode="container"
                hoverTargetRef={wrapperBoxRef}
            />
            <div className="boxDetails">
                <h3>{props.name}</h3>
                {props.desc}
            </div>
        </div>
    );
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

