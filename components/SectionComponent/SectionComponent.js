import React from 'react';
import styles from './SectionComponent.module.css';
import { Element } from 'react-scroll';

function SectionComponent(props) {
    let theme = null;
    switch (props.theme) {
        case "dark":
            theme = styles.secDark;
            break;
        case "white":
            theme = styles.secWhite;
            break;
        case "grey":
            theme = styles.secGrey;
            break;
        default:
            theme = styles.secDefault;
    }
    return (
        <Element name={props.id}>
            <section className={`${styles.section} ${theme}`}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
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
        this.ref = React.createRef();
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

    executeScroll = () => this.ref.scrollIntoView();
}

export { SectionComponent, SectionComponentDiv };