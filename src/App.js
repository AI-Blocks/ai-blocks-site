import React from 'react';
import './Fonts.css'
import './Colors.css'
import './App.css';
import logo from './logo.svg'
import mtr from './assets/img/clients/mtr.png'
import hkpc from './assets/img/clients/hkpc.png'
import customs from './assets/img/clients/customs.png'
import {TitleComponent} from "./components/TitleComponent";
import Grid from '@material-ui/core/Grid';
import {SectionComponent} from "./components/SectionComponent";
import {DotsComponent} from "./components/Dots";
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div id="animation">
                <DotsComponent bgColor={"black"} dotColor={"white"}/>
            </div>
            <SectionComponent id={"nav"} noSpace={true}>
                <nav>
                    <Link to="/"><img src={logo} alt="Home"/></Link>
                    <ul>
                        <li><Link to="/#projects">Projects</Link></li>
                        <li><Link to="/">Delphi</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        {/*<li><Link to="/about">About</Link></li>*/}
                        {/*<li><Link to="/work">Work</Link></li>*/}
                        {/*<li><Link to="/projects">Projects</Link></li>*/}
                        {/*<li><Link to="/resume">Resume</Link></li>*/}
                        {/*<li><Link to="/contact">Contact</Link></li>*/}
                    </ul>
                </nav>
            </SectionComponent>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <SectionComponent id={"head"}>
                <TitleComponent title={"Home | AI Blocks"}/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <BrowserView><h1 className="bgHeader bgHeaderFancy">WE FIND AI SOLUTIONS</h1></BrowserView>
                        <MobileView><h1 className="bgHeader">WE FIND AI SOLUTIONS</h1></MobileView>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h2 style={{textAlign: 'right'}}>To the most demanding applications.</h2>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <a href="#projects"><h2 style={{textAlign: 'right'}}>Learn more &rarr;</h2></a>
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"clients"}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <h2 className={"accent"}>Selected Clients:</h2>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src={mtr} alt="MTR"/>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src={hkpc} alt="HKPC"/>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src={customs} alt="Customs"/>
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"projects"} theme={"grey"}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2 className={"accent"}>Projects:</h2>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    </Grid>
                </Grid>
            </SectionComponent>
        </div>
    );
}

function About() {
    return (
        <div>
            <TitleComponent title={"About | AI Blocks"}/>
            <h2>Dynamically loaded about!</h2>
        </div>

    );
}
