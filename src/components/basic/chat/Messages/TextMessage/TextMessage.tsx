import React, { Component } from 'react';
import s from './TextMessage.module.sass';

class TextMessage extends Component<
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
                <p  className={s.message}>{this.props.message}</p>

            </div>
        );
    }
}

export default TextMessage;