import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./index.css";
import { useStore } from 'src/context';

enum FieldName {
    email = 'email',
    password = 'password',
    confirmPassword = 'confirmPassword'
}

interface FormData {
    [FieldName.email]: string;
    [FieldName.password]: string;
    [FieldName.confirmPassword]: string;
}

export const SignUpPage = () => {
    const { signUpViewStore } = useStore();
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        if (data.password === data.confirmPassword) {
            await signUpViewStore.signup(data.email, data.password);
        }
    }
    
    return <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>URL Shortifier</h2>
        <TextField 
            name={FieldName.email} 
            inputRef={register} 
            label={'Email'} 
        />
        <TextField 
            type="password" 
            name={FieldName.password} 
            inputRef={register} 
            label={'Password'} 
        />
        <TextField 
            type="password"
            name={FieldName.confirmPassword}
            label={'Confirm password'}
            inputRef={register}
        />
        <Button type="submit">Sign up</Button>
        <Link to="/login" className="link">Sign in</Link>
    </form>
}