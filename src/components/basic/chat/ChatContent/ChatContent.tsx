
import React, { Component } from 'react';
import ImageMessage from '../Messages/ImageMessage/ImageMessage';
import TextMessage from '../Messages/TextMessage/TextMessage';
import VoiceMessage from '../Messages/VoiceMessage/VoiceMessage';
import s from './ChatContent.module.sass';
class ChatContent extends Component<
    {},
    {
        textMessages: {
            id: number,
            user: string,
            message: string,
            type: string
        }[]
    }

> {

    constructor(props: any) {
        super(props);
        this.state = {
            textMessages: [
                {
                    id: 2,
                    user: "test",
                    message: "https://i.pinimg.com/originals/5e/4c/65/5e4c655b9353e0be289273b3e7c4b227.jpg",
                    type: "image"
                },
                {
                    id: 1,
                    user: "test",
                    message: "test2",
                    type: "text"
                },
                {
                    id: 2,
                    user: "test",
                    message: "test2",
                    type: "text"
                },
                {
                    id: 2,
                    user: "test",
                    message: "https://i.pinimg.com/originals/5e/4c/65/5e4c655b9353e0be289273b3e7c4b227.jpg",
                    type: "image"
                },
                {
                    id: 3,
                    user: "test",
                    message: "texttexttexttexttexttexttexttexttexttexttextte xttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex ttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext",
                    type: "text"
                }
            ]
        };
    }

    render() {
        return (
            <div className={s.chatContainer}>
                <div className={s.chatTop}>
                    <div className={s.chatTopSplit}>
                        <div className={s.messageContainer}>
                            {this.state.textMessages.map((item, index) => {

                                switch (item.type) {
                                    case "text":
                                        return <TextMessage key={`message-${index}`} username={item.user} message={item.message} />;
                                    case "image":
                                        return <ImageMessage key={`message-${index}`} username={item.user} message={item.message} />;
                                    case "voice":
                                        return <VoiceMessage key={`message-${index}`} username={item.user} message={item.message} />;
                                }
                                return
                            })}
                        </div>
                    </div>
                </div>

                <div className={s.chatBottom}>
                    <div className={s.inputContainter}>
                        <input autoFocus type="text" />
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContent;