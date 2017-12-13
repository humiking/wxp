const formatTime = date => {//箭头函数，date=>  date就是传过来的参数
                            /*
                            箭头函数可以代替function(){}
                            */
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/')//遍历数组,并用join连接
   + ' ' + [hour, minute, second].map(formatNumber).join(':')//遍历数组，并用join连接，join不加参数表示，分隔符为逗号
}

const formatNumber = n => {
  n = n.toString()//转换成字符串
  return n[1] ? n : '0' + n//表示该字符串的索引为1的字符是否为空或不存在，如果不存在就添0
}
//在require调用时，返回的是module.exports
module.exports = {
  formatTime: formatTime
}
