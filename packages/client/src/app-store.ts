import axios from 'axios';
import { LoginViewStore, createLoginViewStore } from "./login-page/login-view-store";
import { createSignUpViewStore, SignUpViewStore } from './signup-page/signup-view-store';

export interface AppStore {
    loginViewStore: LoginViewStore;
    signUpViewStore: SignUpViewStore;
}

export const createAppStore = (): AppStore => {
    const http = axios.create({
        baseURL: 'http://localhost:4000'
    });

    const loginViewStore = createLoginViewStore(http);
    const signUpViewStore = createSignUpViewStore(http);

    return {
        loginViewStore,
        signUpViewStore
    }
}