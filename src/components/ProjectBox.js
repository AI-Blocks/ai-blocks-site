import React from 'react';
import './ProjectBox.css';
import './../Colors.css'
import PropTypes from 'prop-types';

export class ProjectBox extends React.Component {
    render() {
        return(
            <div></div>
        );
    }
}

ProjectBox.propTypes = {
    isVideo: PropTypes.bool,
    media: PropTypes.object,
    name: PropTypes.string,
    desc: PropTypes.string,
    cats: PropTypes.array
};

ProjectBox.defaultProps = {
    isVideo: true,
    name: "Project",
    desc: "Project description."
};

