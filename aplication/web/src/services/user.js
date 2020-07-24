import { http } from './config'

export default {
    listar: (userID) => {
        if (!userID) return false;
        const user = 'users/' + userID
        return http.get(user)
    }
}