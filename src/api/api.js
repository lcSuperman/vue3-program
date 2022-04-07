import http from '../utils/http'


// get请求
export function getMenus(params){
    return http.get('/getMenusData',params)
}

export function getUser(params){
    return http.get('/api/user',params)
}

export function getHome(params){
    return http.get('/api/home',params)
}