// pages/submitgank/submitgank.js
var desc, who, url
Page({

  /**
   * 页面的初始数据
   */
  data: {
    who: '',
    curSelTypeIndex: 0,
    types: ['Android', 'iOS', '休息视频', '福利', '拓展资源', '前端', '瞎推荐', 'App'],
    loadingHidden: true,
    hiddenTips: true,
    tipsContent: '',
    hiddenCommitTips: true,
    hideCommitSuccessToast: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      who: options.name
    })
  },

  onSelTypeChange: function (e) {
    this.setData({
      curSelTypeIndex: e.detail.value
    })
  },
  onDescInput: function (e) {
    desc = e.detail.value
  },
  onWhoInput: function (e) {
    who = e.detail.value
  },
  onUrlInput: function (e) {
    url = e.detail.value
  },
  // 提交干货预处理
  submitGank: function (e) {
    if (!desc) {
      this.setData({
        hiddenTips: false,
        tipsContent: '未输入描述信息'
      })
      return
    }

    if (!url) {
      this.setData({
        hiddenTips: false,
        tipsContent: '未输入url地址'
      })
      return
    }

    this.setData({
      hiddenCommitTips: false
    })
  },
  // 确认提交干货
  onCommitTipsConfirm: function (e) {
    this.setData({
      hiddenCommitTips: true,
      loadingHidden: false
    })

    wx.request({
      url: 'https://gank.io/api/add2gank',
      method: 'POST',
      data: 'url=' + url + '&desc=' + desc + '&who=' + who + '&type=' + this.data.types[this.data.curSelTypeIndex] + '&debug=false',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        if (res.data.error) {
          // 提交失败
          this.setData({
            loadingHidden: true,
            hiddenTips: false,
            tipsContent: res.data.msg
          })
        } else {
          // 提交成功
          this.setData({
            loadingHidden: true,
            hideCommitSuccessToast: false
          })

          // 定时，3秒消化
          setTimeout(() => {
            this.setData({
              hideCommitSuccessToast: true
            })
          }, 3000)
        }
      }
    })
  },
  onCommitTipsCancel: function (e) {
    this.setData({
      hiddenCommitTips: true
    })
  },
  onTipsConfirm: function (e) {
    this.setData({
      hiddenTips: true,
      tipsContent: ''
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