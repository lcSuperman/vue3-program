module.exports = {
    devServer: {
    	// 配置代理
        host: 'localhost', 
        port: 4200, 
        proxy: {
            //代理接口前缀为/api的请求
            '/api': { 
                target: 'http://localhost:3000', //需要代理到的目标地址
                ws: true,
                changOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //重写路径
                }
            }
        }
    }
};
