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
                {/* style={{ fontWeight: "500",fontSize: "20px",marginBottom: "0px",wordWrap: "break-word",color: "#ECECF1"}} */}
                <p  className={s.username}>{this.props.username}:</p>
                <img style={{width:"100%"}} src={this.props.message} />
            </div>
        );
    }
}

export default ImageMessage;