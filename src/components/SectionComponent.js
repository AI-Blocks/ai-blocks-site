import React from 'react';
import './SectionComponent.css';
import './../Colors.css'

function SectionComponent(props) {
    const theme = props.theme ? props.theme: "defaultSection";
    const spaceClass = props.noSpace ? "noSpace": "defaultSection";
    return (
        <section className={theme + " " + spaceClass}>
            <div className="wrapper">
                <div className="content">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

class SectionComponentDiv extends React.Component {
    bgComp;
    bgArgs;
    constructor(props, bgComp, bgArgs) {
        super(props);
        this.bgComp = bgComp;
        this.bgArgs = bgArgs;
        this.props = props;
    }
    render() {
        return (
            <section>
                <this.bgComp {...this.bgArgs}/>
                <div className="wrapper">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    };
}

export { SectionComponent, SectionComponentDiv };