//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    email: '',
    password: ''
  },
  onLoad: function() {

  },
  bindEmailInput: function(e) {
    this.setData({
      email: e.detail.value
    })
  },
  bindPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  loginEvent: function(e) {
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.hideToast()
        if (res.data.LoginStatus==1){
          wx.switchTab({
            url:'../../pages/index/index',
            success:function(res){
              console.log(switchTab);
            }

          })
        }else{
          wx.showModal({
            title:'登录失败',
            content: '请检查您填写的用户信息！',
            showCancel:false,
            success:function(res){
              // 回调函数
            }
          })
        }
        console.log(res.data)
      }
    })
  }
})