import axios from 'axios'

export default ({ app }, inject) => {
  const instance = axios.create({
    baseURL: process.env.API_URL, // 统一配置基础地址
    timeout: 10000,
  })

  // 请求拦截器，可按需添加 token
  instance.interceptors.request.use(
    config => {
      // config.headers.Authorization = `Bearer xxx`
      return config;
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    response => {
      // 处理响应数据
      if (response.data && response.data.code !== 1) {
        // 可以在这里处理错误码
        return Promise.reject(new Error(response.data.message || 'Error'));
      }
      return response.data.data; // 返回实际数据
    }
  )

  // 挂载到 context、Vue 原型
  inject('axios', instance);
}
