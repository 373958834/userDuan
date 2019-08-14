// 配置axios
import axios from 'axios'
import JSONBig from 'json-bigint'

const instance = axios.create({

  baseURL: 'https://test.8boluo.com',
  transformResponse: [(data) => {
    if (data) {
      return JSONBig.parse(data)
    }
    return data
  }]
})

// 请求拦截
instance.interceptors.request.use(config => {
  // 给头部加上认证信息
  const user = window.sessionStorage.getItem('hehe')
  if (user) {
    config.headers = {
      Authorization: 'Bearer ' + JSON.parse(user).token
    }
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default instance
