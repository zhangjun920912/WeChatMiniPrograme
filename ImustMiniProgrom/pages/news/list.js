// pages/news/list.js
import { currentHost, fetchData } from '../tools/network.js';
import { showTimeStream } from '../tools/tools.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeChannel: undefined,
    channelData: undefined,
    currentTab: 'subscribe',
    listData: null,
    listTotalPageCount:0,
    listCurrentPageCount:0,
    isLoadingMore:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getChannelData();
    this.getNewsListData();
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
    this.fetchNextPage()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  getChannelData: function() {
    wx.request({
      url: currentHost().cdnHost + '/api/v5/configurations/system_default',
      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res);
      }
    })
  },

  //first load news list data
  getNewsListData: function(){
    var params = {'tab':this.data.currentTab}
    fetchData('/api/v6/news/first_page', true, params,'GET',null,
      (res)=>{
        var newsListData = res.data ? res.data.news : null
        var newsListMeta = res.data ? res.data.meta : null
        if(newsListData){
          for (let i in newsListData) {
            newsListData[i].published_at = showTimeStream(newsListData[i].published_at)
          }
        }
        this.setData({
          listData: newsListData,
          listTotalPageCount: newsListMeta ? newsListMeta.total_page_count : 0,
          listCurrentPageCount: newsListMeta ? newsListMeta.current_page : 0,
        })
      },
      (err)=>{

      }
    )
  },

  //fetch next page
  fetchNextPage: function(){
    if(this.data.isLoadingMore) return;
    if (this.data.listCurrentPageCount <= 1 || this.data.listTotalPageCount <= 1){
      this.setData({isLoadingMore:false});
      return;
    }
    //load more
    this.setData({isLoadingMore:true});
    var params = { 'tab': this.data.currentTab };
    params['page'] = this.data.listCurrentPageCount - 1;
    fetchData('/api/v6/news.json', true, params, 'GET', null,
      (res) => {
        var newsListData = this.data.listData.concat();
        var currentNewsListData = res.data ? res.data.news : null
        var newsListMeta = res.data ? res.data.meta : null
        if (currentNewsListData) {
          for (let i in currentNewsListData) {
            currentNewsListData[i].published_at = showTimeStream(currentNewsListData[i].published_at)
          }
          newsListData = newsListData.concat(currentNewsListData)
        }
        this.setData({
          listData: newsListData,
          listTotalPageCount: newsListMeta ? newsListMeta.total_page_count : 0,
          listCurrentPageCount: newsListMeta ? newsListMeta.current_page : 0,
          isLoadingMore: false
        })
      },
      (err) => {

      }
    )
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

  newsClick: function (e) {
    var that = this;
    that.setData({
      id: e.currentTarget.dataset.id
    })
    console.log('点我:', that.data.id);
    wx.redirectTo({
      url: '/pages/news/detail?id=' + that.data.id,
    })
  }
})