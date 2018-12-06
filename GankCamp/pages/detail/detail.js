// pages/detail/detail.js
var collections;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    collections = wx.getStorageSync('collections') || []
    this.setData({
      title: options.title,
      url: options.url
    })
  },

  collection: function (e) {
    collections.unshift({ url: this.data.url, title: this.data.title, ctime: new Date() })
    wx.setStorage({
      key: "collections",
      data: collections
    })
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