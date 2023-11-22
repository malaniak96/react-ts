import React, {useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {useNavigate} from "react-router-dom";
import {authService} from "../services/authService";

const RegisterPage = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const [error, setError] = useState<boolean>(null)
    const navigate = useNavigate();

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        try {
            await authService.register(user)
            setError(false)
            navigate('/login')
        } catch (e) {
            setError(true)
        }
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
            {error&& <div>username already exists</div>}
        </form>
    );
};

export {RegisterPage};