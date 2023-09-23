const { default: axios } = require("axios");

const getUsers = () => {
    console.log("get users API")
    return axios.get('https://jsonplaceholder.typicode.com/users')
}

module.exports = { getUsers };