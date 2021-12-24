import axiosClient from './axiosClient';


const apiCalls = {
    getPizza: () => {
        return axiosClient.get(`pizza`);
    },
    getDrinks: () => {
        return axiosClient.get(`drink`);
    },
    getSneakes: () => {
        return axiosClient.get(`sneake`);
    },
    getSouse: () => {
        return axiosClient.get(`souse`);
    }
    
};
export default apiCalls;