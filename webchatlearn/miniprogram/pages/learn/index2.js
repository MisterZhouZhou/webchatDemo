// miniprogram/pages/learn/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!',
    array: [1,2,3,4,5,6],
    view: 'MINA',
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    count: 1,
    flag: false,
    name: 'zw',
    zero: 0,
    array2: [
      {message: 'foo'},
      { message: 'bar' }
    ],
    msgItems: {
      index: 0,
      msg: 'this is a template',
      time: '2018-11-30'
    }
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

  },


  add(){
    this.setData({
      count: this.data.count + 1
    });
  }


})