import httpClient from "./HttpClient";

const LoginService = {
    login: async (email, password) => {
        try {
            const response = await httpClient.post('/login', { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default LoginService;