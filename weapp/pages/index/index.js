Page({
  data: {
    // 把网页部署到服务器后，把这里改成你的网页地址
    // 注意：需要在小程序后台配置业务域名
    webUrl: ''
  },

  onLoad() {
    // 如果未配置网页地址，显示提示
    if (!this.data.webUrl) {
      wx.showModal({
        title: '提示',
        content: '请先把网页版部署到服务器，然后在 pages/index/index.js 中配置 webUrl，并在小程序后台添加业务域名。',
        showCancel: false
      });
    }
  }
});
