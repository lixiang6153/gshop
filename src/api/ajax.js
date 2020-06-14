/*
ajax请求模块,返回值为promise对象
const response = await ajax()
const result = response.data
我们希望直接得到结果,再次封装一层
返回值：promise对象（异步返回的数据是：response.data）
const result= await ajax()
 */
// 使用axios发送请求
import axios from 'axios'
export default function ajax (url, data = {}, type = 'GET') {
  // 通过promise的resolve返回真实数据给外部
  return new Promise(function (resolve, reject) {
    // 成功异步ajax请求
    let promise
    if (type === 'GET') {
      let dataSrc = ''
      Object.keys(data).forEach(key => {
        dataSrc += key + '=' + data[key] + '&'
      })
      if (dataSrc !== '') {
        dataSrc = dataSrc.substring(0, dataSrc.lastIndexOf('&'))
        url = url + '?' + dataSrc
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // 判断成功或失败
    promise.then(function (response) {
      // 成功了调用resolve()返回真实数据
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject返回错误数据
      reject(error)
    })
    return promise
  })
}
