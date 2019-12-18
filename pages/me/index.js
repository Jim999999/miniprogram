// pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    s_phone : '',
    s_pwd : '',
    userInfo:{
    }
  },

//微信登录
  getUserInfos:function(e){
    let that = this;
    let users = e.detail.userInfo;
    console.log(users);
    that.setData({
      "userInfo.avatarUrl": users.avatarUrl,
      "userInfo.city": users.city,
      "userInfo.country": users.country,
      "userInfo.gender": users.gender == 1 ? '男' : '女',
      "userInfo.nickName": users.nickName ,
      "userInfo.province": users.province,
    });

    wx.setStorage({
      key: 'userInfo',
      data: that.data.userInfo,
    })

    wx.redirectTo({
      url: '/pages/me/user',
    })

  },

  toRegister(){
    wx.navigateTo({
      url: '/pages/me/register',
    })
  },
  //登录
  login:function(e){
    var  that = this;
    // console.log(e.detail.value);
    let phone = e.detail.value.name;
    let pwd = e.detail.value.passwd;
    if(phone.length == 0 || pwd.length == 0){
      wx.showToast({
        title: '账号密码错误',
        icon :'none',
        duration :2000,
      })
      return false;
    }

    let pattern = /^1[345678]\d{9}$/;
    if (!pattern.test(phone)) {
      console.log(phone);
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.getStorage({
        key: 'phone',
        success: function(res) {
           that.setData({
             s_phone : res.data
           }) 
        },
      })
      wx.getStorage({
        key: 'pwd',
        success: function (res) {
          that.setData({
            s_pwd: res.data
          })
        },
      })

      if (that.data.s_phone == phone && that.data.s_pwd == pwd){
        wx.showToast({
          title: '登录成功',
        })
        wx.redirectTo({
          url: '/pages/me/user',
        })
      }else{
        wx.showToast({
          title: '账号密码错误，登录失败',
          icon:'none',
          duration:2000,
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //如果有登录，就跳转到用户中心
    wx.getStorage({
      key: 'phone',
      success: function(res) {
        if(res.data){
          wx.redirectTo({
            url: '/pages/me/user',
          })
          return false;
        }
      },
    })
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        if (res.data) {
          wx.redirectTo({
            url: '/pages/me/user',
          })
          return false;
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.getStorage({
        key: 'phone',
        success: function(res) {
          console.log(res.data)
        },
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

  }
})