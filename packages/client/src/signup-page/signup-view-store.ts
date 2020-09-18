import { AxiosInstance } from "axios";

export interface SignUpViewStore {
    signup(email: string, password: string): Promise<void>;
}

export const createSignUpViewStore = (http: AxiosInstance) => {
    const signup = async (email: string, password: string) => {
        await http.post('/auth/signup', { email, password });
    }   

    return {
        signup
    }
}