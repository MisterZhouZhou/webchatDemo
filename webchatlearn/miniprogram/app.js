//app.js

App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     traceUser: true,
    //   })
    // }
    this.globalData = {}
    //console.log('===onLaunch===');
    this.curid = wx.getStorageSync('curid') || this.curid; // API: 获取本地缓存，若不存在设置为全局属性
    this.setLocal('curid', this.curid); // 调用全局方法
  },

  //2、自定义全局方法部分
  setLocal(id, val) {
    wx.setStorageSync(id, val);//API：设置本地缓存
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log('===onShow===');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('===onHide===');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('===onError===');
  },
   
  /**
   * 页面不存在监听函数	小程序要打开的页面不存在时触发，会带上页面信息回调该函数
   */ 
  onPageNotFound: function() {
    console.log('===onPageNotFound===');
  },

  //3、自定义全局属性部分
  curid: "CN101010100",
  version: "1.0"

})

