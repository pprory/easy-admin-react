import request from "~/utils/request";


const Login = function () {
    return request({
        url: '/api/login',
        method: 'get'
    })
}

export {
    Login,
}