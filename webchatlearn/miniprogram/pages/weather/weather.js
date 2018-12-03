// miniprogram/pages/weather/weather.js
var app = getApp();  // //获取当前小程序实例，方便使用全局方法和属性
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur_id: app.curid, base: "", now: "", suggestion:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 设置加载模态框
    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});
    this.getnow((data)=>{
      wx.hideToast();
      data.now.cond.src = "http://files.heweather.com/cond_icon/" + data.now.cond.code + ".png";
      this.setData({
        basic: data.basic, now: data.now
      });
    })
    this.getsuggestion((data)=>{
      this.setData({suggestion: data.suggestion});
    });
  },

  //3、自定义页面方法：获取当前天气API
  getnow(fn){
    wx.request({
      url: 'https://free-api.heweather.com/v5/now',
      data: {city: app.curid, key: '01a7798b060b468abdad006ea3de4713'},
      header: { 'Content-Type': 'application/json'},
      success: (res)=>{
        fn(res.data.HeWeather5[0]);
      }
    })
  },

  //获取生活指数API
  getsuggestion(fn){
    wx.request({
      url: 'https://www.xiaoguge.cn/api/wxtest/suggestion.php',
      data: { city: app.curid, key: '01a7798b060b468abdad006ea3de4713' },
      header: { 'Content-Type': 'application/json' },
      success: function (res) { fn(res.data.HeWeather5[0]); }
    })
  },

  //4、页面事件绑定部分,跳转菜单页面 
  bindViewTap () {
    wx.switchTab({ url: '../weather/city' }) 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    setTimeout(()=>{
      // 结束下拉刷新
      wx.stopPullDownRefresh();
    }, 5000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})