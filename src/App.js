import React from 'react';
import './Fonts.css'
import './Colors.css'
import './App.css';
import {TitleComponent} from "./components/TitleComponent";
import Grid from '@material-ui/core/Grid';
import {SectionComponent} from "./components/SectionComponent";
import {DotsComponent} from "./components/Dots";
import {ProjectBox} from "./components/ProjectBox";
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
import { Link as ScrollLink } from 'react-scroll';

export default function App() {
    return (
        <Router>
            <div id="animation">
                <DotsComponent bgColor={"black"} dotColor={"white"}/>
            </div>
            <SectionComponent id={"nav"} noSpace={true}>
                <nav>
                    <Link to="/"><img src="/logo.svg" alt="Home"/></Link>
                    <ul>
                        <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                        {/*<li><Link to="/">Delphi</Link></li>*/}
                        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
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
                    <Grid item xs={12} sm={7}>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <h2>To the most demanding applications.</h2>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                    <Grid item xs={12} sm={5} style={{textAlign: 'right'}}>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                           <button className={"button-rounder"}><h2>See projects &rarr;</h2></button>
                        </ScrollLink>
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"clients"}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <h2 className={"accent"}>Selected Clients</h2>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src="/static/img/clients/mtr.png" alt="MTR"/>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src="/static/img/clients/hkpc.png" alt="HKPC"/>
                    </Grid>
                    <Grid className={"centerGrid"} item xs={12} sm={4}>
                        <img src="/static/img/clients/customs.png" alt="Customs"/>
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"projects"} theme={"grey"}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <h2 className={"accent"}>Projects</h2>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectBox
                            name="Deep Learning License Plate Reader"
                            desc={<p>Custom license plate reader <p className="accent">specifically for Hong Kong
                                license plates.</p> With support for deep learning license plate deskew, and multi-line
                                license plates.</p>}
                            src="/static/vid/plate.mp4"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectBox
                            name="Train Station Safety Net"
                            desc={<p>Detect when passengers are on wheelchairs, using blind canes or have fallen over.
                                The AI <p className="accent">alerts station staff,</p> so that they can provide assistance.
                                With AI, we can help <p className="accent">make journeys safer for all.</p></p>}
                            src="/static/vid/train_station.mp4"
                        />
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"contact"} theme={"dark"}>
                <form id={"contactForm"}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <h2 className={"accent"}>Contact Us</h2>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <p className={"white"}>We'd love to hear about how we can help you with AI 🤖</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <input name="firstName" placeholder="First name" />
                                <input name="lastName" placeholder="Last name" />
                                <input name="email" placeholder="Email" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <textarea name="comment" form="contactForm" placeholder="Enter text here..." />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <input type="submit" />
                        </Grid>
                    </Grid>
                </form>
            </SectionComponent>
            <SectionComponent id={"footer"} theme={"dark"}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                        </Grid>
                        <Grid item xs={12} sm={8} style={{textAlign: "right"}}>
                            <img src="/logo_eng_ch.png" alt="AI Blocks, 智能快" style={{height: "100px"}}/>
                            <p className={"white"} >
                                &#169; {new Date().getFullYear()} AI Blocks Limited
                            </p>
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
