import React from 'react';
import axios from 'axios';
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
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const trackingId = "G-WL13LKQHXM"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// eslint-disable-next-line no-control-regex
const emailRegex = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])");

let contactState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
};

function handleSubmit(e){
    e.preventDefault();
    //Add any verification logic here:
    if (!contactState.firstName) {
        alert("Please put a first name.")
    } else if (!contactState.lastName) {
        alert("Please put a last name.")
    } else if (!emailRegex.test(contactState.email)) {
        alert("Please input a valid email.")
    } else if (!contactState.message) {
        alert("Please put a message.")
    } else {
        axios({
            method: "POST",
            url:"https://www.getaiblocks.com/.netlify/functions/contact",
            data: contactState
        }).then((response)=>{
            console.log("RESPONSE");
            console.log(response);
            if (response.status === 200) {
                alert("Message sent! Looking forward to help.");
                resetForm()
            } else {
                alert("Message failed to send. Please try again.")
            }
        })
    }
}

function resetForm(){
    contactState = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }
}

function onFirstChange(event) {
    contactState.firstName = event.target.value
}

function onLastChange(event) {
    contactState.lastName = event.target.value
}

function onEmailChange(event) {
    contactState.email = event.target.value
}

function onMessageChange(event) {
    contactState.message = event.target.value
}

export default function App() {
    return (
        <Router style={{overflowX: "hidden"}} history={history}>
            <div id="animation-wrapper">
                <div id="animation">
                    <DotsComponent bgColor={"black"} dotColor={"white"}/>
                </div>
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
                        <h1 className="bgHeader">WE FIND AI SOLUTIONS</h1>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <h2 className={"blend"}>To the most demanding applications.</h2>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                    <Grid item xs={12} sm={5} style={{textAlign: 'right'}}>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            <button><h2>See projects &rarr;</h2></button>
                        </ScrollLink>
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"clients"} theme={"white"}>
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
                            src="plate"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectBox
                            name="Train Station Safety Net"
                            desc={<p>Detect when passengers are on wheelchairs, using blind canes or have fallen over.
                                The AI <p className="accent">alerts station staff,</p> so that they can provide assistance.
                                With AI, we can help <p className="accent">make journeys safer for all.</p></p>}
                            src="train_station"
                        />
                    </Grid>
                </Grid>
            </SectionComponent>
            <SectionComponent id={"contact"} theme={"dark"}>
                <form id={"contactForm"} onSubmit={handleSubmit.bind(this)} method="POST">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <h2 className={"accent"}>Contact Us</h2>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <p className={"white"}>We'd love to hear about how we can help you with AI
                                <span role="img" aria-label="robot emoji"> 🤖</span></p>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <input id="firstName" placeholder="First name" onChange={onFirstChange.bind(this)}/>
                            <input id="lastName" placeholder="Last name" onChange={onLastChange.bind(this)}/>
                            <input id="email" placeholder="Email" onChange={onEmailChange.bind(this)}/>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <textarea id="message" form="contactForm" placeholder="Enter text here..."
                                      onChange={onMessageChange.bind(this)}/>
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
                        <img src="/static/img/logo.png" alt="AI Blocks, 智能快" style={{height: "100px"}}/>
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