// pages/testcard/testcard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //滑动方向 1正方向右, -1反方向左
    dircetion: 1,
    //卡片序号从1开始
    cardNum: 1,
    cardTotal: 7,
    //设置横向滚动条位置
    scrollLeft: 0,//320*(n-1)-27.5,// n 第几个卡片
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
    //deltaX 获取方向和速度
    if (e.detail.deltaX > 0) {
      //向右滑动
      this.setData({ direction: 1 })
    } else if (e.detail.deltaX < 0) {
      //向左滑动
      this.setData({ direction: -1 })
    }
  },

  //手指触摸动作开始
  onTouchstart: function () {
    console.log('start')
  },

  //手指触摸动作结束
  onTouchend: function () {
    if (this.data.direction > 0 && this.data.cardNum > 1) {
      //向右滑动
      this.setData({
        scrollLeft: 320 * ((this.data.cardNum - 1) - 1) - 27.5,
        cardNum: this.data.cardNum - 1
      })
    } else if (this.data.direction < 0 && this.data.cardNum < this.data.cardTotal) {
      //向左滑动
      this.setData({
        scrollLeft: 320 * ((this.data.cardNum + 1) - 1) - 27.5,
        cardNum: this.data.cardNum + 1
      })
    }
  },

  //滚动到顶部/左边
  onLeft: function (e) {
    this.setData({
      scrollLeft: 320 * (1 - 1) - 27.5,
      cardNum: 1
    })
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