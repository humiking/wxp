//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')//判断是否当前按钮在当前版本可用
  },
  //事件处理函数
  bindViewTap: function() {//自定义函数事件，绑定转换视图路径事件
    wx.navigateTo({//跳转应用内非tabBar的页面路径，保留当前页面
      url: '../logs/logs'
    })
  },
  onLoad: function () {//加载页面时
    if (app.globalData.userInfo) {//如果存在userInfo的时候，
      this.setData({//设置page.data.userInfo：app.globalData.userInfo
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){//如果不存在app.globalData.userInfo,判断按钮是否可用
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {//定义了userInfoReadyCallback等待该函数把值传入
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
