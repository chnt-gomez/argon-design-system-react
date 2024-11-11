import httpClient from "./HttpClient";

const SignupService = {
    signup: async (email, password) => {
        try {
            const response = await httpClient.post('/signup', { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default SignupService;