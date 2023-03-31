import React, { Component } from 'react';
import s from './BuyGroup.module.sass';

class BuyGroup extends Component<{
    Groups: {
        id: number,
        subscription: number,
        username: string,
        buyTime: string
    }[]
}, {}> {


    getItemSubsctiption(id: number) {
        switch (id) {
            case 0:
                return "Basic";
            case 1:
                return "Premium";
            case 2:
                return "Sponsor";
            case 3:
                return "Overlord";

        }
    }

    render() {
        return (
            <div className={s.GroupContainer}>
                <table className={s.UserTable}>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Group</th>
                        <th>Time</th>
                        </tr>
                    {this.props.Groups.map((item,index) => {
                        return <tr key={`group-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{this.getItemSubsctiption(item.subscription)}</td>
                            <td>{item.buyTime}</td>
                        </tr>

                    })}

                </table>
            </div>
        );
    }
}

export default BuyGroup;