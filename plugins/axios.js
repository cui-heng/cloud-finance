// plugins/axios.js
import axios from 'axios'

export default ({ app }, inject) => {
  const instance = axios.create({
    baseURL: 'http://47.105.51.87:8080/', // 统一配置基础地址
    timeout: 10000,
  })

  // 请求拦截器，可按需添加 token
  instance.interceptors.request.use(
    config => {
      // config.headers.Authorization = `Bearer xxx`
      return config
    },
    error => Promise.reject(error)
  )

  // 响应拦截器
  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
  )

  // 挂载到 context、Vue 原型
  inject('axios', instance)
}
