export default {
  title: '个人博客title',
  description: '个人博客简要描述',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: '/star.png',

    nav: [
      { text: 'Guide', link: '/getting-started' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'something',
        collapsible: true,
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' }
                  ]
      }
    ]


  }




}
