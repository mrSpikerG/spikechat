import React, { Component } from 'react';
import ChatContent from '../../components/basic/chat/ChatContent/ChatContent';
import SideBar from '../../components/basic/chat/SideBar/SideBar';
import s from './Chat.module.sass';

class Chat extends Component {
    render() {
        return (
            <div className={s.chatPage}>
                <SideBar />
                <ChatContent />
            </div>
        );
    }
}

export default Chat;