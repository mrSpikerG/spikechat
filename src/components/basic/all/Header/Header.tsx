import React, { Component } from 'react';
import s from './Header.module.sass';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Login from '../../main/modals/Login/Login';
import Register from '../../main/modals/Register/Register';

class Header extends Component<{}, 
{ 
    isActive: boolean,
    registerOpened: boolean,
    loginOpened: boolean

}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isActive: false,
            registerOpened: false,
            loginOpened: false
        };
    }

    handleLoginDropdown = () => {
        this.setState({ isActive: !this.state.isActive });
    }
    handleLoginModal = () => {
        this.setState({ isActive: false });
        this.setState({ loginOpened: !this.state.loginOpened });
    }
    handleRegisterModal = () => {
        this.setState({ isActive: false });
        this.setState({ registerOpened: !this.state.registerOpened });
    } 


    render() {
        return (
            <nav className={s.containerHeader}>
                <div className={s.splitter}>
                <Login setActive={this.handleLoginModal} isActive={this.state.loginOpened}/>
                <Register setActive={this.handleRegisterModal} isActive={this.state.registerOpened}/>
                    <div className={s.iconContainer}>
                        <img className={s.iconImage} src="https://i.imgur.com/E8VJeM9.png" alt="icon" />
                        <Link to="/"> Spike Group</Link>
                    </div>

                    <div className={s.navContainer}>
                        <Link className={s.navElement} to="chat">Chat</Link>
                        <Link className={s.navElement} to="/">News</Link>
                        <Link className={s.navElement} to="admin">Admin</Link>
                    </div>
                    <div>
                        <p onClick={this.handleLoginDropdown} className={s.dropdownElement}>Login</p>
                    <div className={s.dropdownContainer} style={{display: this.state.isActive ? "flex" : "none"}}>
                        <p onClick={this.handleLoginModal}>Login</p>
                        <p onClick={this.handleRegisterModal}>Register</p>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;