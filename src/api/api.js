import http from '../utils/http'


// get请求
export function getMenus(params){
    return http.get('/getMenusData',params)
}