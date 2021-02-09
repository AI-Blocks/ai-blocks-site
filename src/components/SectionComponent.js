import React from 'react';
import './SectionComponent.css';
import './../Colors.css'
import { Element } from 'react-scroll';

function SectionComponent(props) {
    const theme = props.theme ? props.theme: "defaultSection";
    const spaceClass = props.noSpace ? "noSpace": "defaultSection";
    return (
        <Element name={props.id}>
            <section className={"sec-theme-" + theme + " " + spaceClass}>
                <div className="wrapper">
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </section>
        </Element>
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