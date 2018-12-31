export default {
  header: {
    logo: {
      image: 'https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png',
      title: 'Vant',
      version: '1.0.0',
      href: '#/'
    },
    nav: {
      'Vue 组件': '#/',
      '关于': '#/about',
      lang: {
        text: 'En',
        from: 'zh-CN',
        to: 'en-US'
      },
      mayun: 'https://github.com/youzan/vant'
    }
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍'
            },
            {
              path: '/quickstart',
              title: '快速上手'
            },
          ]
        }
      ]
    },
    {
      name: '组件',
      showInMobile: true,
      groups: [
        {
          groupName: '表单组件',
          list: [
            {
              path: '/checkbox',
              title: 'Checkbox 复选框'
            },
            {
              path: '/datetime-picker',
              title: 'DatetimePicker 时间选择'
            },
          ]
        },
        {
          groupName: '反馈组件',
          list: [
            {
              path: '/actionsheet',
              title: 'Actionsheet 上拉菜单'
            },
            {
              path: '/dialog',
              title: 'Dialog 弹出框'
            }
          ]
        },
      ]
    }
  ]
}