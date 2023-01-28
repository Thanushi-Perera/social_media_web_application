import axios from 'axios';

// Config
import { baseURL } from '../config';


export const Register = async (details) => {
    const { data } = await axios.post(baseURL + '/api/v1/auth/register/', details);

    return data;
}

export const Login = async (details) => {
    const { data } = await axios.post(baseURL + '/api/v1/auth/login/', details);

    return data;
}