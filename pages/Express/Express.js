// pages/Express/Express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agreeStyle: "margin-top: 500px; margin-left: 20px;",
    unagreeStyle: "margin-top: 500px; margin-left: 260px;",
  },
  //事件处理函数
  agree: function (e) {
    if (e.type == "tap") {
      console.log("enter love page");
    }
  },
  unagree: function (e) {
    if (e.type == "tap") 
    {
      var top = 500;
      var left = 20+100;
1
      while ((left <= 120) && (top >= 455 && top <= 545))
      {//同意按钮范围内的不允许
        left=Math.random() * 260 + 1;  
        top = Math.random() * 500 + 1;
      }
      console.log("margin-top: " + top + "px; margin-left: " + left + "px;");
      this.setData({
        unagreeStyle: "margin-top: " + top + "px; margin-left: "+left+"px;"
      })
    }
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