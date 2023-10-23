import React, {FC} from 'react';
import {IUser} from "../../interfaces/UserInterface";

interface IProps {
userDetails: IUser;

}

const UserDetails: FC<IProps> = ({userDetails}) => {
    const {id, phone, username, name, address:{city}} = userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
            <div>name: {name}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserDetails};