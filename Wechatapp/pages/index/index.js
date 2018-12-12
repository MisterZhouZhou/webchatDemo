//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indexmenu: [],
    imgUrls: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData: function () {
    this.setData({
      indexmenu: [
        {
          'icon': './../../images/icon_01.png',
          'text': '众创空间',
          'url': 'space'
        },
        {
          'icon': './../../images/icon_03.png',
          'text': '服务集市',
          'url': 'service'
        },
        {
          'icon': './../../images/icon_05.png',
          'text': '会议室预定',
          'url': 'conference'
        },
        {
          'icon': './../../images/icon_07.png',
          'text': '云资源申请',
          'url': 'resource'
        },
        {
          'icon': './../../images/icon_09.png',
          'text': '园区问问',
          'url': 'question'
        },
        {
          'icon': './../../images/icon_11.png',
          'text': '物业服务',
          'url': 'property'
        },
        {
          'icon': './../../images/icon_13.png',
          'text': '入驻申请',
          'url': 'apply'
        }
      ],
      imgUrls: [
        '../../images/banner_02.jpg',
        'https://raw.githubusercontent.com/iwgang/GankCamp-WechatAPP/master/screenshot/all.gif',
        'https://raw.githubusercontent.com/iwgang/GankCamp-WechatAPP/master/screenshot/s2.png'
      ]
    })
  },
  changeRoute (e) {
    var url = e.currentTarget.id
    wx.navigateTo({
      url: `../${url}/${url}`
    })
  }
})
