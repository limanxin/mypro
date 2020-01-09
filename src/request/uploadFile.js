// 这个文件专门用于处理文件上传的业务
// 引入asios
import axios from '@/request/http.js'

// 1 实现文件的上传
export const uploadFile = (data) => {
  return axios({
    url: '/upload',
    method: 'post',
    data
  })
}
