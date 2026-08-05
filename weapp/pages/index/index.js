Page({
  data: {
    // 网页已部署到 GitHub Pages
    // 注意：需要在小程序后台配置业务域名 litostar.github.io
    webUrl: 'https://litostar.github.io/wordbook/'
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
