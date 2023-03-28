import React, { Component } from 'react';
import s from './ImageMessage.module.sass';

class ImageMessage extends Component<
    {
        username: string,
        message: string
    },
    {}
> {
    render() {
        return (
            <div>
                <p className={s.username}>{this.props.username}:</p>
                <img src={this.props.message} className={s.image} />
            </div>
        );
    }
}

export default ImageMessage;