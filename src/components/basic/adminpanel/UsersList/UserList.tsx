import React, { Component } from 'react';
import BanButton from '../BanButtons/BanButton';
import UnbanButton from '../BanButtons/UnbanButton';
import s from './UserList.module.sass';

class UserList extends Component<{
    Users: {
        id: string,
        email: string,
        login: string,
        isLocked: boolean
    }[],
    update: ()=>any
}, {}> {
    render() {
        return (
            <div>
                <table className={s.UserTable}>
                    <tr>
                        <th>Username</th>
                        <th>Emai</th>
                        <th>Actions</th>
                    </tr>
                    {this.props.Users.map((item,index) => {
                        return <tr key={`user-${index}`}>
                            <td>{item.login}</td>
                            <td>{item.email}</td>
                            <td>{item.isLocked ? <UnbanButton update={this.props.update} username={item.login} /> : <BanButton update={this.props.update} username={item.login}/>}</td>

                        </tr>

                    })}

                </table>
            </div>
        );
    }
}

export default UserList;