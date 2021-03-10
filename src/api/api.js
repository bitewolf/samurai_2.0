import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {"API-KEY": "4680416d-3047-4d9b-afcc-e761f9d399f7"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    
    unfollowUsers(id = 1){
        return instance.delete(`follow/${id}`)
        .then(response => response.data)
    },
    
    followUsers(id = 1){
        return instance.post(`follow/${id}`, {})
        .then(response => response.data)
    }
}

                                    
