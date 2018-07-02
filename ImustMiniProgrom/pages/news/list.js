// pages/news/list.js
import { currentHost } from '../tools/network.js';
import { showTimeStream } from '../tools/tools.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeChannel: undefined,
    channelData: undefined,
    listData: [
      {
        author: null,
        cdn_thumb: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173733/tesla.jpg',
        content_type: ['Fund Raising'],
        id: 173733,
        image_large_banner: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173733/large_banner_tesla.jpg',
        image_small_banner: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173733/small_banner_tesla.jpg',
        industries: ['制造业'],
        is_recommended_news: 'No',
        lock: 0,
        news_type: ['新闻'],
        published_at: '2018-07-02T07:16:10.944+00:00',
        sectors: ['汽车及零部件', '新能源汽车及零部件'],
        tags: ['美国'],
        thumb: 'https://dealglobe.com/uploads/platform/procedure/featured_image/173733/tesla.jpg',
        title_en: '',
        title_zh: '松下考虑对特斯拉超级工厂追加投资',
        wechat_official_account: null
      },
      {
        author: null,
        cdn_thumb: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173732/%E6%98%93%E7%95%8C%E6%83%85%E6%8A%A5%E7%B2%BE%E9%80%89-%E6%96%B9%E5%9B%BE.jpg',
        content_type: ['M&A', 'Fund Raising', '融资'],
        id: 173732,
        image_large_banner: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173732/large_banner_%E6%98%93%E7%95%8C%E6%83%85%E6%8A%A5%E7%B2%BE%E9%80%89-%E6%96%B9%E5%9B%BE.jpg',
        image_small_banner: 'https://assets.dealglobe.com/uploads/platform/procedure/featured_image/173732/small_banner_%E6%98%93%E7%95%8C%E6%83%85%E6%8A%A5%E7%B2%BE%E9%80%89-%E6%96%B9%E5%9B%BE.jpg',
        industries: ['其他行业'],
        is_recommended_news: 'No',
        lock: 0,
        news_type: ['其他'],
        published_at: '2018-07-02T03:48:32.507+00:00',
        sectors: ['物流运输', '矿业', '金融'],
        tags: ['易界午间资讯'],
        thumb: 'https://dealglobe.com/uploads/platform/procedure/featured_image/173732/%E6%98%93%E7%95%8C%E6%83%85%E6%8A%A5%E7%B2%BE%E9%80%89-%E6%96%B9%E5%9B%BE.jpg',
        title_en: '',
        title_zh: '【易界午间资讯】阿里巴巴将收购土耳其时尚电商Trendyol部分股权；英国Centricus与招商局等中资企业拟设立150亿美元科技基金',
        wechat_official_account: null
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getChannelData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let newListData = Object.assign({}, this.data.listData);
    for (let i in newListData){
      newListData[i].published_at = showTimeStream(newListData[i].published_at)
    }
    this.setData({listData: newListData});
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    var aa = currentHost()
    console.log(aa.host + aa.cdnHost)
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

  getChannelData: function() {
    // fetch data
  },

  handleClickSearchButton: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },

  handleClickCustomizeChannelButton: function () {
    wx.navigateTo({
      url: '../news/customizeChannel'
    })
  },

  handleClickUserButton: function () {
    wx.navigateTo({
      url: '../user/user'
    })
  },

  newsClick: function () {
    console.log('点我')
  }
})