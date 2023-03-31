import React, { Component } from 'react';
import s from './Adminpanel.module.sass';
import axios from 'axios';
import UserList from '../../components/basic/adminpanel/UsersList/UserList';
import BuyGroup from '../../components/basic/adminpanel/BuyGroupList/BuyGroup';

class Adminpanel extends Component<{}, {

    Users: {
        id: string,
        email: string,
        login: string,
        isLocked: boolean
    }[],
    Groups:{
        id:number,
        subscription:number,
        username:string,
        buyTime:string
    }[]
}> {

    constructor(props: any) {
        super(props);
        this.state = {
            Users: [],
            Groups:[]
        };
    }

    componentDidMount() {
        this.updateUI();
    }

    updateUI = () => {

        axios({
            method: 'post',
            url: `https://localhost:7270/checkAccess`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {
        }).catch((error) => {
            alert('Недостаточно прав.');
            window.open("http://localhost:3000", '_blank');
        });


        axios({
            method: 'get',
            url: `https://localhost:7270/api/getUsers`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {

            console.log(response.data);
            this.setState({ Users: response.data });
        });

        axios({
            method: 'get',
            url: `https://localhost:7270/api/getBuys`,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        }).then((response: any) => {

            this.setState({ Groups: response.data });


        });
    }

    render() {
        return (
            <div className={s.adminContainer}>
                <div className={s.tableContainer}>
                <UserList update={this.updateUI} Users={this.state.Users} />
                <BuyGroup Groups={this.state.Groups} />
                </div>
            </div>
        );
    }
}

export default Adminpanel;