
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
    flexDirection: 'row',
    btnLeft: true, //默认切换按钮在左边
    disabled: true,//输入框不可用,
    nameSet: '平假名',
    nameUnset: '片假名',
    data: [],
    //平假名
    hiragana: [
      ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
      ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
      ['だ', 'ぢ', 'づ', 'で', 'ど'],
      ['ば', 'び', 'ぶ', 'べ', 'ぼ'],

      ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
    ],
    //片假名
    katakana: [
      ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
      ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'],
      ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'],
      ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
      
      ['パ', 'ピ', 'プ', 'ペ', 'ポ'],     
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    openCard: function (e) {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },

    //底部平假名 片假名切换动作
    moveSetBtn: function (e) {
      if (this.data.btnLeft) {
        this.setData({
          btnLeft: false,
          flexDirection: 'row-reverse',
          nameSet: '片假名',
          nameUnset: '平假名',
          data: this.data.katakana,
        })
      } else {
        this.setData({
          btnLeft: true,
          flexDirection: 'row',
          nameSet: '平假名',
          nameUnset: '片假名',
          data: this.data.hiragana,
        })
      }
    },
  },

  //组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
  ready: function () {
    this.setData({
      data: this.data.hiragana,
    })
  }
})
