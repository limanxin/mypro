// 这个文件专门用于处理与users表相关的业务
// 引入asios
import axios from '@/request/http.js'

// 实现登陆验证
export const userlogin = (data) => {
  // axios({})返回是一个promise对象
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
// 获取用户的详情
export const getuserId = (id) => {
  return axios({
    url: `/user/${id}`
  })
}
