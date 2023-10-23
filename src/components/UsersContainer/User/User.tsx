import React, {FC} from 'react';
import {IUser} from "../../../interfaces/UserInterface";
interface IProps {
    user: IUser,
    // click: ()=>void
    click: (id:number) => Promise<void>
}

const User:FC<IProps> = ({user, click}) => {

    const {id, name, username, email, phone} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {User};

//alt shift
//double click on what we need to copy