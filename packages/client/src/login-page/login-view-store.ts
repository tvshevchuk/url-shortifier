import { AxiosInstance } from "axios";

export enum LoginStatus {
    loggedOut,
    loggedIn
}

export interface LoginViewStore {
    loginStatus: LoginStatus;
    login(email: string, password: string): Promise<void>;
}

export const createLoginViewStore = (http: AxiosInstance): LoginViewStore => {
    let loginStatus = LoginStatus.loggedOut;

    if (localStorage.getItem('token') !== null) {
        loginStatus = LoginStatus.loggedIn;
    }

    const login = async (email: string, password: string) => {
        await http.post('/auth/login', { email, password });
    }

    return {
        loginStatus,
        login
    }
}