//index.js
var sayUtil = require('../../util/sayHello');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: 'This is page data.',
    array: [{msg: '1'}, {msg: '2'}],
    num: 0,
    object: {
      text: 'init data'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    sayUtil.sayHello('zw');
    sayUtil.sayGoodbye('zw2');
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
  onShareAppMessage: function (res) {
    console.log('==='+JSON.stringify(res));
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },

  onTabItemTap(item) {
    console.log('=====');
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  },

  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function(){
      // 设置完值后的回调
    })
  },

  customData: {
    hi: 'MINA'
  },

  viewtap: function(){
    console.log('点我了')
  },

  changeText(){
    this.setData({
      text: 'changed data'
    })
  },

  changeNum(){
    this.data.num = 1;
    this.setData({
      num : this.data.num
    });
  },

  changeItemInArray(){
    this.setData({
      'array[0].msg': 'changed data'
    });
  },

  changeItemInObject(){
    this.setData({
      'object.text': 'changed data'
    });
  },

  addNewField: function () {
    this.setData({
      'newField.text': 'new data'
    })
  }

})
