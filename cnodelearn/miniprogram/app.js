//app.js
App({
  onLaunch: function () {
    
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    console.log(logs)
    wx.setStorageSync('logs', logs)

    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     traceUser: true,
    //   })
    // }
  },
  /**
   * 获取用户信息
   */
  getUserInfo: function(cb){
    var that = this
    if(that.globalData.userInfo){
      typeof cb == 'function' && cb(that.globalData.userInfo)
    }else{
      // 调用微信登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
