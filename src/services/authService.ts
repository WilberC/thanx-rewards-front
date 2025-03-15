import api from "../api.ts";

export const loginService = async (email: string, password: string) => {
    const res = await api.post("login", {email, password});
    return res.data;
};

export const signUpService = async (name: string, email: string, password: string) => {
    const res = await api.post("users", {
        user: {
            name: name,
            email: email,
            password: password
        }
    });
    return res.data;
};