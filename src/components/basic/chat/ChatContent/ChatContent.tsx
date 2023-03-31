
import React, { Component } from 'react';
import ImageMessage from '../Messages/ImageMessage/ImageMessage';
import TextMessage from '../Messages/TextMessage/TextMessage';
import VoiceMessage from '../Messages/VoiceMessage/VoiceMessage';
import s from './ChatContent.module.sass';
import axios from 'axios';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

class ChatContent extends Component<
    {},
    {
        textMessages: {
            id: number,
            user: string,
            message: string,
            type: string
        }[],
        curMessage: string
    }

> {

    constructor(props: any) {
        super(props);
        this.state = {
            textMessages: [],
            curMessage: ""
        };
    }

    componentDidMount() {
        this.updateUI();
    }

    updateUI = () => {

        axios({
            method: 'get',
            url: `https://localhost:7270/api/getMessages`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {


            this.setState({ textMessages: response.data });

        });
    }

    handleValues = (event: React.ChangeEvent) => {
        let elem = (event.target as HTMLInputElement);

        this.setState({ curMessage: elem.value });
    }

    uploadFile = (event: React.ChangeEvent) => {
       
        let formData = new FormData();
        let elem = (event.target as HTMLInputElement);
        if (elem.files === null) {
            return;
        }

        formData.append("file", elem.files[0]);
        axios.post(`https://localhost:7270/api/sendPic`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            this.updateUI();
        });
    }

    sendMessage = () => {
        if (this.state.curMessage === "") {
            return;
        }
        axios({
            method: 'post',
            url: `https://localhost:7270/api/sendMessage?text=${this.state.curMessage}`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {
            this.updateUI();
        });
    }

    sendAudio = (blob:any) => {

        const audiofile = new File([blob], "audiofile.mp3", {
            type: "audio/mp3",
          });
          let formData = new FormData();
  
          console.log(audiofile);
          formData.append("file", audiofile);
          axios.post(`https://localhost:7270/api/sendVoice`, formData, {
              headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`,
                  'Content-Type': 'multipart/form-data'
              }
          }).then((response) => {
            console.log(response.data);
            
              this.updateUI();
          });
       
    };


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
                                    case "bot":
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
                        <input onChange={this.handleValues} autoFocus type="text" />
                        <svg onClick={this.sendMessage} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                    <div style={{ display: "flex" }}>
                        <input onChange={this.uploadFile} accept=".jpg, .png, .jpeg" type="file" />

                        <AudioRecorder onRecordingComplete={this.sendAudio} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContent;