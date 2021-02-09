import React from 'react';
import './../Colors.css'
import './ProjectBox.css';
import PropTypes from 'prop-types';
import HoverVideoPlayer from 'react-hover-video-player';
import LazyLoad from 'react-lazyload';

export function ProjectBox(props) {
    const wrapperBoxRef = React.useRef();
    const height= 579.19;
    return(
        <LazyLoad height={height} resize once>
            <div className="boxContainer" ref={wrapperBoxRef} placeholder={
                <div style={{backgroundColor: "white", minHeight: String(height) + "px"}} />
            }>
                <HoverVideoPlayer
                    videoSrc={"static/vid/" + props.src  + ".mp4"}
                    pausedOverlay={
                        <div style={{
                            backgroundImage: "url(static/vid/thumbnails/" + props.src  + ".jpg)",
                            width: "100%",
                            height: "100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}/>
                    }
                    style={{
                        width: '100%',
                        height: '350px',
                        display: 'block',
                        marginBottom: '20px'
                    }}
                    sizingMode="container"
                    hoverTargetRef={wrapperBoxRef}
                    preload="metadata"
                />
                <div className="boxDetails">
                    <h3>{props.name}</h3>
                    {props.desc}
                </div>
            </div>
        </LazyLoad>
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

