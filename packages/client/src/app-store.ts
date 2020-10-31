import axios from 'axios';
import io from 'socket.io-client';
import { LoginViewStore, createLoginViewStore } from "./login-page/login-view-store";
import { ItemsViewStore, ItemsViewStoreImpl } from './main-page/items-view-store';
import { createSignUpViewStore, SignUpViewStore } from './signup-page/signup-view-store';

export interface AppStore {
    loginViewStore: LoginViewStore;
    signUpViewStore: SignUpViewStore;
    itemsViewStore: ItemsViewStore;
}

export const createAppStore = (): AppStore => {
    const http = axios.create({
        baseURL: 'http://localhost:4000'
    });
    const itemsWS = io('ws://localhost:4000');


    const loginViewStore = createLoginViewStore(http);
    const signUpViewStore = createSignUpViewStore(http);
    const itemsViewStore = new ItemsViewStoreImpl(itemsWS);

    return {
        loginViewStore,
        signUpViewStore,
        itemsViewStore
    }
}