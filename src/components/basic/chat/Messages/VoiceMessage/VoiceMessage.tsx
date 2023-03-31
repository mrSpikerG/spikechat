import React, { Component } from 'react';
import s from './VoiceMessage.module.sass';


class VoiceMessage extends Component<
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
                {/* <img src={this.props.message} className={s.message} /> */}
                <audio controls className={s.message} src={this.props.message}></audio>
            </div>
        );
    }
}

export default VoiceMessage;