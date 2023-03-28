import React, { Component } from 'react';
import Card from '../Card/Card';
import s from './CardList.module.sass';

class CardList extends Component {
    render() {
        return (
            <div className={s.cardsContainer}>
                <Card name='Noname' cost='0$' backColor="linear-gradient(0deg, #f6f8fc, #f6f8fc)" imageSrc="https://i.imgur.com/0hMB2lS.jpeg" />
                <Card name='Premium' cost='5$' backColor="linear-gradient(131.33deg, #ff9518 1.37%, #fee715)" imageSrc="https://i.imgur.com/qrxq2L1.jpeg" />
                <Card name='Sponsor' cost='25$' backColor="linear-gradient(131.33deg, #20d3ea 1.37%, #0d81d6)" imageSrc="https://i.imgur.com/K437G9C.jpeg" />
                <Card name='Overlord' cost='50$' backColor="linear-gradient(131.33deg, #2beb3f 1.37%, #02c065)" imageSrc="https://i.imgur.com/3JpuOAp.jpeg" />
            </div>
        );
    }
}

export default CardList;