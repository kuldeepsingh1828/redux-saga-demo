import axios from "axios";

const getUsers = () => {
    console.log("get users API")
    return axios.get('https://jsonplaceholder.typicode.com/users')
}
export { getUsers };