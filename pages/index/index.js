// pages/index-2/index-2.js
//     "navigationStyle":"custom" json 取消window栏
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  Stadiumsituation:function(){
    wx.navigateTo({
      url: '../index/Stadiumsituation/Stadiumsituation',
    })
  },

  shopping:function(){
    wx.navigateTo({
      url: '../index/shopping/index/index',
    })
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


  // 球场动态按钮
  onCourtDynamics: function(e){
    
  },

  //球场预约按钮
  onCourtReservation: function(e){

  },  

  //商城
  onShoppingMall: function(e){

  },

  //介绍
  onIntroduce: function(e){

  },

  //匹配
  onMatch: function(e){
    
  }
})