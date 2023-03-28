import React, { Component } from 'react';
import Header from '../../components/basic/all/Header/Header';
import CardList from '../../components/basic/main/CardList/CardList';
import s from './Main.module.sass';

class Main extends Component<
    {},
    {
        isTikTok: boolean
    }> {

    constructor(props: any) {
        super(props);
        this.state = {
            isTikTok: false
        };
    }

    handleTikTok(event: React.MouseEvent) {

        let elem = (event.target as HTMLInputElement).checked;
        console.log(elem);

        this.setState({ isTikTok: elem });
    }

    render() {
        return (
            <div className='pagebase'>
                <Header />
                <div className={s.contentContainer}>
                    <h1 style={{marginBottom:"0px"}} className={s.title}>Welcome to BEST chatGPT </h1>
                    <h4 style={{marginTop:"0px",color:"#c9c9c9"}}>copy</h4>

                    <h2 >ChatGPT preview</h2>
                    <div className={s.imageContainer}>
                        <img className={s.imagePreview} src="https://www.specdecoder.com/images/news/article-images/3rd-1676582625.gif" alt="" />


                        <img className={s.imagePreview} style={{ display: this.state.isTikTok ? "flex" : "none" }} src="https://spikrecognition.s3.eu-west-2.amazonaws.com/New+Project.gif" alt="" />
                    </div>
                    <div className={s.tiktok}>
                        <h2>tiktok mode</h2>
                        <input onClick={this.handleTikTok.bind(this)} type="checkbox" name="" id="" />
                    </div>
                    <h2 >Donate</h2>
                    <CardList />
                </div>
            </div>

        )
    }
}

export default Main;