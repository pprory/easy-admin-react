const getToken = () => {
    return window.localStorage.getItem('token')
}
const setToken = (val: string) => {
    window.localStorage.setItem('token', val)
}
const removeToken = () => {
    window.localStorage.removeItem('token')
}

export {
    getToken,
    setToken,
    removeToken,
}