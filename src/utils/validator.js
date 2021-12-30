export const checkUserName = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('用户名不能为空'))
    }else{
      callback()
    }
  }
export  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('密码不能为空'))
    } else {
      callback()
    }
  }