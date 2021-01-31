const Mock = require('mockjs')
const Random = Mock.Random
Mock.setup({
    timeout: 0
})

const baseData = (data) => ({
    data: data,
    msg: 'success',
    code: 200
})

Mock.mock('/api/login', 'get', res => {
    return {
        ...baseData(Random.string(18))
    }
})