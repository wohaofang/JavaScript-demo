//index.js
// 获取应用实例
var app = getApp()
let data1 = {
  motto: 'Hello World',
  userInfo: {},
  name:'丁铭'
}
Page({
  data: data1,
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(that.userInfo)
    })
  },
  click1:function(e){

    this.setData({
      name: '高娟'
    })

    console.log(111)
  }
})
