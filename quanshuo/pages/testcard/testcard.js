// pages/testcard/testcard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置横向滚动条位置
    scrollLeft: 290+(300+20)+(300+20)+(300+20)+(300+20),
    list: [{
      title: '标题一',
      backgroundcolor: 'red'
    }, {
        title: '标题二',
        backgroundcolor: 'yellow'
    }, {
        title: '标题三',
        backgroundcolor: 'blue'
    }, {
      title: '标题四',
      backgroundcolor: 'green'
    }, {
      title: '标题五',
      backgroundcolor: 'green'
    }, {
      title: '标题六',
      backgroundcolor: 'green'
    }, {
      title: '标题七',
      backgroundcolor: 'green'
    }],
    txt: ''
  },

  //滚动时触发
  onScroll: function (e) {
    if (e.detail.scrollLeft > 180) {
      //this.setData({ scrollLeft: 279})
    }
    console.log(e.detail.scrollLeft)
    this.setData({
      //scrollLeft: 277.5
    })
    //deltaX 获取方向和速度
    if (e.detail.deltaX > 0) {
      this.setData({
        txt: '右'
      })
    } else if (e.detail.deltaX < 0) {
      this.setData({
        txt: '左'
      })
    }
  },

  //滚动到顶部/左边
  onLeft: function (e) {
    console.log('scroll left')
  },

  //滚动到底部/右边
  onRight: function (e) {
    console.log('scroll right')
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
})