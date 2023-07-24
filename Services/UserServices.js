const API_Users = 'http://localhost:3000/users/';
const users = () => fetch(API_Users).then(response => response.json());
export const usersServices = {
    users,
}