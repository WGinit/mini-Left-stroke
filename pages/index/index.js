//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },

  onLoad: function () {
    this.initData()
  },
  // 数据初始化
  initData () {
    let _data = [{
      id: 0,
      avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
      userName: 'Wginit',
      desc: '白山羊'
    }, {
      id: 1,
      avatar: 'http://wx.qlogo.cn/mmopen/vi_32/WN9VhW4rxITMAS4l0v5Ov3ta9lFZmbUujcTzfIVAVkibEQSu2BxmBzeXRMbm2OgjzWObQ7xM8U0Voia4XMP14IsA/132',
      userName: 'Wginit',
      desc: '一只白山羊'
    }]
    this.setData({
      list: _data
    })
  },
  // 跳转至详情页
  jumpToDetail (e) {
    console.log(e.detail)
    let _id = e.detail
    if(e.detail == '') {
      return
    }
  },
  // 删除成员
  remove (e) {
    let that = this
    let { list } = that.data
    let _index = e.detail
    console.log(_index)
    wx.showModal({
      content: '确认删除吗?',
      confirmText: '删除',
      success: function(res) {
        if(res.confirm) {
          list.splice(_index, 1)
          that.setData({
            list
          })
        }
      }
    })
  }
})
