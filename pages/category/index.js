// test/test.js
var allGoods = [{
  typeId: 1,
  title: "商品名称1",
  url: "javascrip:;",
  price: 1699.3,
  img: "https://img.yzcdn.cn/vant/apple-1.jpg",
  buyNums: 32
}, {
    typeId: 1,
    title: "商品名称2",
    url: "javascrip:;",
    price: 1688.12,
    img: "https://img.yzcdn.cn/vant/apple-2.jpg",
    buyNums: 136
  }, {
    typeId: 1,
    title: "商品名称3",
    url: "javascrip:;",
    price: 6688.53,
    img: "https://img.yzcdn.cn/vant/apple-3.jpg",
    buyNums: 276
  }, {
    typeId: 2,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }, {
    typeId: 3,
    title: "商品名称2",
    url: "javascrip:;",
    price: 1688.12,
    img: "https://img.yzcdn.cn/vant/apple-2.jpg",
    buyNums: 136
  }, {
    typeId: 3,
    title: "商品名称3",
    url: "javascrip:;",
    price: 6688.53,
    img: "https://img.yzcdn.cn/vant/apple-3.jpg",
    buyNums: 276
  }, {
    typeId: 2,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }, {
    typeId: 4,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }, {
    typeId: 4,
    title: "商品名称2",
    url: "javascrip:;",
    price: 1688.12,
    img: "https://img.yzcdn.cn/vant/apple-2.jpg",
    buyNums: 136
  }, {
    typeId: 5,
    title: "商品名称3",
    url: "javascrip:;",
    price: 6688.53,
    img: "https://img.yzcdn.cn/vant/apple-3.jpg",
    buyNums: 276
  }, {
    typeId: 5,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }, {
    typeId: 6,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }, {
    typeId: 7,
    title: "商品名称2",
    url: "javascrip:;",
    price: 1688.12,
    img: "https://img.yzcdn.cn/vant/apple-2.jpg",
    buyNums: 136
  }, {
    typeId: 8,
    title: "商品名称3",
    url: "javascrip:;",
    price: 6688.53,
    img: "https://img.yzcdn.cn/vant/apple-3.jpg",
    buyNums: 276
  }, {
    typeId: 8,
    title: "商品名称4",
    url: "javascrip:;",
    price: 98.53,
    img: "https://img.yzcdn.cn/vant/apple-4.jpg",
    buyNums: 90
  }];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: 0,
    cates: [
      {
        "typeId": 1,
        "typeName": "分类1"
      }, {
        "typeId": 2,
        "typeName": "分类2"
      }, {
        "typeId": 3,
        "typeName": "分类3"
      }, {
        "typeId": 4,
        "typeName": "分类4"
      }, {
        "typeId": 5,
        "typeName": "分类5"
      }, {
        "typeId": 6,
        "typeName": "分类6"
      }, {
        "typeId": 7,
        "typeName": "分类7"
      }, {
        "typeId": 8,
        "typeName": "分类8"
      }
    ],
    newsGoods: [
    ]
  },

  //切换
  clickCate:function(e){
    this.setData({
      isActive:e.currentTarget.dataset.id
    })

    //遍历newsdata
    let s_typeId = e.currentTarget.dataset.id + 1;
    let newsGoods = allGoods;
    let typeGoods = [];
    for(let i=0 ;i<newsGoods.length;i++){
      if (newsGoods[i].typeId == s_typeId){
         typeGoods.push(newsGoods[i]);
       }
    }
    this.setData({
      newsGoods:typeGoods
    });
    //console.log(typeGoods);
    //console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      newsGoods:allGoods
    });
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