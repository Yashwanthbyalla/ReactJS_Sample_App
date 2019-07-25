import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            showMarkUpDiv: true,
            showScriptingDiv: false,
            showProgrammingDiv: false,
            showStylesheetDiv: false,
            showDatabaseDiv: false
        }
    }    
    Markup(e) {
        this.setState({
            showMarkUpDiv: true,
            showProgrammingDiv: false,
            showScriptingDiv: false,
            showStylesheetDiv: false,
            showDatabaseDiv: false
        })
    }
    Scripting(e) {
        this.setState({
            showScriptingDiv: true,
            showProgrammingDiv: false,
            showMarkUpDiv: false,
            showStylesheetDiv: false,
            showDatabaseDiv: false
        })
    }
    Programming(e) {
        this.setState({
            showProgrammingDiv: true,
            showMarkUpDiv: false,
            showScriptingDiv: false,
            showStylesheetDiv: false,
            showDatabaseDiv: false
        })
    }
    Styling(e) {
        this.setState({
            showProgrammingDiv: false,
            showMarkUpDiv: false,
            showScriptingDiv: false,
            showStylesheetDiv: true,
            showDatabaseDiv: false
        })
    }
    Database(e) {
        this.setState({
            showProgrammingDiv: false,
            showMarkUpDiv: false,
            showScriptingDiv: false,
            showStylesheetDiv: false,
            showDatabaseDiv: true
        })
    }

    render() {
        var showMarkUpDiv = {
            display: this.state.showMarkUpDiv ? "block" : "none"
        };
        var showScriptingDiv = {
            display: this.state.showScriptingDiv ? "block" : "none"
        };
        var showProgrammingDiv = {
            display: this.state.showProgrammingDiv ? "block" : "none"
        };
        var showStylesheetDiv = {
            display: this.state.showStylesheetDiv ? "block" : "none"
        };
        var showDatabaseDiv = {
            display: this.state.showDatabaseDiv ? "block" : "none"
        };
        // Styles for li upon click
        var clickedMarkup = {
            textDecoration: this.state.showMarkUpDiv ? "underline" : "none",
            fontWeight: this.state.showMarkUpDiv ? "bold" : "normal"
        };
        var clickedScripting = {
            textDecoration: this.state.showScriptingDiv ? "underline" : "none",
            fontWeight: this.state.showScriptingDiv ? "bold" : "normal"
        };
        var clickedProgramming = {
            textDecoration: this.state.showProgrammingDiv ? "underline" : "none",
            fontWeight: this.state.showProgrammingDiv ? "bold" : "normal"
        };
        var clickedStylesheet = {
            textDecoration: this.state.showStylesheetDiv ? "underline" : "none",
            fontWeight: this.state.showStylesheetDiv ? "bold" : "normal"
        };
        var clickedDatabase = {
            textDecoration: this.state.showDatabaseDiv ? "underline" : "none",
            fontWeight: this.state.showDatabaseDiv ? "bold" : "normal"
        };
        var markUpLang = ["HTML-Hyper Text MarkUp Language",
            "XML-Extensible Markup Language",
            "XAML-Extensible Application Markup Language",
            "XHTML-Extensible Hypertext Markup Language"];
        var scriptingLang = ["JS-JavaScript", "TS-TypeScript", "ES-ECMAScript"];
        var programmingLang = ["Java", "C#", "C++", "C"];
        var styleSheets = ["CSS", "Bootstrap", "Material"];
        var database = ["My SQL", "SQLite", "MongoDB"];
        
        return (
            <div className="main">
                <h5 className="welcomeGreet">Hello <label className="userNameLabel">{this.props.data}</label></h5>
                <p className="notePoint"> Welcome!! <br/> Have a glance at the courses displayed for various categories of coding.</p>
                {/* Navbar Code starts */}
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={this.Markup.bind(this)} style={clickedMarkup}>
                                <a className="nav-link" >MarkUp Languages</a>
                            </li>
                            <li className="nav-item" onClick={this.Scripting.bind(this)} style={clickedScripting}>
                                <a className="nav-link" >Scripting Languages</a>
                            </li>
                            <li className="nav-item" onClick={this.Programming.bind(this)} style={clickedProgramming}>
                                <a className="nav-link">Programming Languages</a>
                            </li>
                            <li className="nav-item" onClick={this.Styling.bind(this)} style={clickedStylesheet}>
                                <a className="nav-link">Stylesheets</a>
                            </li>
                            <li className="nav-item" onClick={this.Database.bind(this)} style={clickedDatabase}>
                                <a className="nav-link">Database</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* Navbar code ends */}
                <div className="content">
                    <div className="eachContent" style={showMarkUpDiv}>
                        <p><b>List of Markup Languages</b></p>
                        <ul>
                            {markUpLang.map((lang,i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>

                    <div className="eachContent" style={showScriptingDiv}>
                        <p><b>List of Scripting Languages</b></p>
                        <ul>
                            {scriptingLang.map((lang,i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>

                    <div className="eachContent" style={showProgrammingDiv}>
                        <p><b>List of Programming Languages</b></p>
                        <ul>
                            {programmingLang.map((lang,i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>

                    <div className="eachContent" style={showStylesheetDiv}>
                        <p><b>List of Stylesheets</b></p>
                        <ul>
                            {styleSheets.map((lang,i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>

                    <div className="eachContent" style={showDatabaseDiv}>
                        <p><b>List of Databases</b></p>
                        <ul>
                            {database.map((lang,i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}