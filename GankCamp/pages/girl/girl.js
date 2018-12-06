// pages/girl/girl.js
var pageNo = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    girlData: [],
    loadingHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadGankGirlData(results => {
      pageNo = 2
      this.setData({
        loadingHidden: true,
        girlData: results
      })
    })
  },

  onBindscrolltolower: function (e) {
    console.log('滚动到底部...')
    this.loadGankGirlData(results => {
      pageNo++
      this.setData({
        girlData: this.data.girlData.concat(results)
      })
    })
  },
  // 获取 gank 的妹纸数据
  loadGankGirlData: function (callback) {
    wx.request({
      url: 'http://gank.io/api/data/福利/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => callback(this.convertData(res.data.results))
    })
  },
  // 数据转换成大数组里面包含两条数据的小数组
  convertData: function (gankGirlData) {
    var tempGirlDataGroup = []
    var group = []
    gankGirlData.map(girlInfo => {
      girlInfo.url = girlInfo.url.replace('http://ww', 'http://ws')
      if (group.length == 2) {
        tempGirlDataGroup.push(group)
        group = [girlInfo]
      } else {
        group.push(girlInfo)
      }
    })

    if (group.length > 0) {
      tempGirlDataGroup.push(group)
    }

    return tempGirlDataGroup
  },
  // 图片点击
  onImageClick: function (e) {
    wx.navigateTo({
      url: '../showpic/showpic?pic=' + e.target.id
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