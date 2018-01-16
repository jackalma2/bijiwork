Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: false,
    circular: false,
    interval: 500,
    duration: 200,
    current: 0
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

  //改变头部音标
  changeSymbol: function(e) {
    this.setData({
      current: e.currentTarget.id
    })
  },

  //点击每一个音标的时候
  //当自定义组件触发“myevent”事件时，调用“onMyEvent”方法
  onMyEvent: function(e) {
    console.log(1)
    console.log(e.detail) 
    wx.navigateTo({
      url: '/pages/symboly/symboly',
    })
  }

})