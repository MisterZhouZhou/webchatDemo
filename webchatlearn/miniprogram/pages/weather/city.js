// miniprogram/pages/weather/city.js
var app = getApp();
var json = require('json.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    cur_id: app.curid,
    cur_name: "",
    citylist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist(json.cjson);
    this.getname(this.data.cur_id)
  },

  //简化json数据
  getlist: function (json) {
    var that = this;
    that.cjson = [];
    json.forEach(function (val, i) {
      var tobj = {
        id: val.id,
        cityname: val.cityZh,
        province: val.provinceZh,
        leader: val.leaderZh
      }
      that.cjson.push(tobj);
    })
    that.creatarr()
  },
  //并列数据生成嵌套数组
  creatarr: function () {
    var that = this;
    var arr = [];
    var j = 0, k = 0;//(省份和城市指针)
    that.cjson.forEach(function (val, i) {
      if (i == 0) {//第一次无对比直接添加
        arr.push({ pro: val.province, larr: [{ lea: val.leader, carr: [{ city: val.cityname, id: val.id }] }] })
      } else {
        if (val.province == arr[j].pro) {//同省
          if (val.leader == arr[j].larr[k].lea) {//同市
            arr[j].larr[k].carr.push({ city: val.cityname, id: val.id })
          } else {//不同市
            k++;
            arr[j].larr.push({ lea: val.leader, carr: [{ city: val.cityname, id: val.id }] })
          }
        } else {//不同省
          j++; k = 0;
          arr.push({ pro: val.province, larr: [{ lea: val.leader, carr: [{ city: val.cityname, id: val.id }] }] })
        }
      }
    })
    that.cobj = arr;
    that.setData({ citylist: that.cobj })
  },
  //根据编号获取名称
  getname: function (id) {
    var that = this;
    for (var i = that.cjson.length - 1; i >= 0; i--) {
      if (that.cjson[i].id == id) {
        that.setData({ cur_name: that.cjson[i].cityname })
        break;
      }
    }

  },

  //选择城市tap事件
  selecttap: function (e) {
    var that = this;
    app.curid = e.currentTarget.id;
    app.setLocal('curid', app.curid);
    //that.setData({cur_id:app.curid,cur_name:that.getname(app.curid)})
    wx.switchTab({ url: '../weather/weather' });
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