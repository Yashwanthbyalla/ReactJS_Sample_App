import React, { Component } from 'react';
import { render } from 'react-dom';
import './Login.css';
import { Home } from './Home';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  username: '',
                        pwd: '',
                        type: "password",
                        error: false
                     }
    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }
    handleChangePwd(event) {
        this.setState({ pwd: event.target.value })
    }

    onShow(event) {
        if (this.state.pwd.length > 0) {
            event.type === "mouseenter" ? this.setState({ type: "text" }) : this.setState({ type: "password" });
        }
    }

    OnSubmitBtn() {
        if (this.state.username === "react" && this.state.pwd === "js") {
            render(<Home data={this.state.username}/>, document.getElementById('root'));
        } else {
            // alert('Invalid Credentials!! Enter the correct credentials');
            this.setState({error: true});
        }
    }

    OnSubmitReset() {
        this.setState({ username: "", pwd: "" })
    }

    ValidateCredentials() {
        return this.state.username.length > 0 && this.state.pwd.length > 0;
    }

    Validate() {
        return this.state.username.length > 0 || this.state.pwd.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        var errorStyles = {
            display: this.state.error ? "block" : "none",
            color: this.state.error ? "red" : "",
            marginTop: "30px"
        };
        var disabledLoginStyles = {
            cursor: (!this.ValidateCredentials()) ? "not-allowed" : "auto"
        };
        var disabledResetStyles = {
            cursor: (!this.Validate()) ? "not-allowed" : "auto"
        };
        return (
            <div className="border">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" value={this.state.username} onChange={this.handleChange.bind(this)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <input type={this.state.type} value={this.state.pwd} onChange={this.handleChangePwd.bind(this)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i onMouseEnter={this.onShow.bind(this)} onMouseLeave={this.onShow.bind(this)} className="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>

                    <div className="btn container">
                        <button id="btn_login" onClick={() => this.OnSubmitBtn()} style={disabledLoginStyles} disabled={!this.ValidateCredentials()} className="btn btn-light btn_float">Login</button>
                        <button type="submit" onClick={() => this.OnSubmitReset()} style={disabledResetStyles} disabled={!this.Validate()} className="btn btn-light btn_float1">Reset</button>
                    </div>
                    <h6 style={errorStyles}>Username or Password is incorrect.</h6>
                </form>
            </div>
        );
    }
}

export default login;