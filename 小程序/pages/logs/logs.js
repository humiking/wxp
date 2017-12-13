//logs.js
const util = require('../../utils/util.js')//调用module.exports,获取时间格式

Page({
  data: {
    logs: []//设置获取日志数据
  },
  onLoad: function () {//加载的时候调用
      // console.log(wx.getStorageSync('logs'));//获取到的是时间戳毫秒，为启动的时间数
    this.setData({//设置Page.data数据，里面添加改变的属性
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))//把转换的时间格式发送字符串
      })
    })
  },
})
