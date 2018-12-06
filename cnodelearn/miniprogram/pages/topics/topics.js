// miniprogram/pages/topics/topics.js
var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '话题列表',
    postsList: [],
    hidden: false,
    page: 1,
    tab: 'all',
    scrollH: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        let scrollH = res.windowHeight;
        self.setData({
          scrollH: scrollH
        });
      }
    });
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh(){
    this.fetchData();
  },

  /**
   * 数据加载
   */
  fetchData(data){
    var self = this;
    self.setData({hidden: false});
    if(!data) data = {};
    if(!data.page) data.page = 1;
    if(data.page == 1){
      self.setData({postsList: []});
    }
    wx.request({
      url: Api.getTopics(data),
      success: (res)=>{
        var dataList = res.data.data.map((item) => {
          item.last_reply_at = util.getDateDiff(new Date(item.last_reply_at));
          return item;
        })
        self.setData({postsList: self.data.postsList.concat(dataList)});
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    })
  },

  /**
   * tabBar 切换
   */
  onTapTag: function (e) {
    var self = this;
    var tab = e.currentTarget.id;
    self.setData({
      tab: tab
    });
    if (tab !== 'all') {
      this.fetchData({ tab: tab });
    } else {
      this.fetchData();
    }
  },

  lower(e){
    var self = this;
    self.setData({
      page: self.data.page + 1
    });
    if (self.data.tab !== 'all') {
      this.fetchData({ tab: self.data.tab, page: self.data.page });
    } else {
      this.fetchData({ page: self.data.page });
    }
  },

  redictDetail (e) {
    console.log('我要看详情');
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
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