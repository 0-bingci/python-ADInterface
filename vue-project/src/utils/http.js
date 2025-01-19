// axios基础封装
import axios from 'axios'

const httpInstance = axios.create({
    baseURL:'http://127.0.0.1:5000',
    timeout:5000
})

// 拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>Promise.reject(e))

httpInstance.interceptors.response.use(res=>res.data,e=>Promise.reject(e))
export default httpInstance