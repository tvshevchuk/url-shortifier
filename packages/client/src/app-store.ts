import axios from 'axios';
import { LoginViewStore, createLoginViewStore } from "./login-page/login-view-store";

export interface AppStore {
    loginViewStore: LoginViewStore;
}

export const createAppStore = (): AppStore => {
    const http = axios.create({
        baseURL: 'http://localhost:4000'
    });

    const loginViewStore = createLoginViewStore(http);
    return {
        loginViewStore
    }
}