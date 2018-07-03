// pages/news/detail.js
const BASE_URL = 'https://pre.dealglobe.com';
const util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    content: '',
    shortday: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdetail(options.id);
  },
  getdetail: function (id) {
    wx.showLoading({
      title: '加载中',
    });
    var that = this;
    wx.request({
      url: BASE_URL + `/api/v5/news/${id}.json`,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(32, res)
        if (res.statusCode == 200) {
          var _news = res.data.news;
          var _content = (_news.base_info.content);
          var _date = _news.meta_info.date;
          that.setData({
            detail: _news,
            shortday: util.formatDate(new Date(_date)),
          });
          WxParse.wxParse('content', 'html', _content, that, 5);
          setTimeout(function () {
            wx.hideLoading()
          }, 500);
          wx.setNavigationBarTitle({
            title: that.data.detail.meta_info.title
          })
        }
      }
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