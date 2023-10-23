import React, {useEffect, useState} from 'react';
import {IUser} from "../../../interfaces/UserInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [userDetails, setUserDetails] = useState<IUser>(null);

    const click = async (userId:number):Promise<void> => {
        const {data} = await userService.getById(userId);
        setUserDetails(data);
    }
    // const click = ()=>{
    //     console.log('hello')
    // }

    useEffect(()=>{
        userService.getAll().then(({data}) => setUsers(data))
    },[]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            {users.map(user=> <User key={user.id} user={user} click={click}/>)}
        </div>
    );
};

export {Users};

//click={click} in map