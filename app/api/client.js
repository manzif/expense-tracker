import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://rgaa-server.herokuapp.com/api/'
})

export default apiClient;