import React from 'react';
import './Fonts.css'
import './Colors.css'
import './App.css';
import logo from './logo.svg'
import {TitleComponent} from "./components/TitleComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="wrapper">
                <nav>
                    <Link to="/"><img src={logo} alt="Home"/></Link>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

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
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <TitleComponent title={"SQ Mah | Home"}/>
            <h2>Home</h2>
        </div>

    );
}

function About() {
    return (
        <div>
            <TitleComponent title={"SQ Mah | About"}/>
            <h2>Dynamically loaded about!</h2>
        </div>

    );
}
