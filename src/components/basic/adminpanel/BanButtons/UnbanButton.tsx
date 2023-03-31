import React, { Component } from 'react';
import axios from 'axios';
import s from './BanButtons.module.sass';

class UnbanButton extends Component<{

    username: string,
    update: ()=>{}
}, {}>  {


    unbanUser = () => {
        axios({
            method: 'post',
            url: `https://localhost:7270/api/unbanUser?name=${this.props.username}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {
            this.props.update();
        });
    }

    render() {
        return (
            <div>
                <button className={s.banButton} onClick={this.unbanUser}>Unban</button>
            </div>
        );
    }
}

export default UnbanButton;