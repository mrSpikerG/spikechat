import React, { Component } from 'react';
import s from './Card.module.sass';
import axios from 'axios';

class Card extends Component<
    {
        backColor: string,
        imageSrc: string,
        name: string,
        cost: string,
        level: number
    },
    {}> {


    BuyCard = () => {

        if (localStorage.getItem("token") === null) {
            window.location.href = window.location.protocol + "//" + "localhost:3002";
        }

        window.open("https://privatbank.ua", '_blank');

        axios({
            method: 'post',
            url: `https://localhost:7270/api/buySubscribe?level=${this.props.level}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then(function (response: any) {
            alert("group buyed");
        }.bind(this));
    }

    render() {
        return (
            <div onClick={this.BuyCard} className={s.cardBase} style={{ backgroundImage: this.props.backColor }}>
                <img src={this.props.imageSrc} alt="" />
                <p>{this.props.name}</p>
                <p>{this.props.cost}</p>
            </div>
        );
    }
}

export default Card;