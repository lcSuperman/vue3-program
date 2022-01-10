// index.js
import Mock from "mockjs"
import menusData from './mockData/menusData'

// Mock.mock(url,method,chartData) 三个参数对应 api地址、请求方式、数据源

Mock.mock("/getMenusData",'get',menusData) 

