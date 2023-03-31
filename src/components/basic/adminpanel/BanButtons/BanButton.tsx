import React, { Component } from 'react';
import axios from 'axios';
import s from './BanButtons.module.sass';

class BanButton extends Component<{

    username: string,
    update: ()=>{}
}, {
    timeBan: string
}> {

    constructor(props: any) {
        super(props);
        this.state = {
            timeBan: "1"
        };
    }

    banUser = () => {
        axios({
            method: 'post',
            url: `https://localhost:7270/api/banUser?name=${this.props.username}&level=${this.state.timeBan}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {
            this.props.update();
        });
    }

    handleTimeBan = (event: React.ChangeEvent) => {

        
        let elem = (event.target as HTMLInputElement);
        console.log(elem.value);
        this.setState({ timeBan: elem.value });

    }

    render() {
        return (
            <div>
                <select style={{marginRight:"5px"}} onChange={this.handleTimeBan} name="" id="">
                    <option value="1">1 day</option>
                    <option value="2">1 week</option>
                    <option value="3">3 month</option>
                    <option value="4">1 year</option>
                    <option value="5">forever</option>
                </select>
                <button  className={s.banButton} onClick={this.banUser}>Ban</button>

            </div>
        );
    }
}

export default BanButton;