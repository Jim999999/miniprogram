// pages/me/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //注册
  register:function(e){
    // console.log(e.detail.value);
    let pattern = /^1[345678]\d{9}$/;
    let phone = e.detail.value.name;
    let pwd = e.detail.value.passwd;
    let pwd2 = e.detail.value.cp_passwd;

    if (phone.length == 0 || pwd.length == 0 || pwd2.length == 0 ){
      wx.showToast({
        title: '请输入完整账号密码',
        icon: 'none',
        duration: 2000
      });
      return false;
    }

    if (!pattern.test(phone)) {
      console.log(phone);
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
        duration: 2000
      })
    } else {
      if (pwd2 !== pwd){
        wx.showToast({
          title: '密码不一致',
          icon: 'none',
          duration: 2000
        })
        return false;
      }

      wx.setStorage({
        key: 'phone',
        data: phone,
      })
      wx.setStorage({
        key: 'pwd',
        data: pwd,
        success:function(res){
          wx.showToast({
            title: '注册成功',
          })
          wx.redirectTo({
            url: '/pages/me/user',
          })
        }
      });
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