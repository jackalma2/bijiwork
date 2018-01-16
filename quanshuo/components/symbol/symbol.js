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
  }
})
