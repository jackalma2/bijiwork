// pages/symboly/symboly.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfoList: [{
      cardUrl: 'http://www.mymoneygohome.com/Tpl/home/img/bg.png',
      cardInfo: {
        cardTitle: '你不知道的花事',
        cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
      }
    }, {
      cardUrl: 'http://od4hmzb6t.bkt.clouddn.com//banner/banner3.@3x.png',
      cardInfo: {
        cardTitle: '你不知道的花事',
        cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
      }
      }, {        
        cardUrl: 'http://od4hmzb6t.bkt.clouddn.com//banner/index/%E9%A6%96%E9%A1%B5banner1-L.png',
        cardInfo: {
          cardTitle: '你不知道的花事',
          cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
        }
    }, {      
        cardUrl: 'http://od4hmzb6t.bkt.clouddn.com//banner/index/%E9%A6%96%E9%A1%B5banner2-L.png',
      cardInfo: {
        cardTitle: '你不知道的花事',
        cardInfoMes: ['一月一送，浪漫节日送浪漫花', '一月两送，有趣节日送奇异花', '一月四送，有你在每天都是最好的节日']
      }
    }] 
  },

  //上一个
  onLast: function(e) {
    var that = this;
    setTimeout(function () {
      var cardInfoList = that.data.cardInfoList;
      var slidethis = that.data.cardInfoList.pop();
      that.data.cardInfoList.unshift(slidethis);
      that.setData({
        cardInfoList: that.data.cardInfoList,
      });
    }, 100);
  },

  //下一个
  onNext: function(e) {
    var that = this;
    setTimeout(function () {
      var cardInfoList = that.data.cardInfoList;
      var slidethis = that.data.cardInfoList.shift();
      that.data.cardInfoList.push(slidethis);
      that.setData({
        cardInfoList: that.data.cardInfoList,
      });
    }, 100);
  },
  /** 
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {

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
  
  }
})