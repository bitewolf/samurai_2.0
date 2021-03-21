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
    },
    getId(id = 1){
        console.warn('Obsolete method. Please used profileAPI')
        return profileAPI.getId(id)
    }

    
}

export const profileAPI = {
    getId(id = 1){
        return instance.get(`profile/${id}`)
        .then(response => response.data)
    },
    getStatus(id = 1) {
        return instance.get(`profile/status/${id}`)
        .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
        .then(response => response.data)
    }

    
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
        .then(response => response.data)
    },
    
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
        .then(response => response.data)
    },
    
    logout() {
        return instance.delete(`auth/login`)
        .then(response => response.data)
    }

    
}

                                    
