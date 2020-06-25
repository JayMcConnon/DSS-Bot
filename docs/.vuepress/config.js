const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DSS-Bot Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2381c7' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    displayAllHeaders: true,
    lastUpdated: true,
    smoothScroll: true,
    logo: '/images/robot.png',
    nav: [
      {
        text: 'Install',
        link: 'https://discordapp.com/oauth2/authorize?client_id=720731226977075281&scope=bot&permissions=8',
      },
      {
        text: 'Get Started',
        link: '/guide/',
      },
      {
        text: 'Supported Games',
        link: '/supported/'
      },
      {
        text: 'Official Discord',
        link: 'https://discord.gg/J3ufCA2'
      },
      {
        text: 'Status',
        link: 'https://8e772e21-402f-4e97-a47f-882a3957d2c5.site.hbuptime.com/'
      },
      {
        text: 'Report an Issue',
        link: 'https://github.com/JayMcConnon/DSS-Bot/issues'
      }
    ],
    sidebar: {
      '/' : [
          '/guide/',
          '/supported/',
          '/commands/',
          '/commands/general.html',
          '/commands/serverstatus.html',
          '/commands/moderation.html',
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
