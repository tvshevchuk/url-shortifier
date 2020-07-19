import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStore } from '../context';
import "./index.css";

enum FieldName {
    email = 'email',
    password = 'password'
}

interface FormData {
    [FieldName.email]: string;
    [FieldName.password]: string;
}

export const LoginPage = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const { loginViewStore } = useStore();

    const onSubmit = async (data: FormData) => {
        await loginViewStore.login(data.email, data.password);
    }
    
    return <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>URL Shortifier</h2>
        <TextField name={FieldName.email} inputRef={register} label={'Email'} />
        <TextField name={FieldName.password} inputRef={register} label={'Password'} />
        <Button type="submit">Sign in</Button>
        <Link to="/signup" className="link">Sign up</Link>
    </form>
}