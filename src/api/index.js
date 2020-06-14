/*
封装多个模板的n个请求
函数返回值：promise对象
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
// 可以使用箭头函数
// export function reqAddress (geohash) {
//
// }
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 获取食物分类列表
export const reqFoodTypes = () => ajax('/index_category')

// 根据行为度获取获取商铺列表
export const reqAShopList = (long, lat) => ajax('/shops', {longitude: long, latitude: lat})
