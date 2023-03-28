import React, { Component } from 'react';
import s from './Card.module.sass';

class Card extends Component<
{
    backColor:string,
    imageSrc:string,
    name:string,
    cost:string
},
{}> {
    render() {
        return (
            <div className={s.cardBase} style={{backgroundImage:this.props.backColor}}>
                <img src={this.props.imageSrc} alt="" />
                <p>{this.props.name}</p>
                <p>{this.props.cost}$</p>
            </div>
        );
    }
}

export default Card;