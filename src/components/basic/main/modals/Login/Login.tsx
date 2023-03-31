import React, { Component } from 'react';
import s from './Login.module.sass';
import axios from 'axios';

class Login extends Component<{
    isActive:boolean,
    setActive:()=>any
},{
    login: string,
    password: string,
    showPassword: boolean
}> {

    constructor(props: any) {
        super(props);
        this.state = {
            login: "",
            password: "",
            showPassword: false
        };
    }

    
    loginAccount = () =>{
       
        axios({
            method: 'post',
            url: `https://localhost:7270/api/auth/login?UserName=${this.state.login}&Password=${this.state.password}`,
        }).then(function (response:any) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.userName);
           alert("account logined");
        }.bind(this));

    }

    handleValues = (event: React.ChangeEvent) => {
        let elem = (event.target as HTMLInputElement);
        if (elem.id === "log_login") {
            this.setState({ login: elem.value });
        }
        
        if (elem.id === "log_password") {
            this.setState({ password: elem.value });
        }
      
    }

    handlePassword = (event: React.ChangeEvent) => {
        let elem = (event.target as HTMLInputElement).checked;

        this.setState({ showPassword: elem });
    }

    render() {
        return (
            <div className={`modal_container ${this.props.isActive?"active":""}`}>
                <div className="modal_card">
                    <svg onClick={this.props.setActive} className={s.icon} style={{width: "1em", height: "1em",verticalAlign: "middle",fill: "currentColor",overflow: "hidden"}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" /></svg>
                    <p className={s.title}>Log in form</p>
                    <input onChange={this.handleValues} placeholder='login' id='log_login' className={s.inputModal} type="text" />
                    <input onChange={this.handleValues} placeholder='password' id='log_password' className={s.inputModal} type={`${this.state.showPassword ? "text" : "password"}`} />
                    <div className={s.showPass}>
                        <input onChange={this.handlePassword} type="checkbox" />
                        <p>Show Password?</p>
                    </div>
                    <button onClick={this.loginAccount} className={s.buttonModal}>Log in</button>

                </div>
            </div>
        );
    }
}

export default Login;