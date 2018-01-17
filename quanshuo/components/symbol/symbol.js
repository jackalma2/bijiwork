// components/symbol/symbol.js
Component({
  /**
   * 组件的属性列表
   * 组件的属性值将用于组件wxml的渲染，属性值也可以有外部组件传入
   */
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    moveStartX: 0, //起始位置
    moveSendBtnLeft: 0, //发送按钮的left属性
    moveEndX: 0, //结束位置
    screenWidth: 0, //屏幕宽度
    moveable: true, //是否可滑动
    disabled: true,//验证码输入框是否可用,
    SendBtnColor: "#7f7f7f" //滑动按钮颜色
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openCard: function(e) {      
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },   
  },

  //   开始移动
    moveSendBtnStart: function (e) {
    if (!this.data.moveable) {
      return;
    }
    console.log("start");
    console.log(e);
    this.setData({
      moveStartX: e.changedTouches["0"].clientX
    })
  },
  //移动发送按钮
  moveSendBtn: function (e) {
    if (!this.data.moveable) {
      return;
    }
    var that = this;
    // console.log(e.touches[0]);
    var left = ((e.touches[0].clientX - that.data.moveStartX) / (that.data.screenWidth / 750))
    console.log(left)
    if (left <= 275.5) {
      this.setData({
        moveSendBtnLeft: left
      })
    } else {

      this.setData({
        moveSendBtnLeft: 275.5
      })
    }
  },
  // 结束移动
  moveSendBtnEnd: function (e) {
    console.log("end");
    var that = this;
    var left = ((e.changedTouches[0].clientX - that.data.moveStartX) / (that.data.screenWidth / 750))
    console.log(left);
    if (left < 275.5) {
      for (let i = left; i >= 0; i--) {

        that.setData({
          moveSendBtnLeft: i
        })
      }
    } else {
      that.setData({
        moveEndX: e.changedTouches[0].clientX,
        moveable: false,
        disabled: false,
        SendBtnColor: "#289adc"
      })
    }
  }

})
