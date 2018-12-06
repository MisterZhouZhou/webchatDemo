// pages/index/index.js

var util = require('../../utils/util')
var curPageIndex = [1, 1, 1]
var tabInitState = [false, false, false]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gankData: {},
    loadingHidden: false,
    curSelClassifyIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.checkInitLoadGankData()
  },

  // 加载干货数据
  loadGankData: function (pageNo, callback) {
    // 获取干货列表数据
    wx.request({
      url: 'http://gank.io/api/data/' + this.getClassifyName(true) + '/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        // 格式化日期
        res.data.results.map(gankInfo => {
          gankInfo.publishedAt = util.formatSimpleTime(gankInfo.publishedAt)
        })

        callback(res.data.results)
      }
    })
  },
  // 滚动到列表底部监听
  onBindscrolltolower: function (e) {
    var curClassifyName = this.getClassifyName()
    this.loadGankData(curPageIndex[this.data.curSelClassifyIndex], results => {
      curPageIndex[this.data.curSelClassifyIndex]++
      this.data.gankData[curClassifyName] = this.data.gankData[curClassifyName].concat(results)
      this.setData({
        gankData: this.data.gankData
      })
    })
  },
  // swiper 滚动改变监听
  onBindchange: function (e) {
    this.setData({
      curSelClassifyIndex: e.detail.current
    },()=>{
      this.checkInitLoadGankData()
    })
  },
  // 分类点击监听（android）
  // TODO：不知道 bindtap 怎么给方法传参数，不然下面两个方法只需要保留一个就可以了
  onTitleBarsClick0: function () {
    this.setData({
      curSelClassifyIndex: 0
    })
  },
  // 分类点击监听（iOS）
  onTitleBarsClick1: function () {
    this.setData({
      curSelClassifyIndex: 1
    })
  },
  // 分类点击监听（web）
  onTitleBarsClick2: function () {
    this.setData({
      curSelClassifyIndex: 2
    })
  },
  /**
   * 获取分类名称
   * @param isApiName 是否是干货api需要的请求 url 名称
   */
  getClassifyName: function (isApiName) {
    switch (this.data.curSelClassifyIndex) {
      case 0:
        return isApiName ? 'Android' : 'android'
      case 1:
        return isApiName ? 'iOS' : 'ios'
      case 2:
        return isApiName ? '前端' : 'web'
    }
  },
  // 检查初始化加载干货数据（根据不同类别）
  checkInitLoadGankData: function () {
    if (tabInitState[this.data.curSelClassifyIndex]) return

    var curClassifyName = this.getClassifyName()
    this.loadGankData(1, results => {
      curPageIndex[this.data.curSelClassifyIndex] = 2
      this.data.gankData[curClassifyName] = results
      this.setData({
        loadingHidden: true,
        gankData: this.data.gankData
      })
      tabInitState[this.data.curSelClassifyIndex] = true
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