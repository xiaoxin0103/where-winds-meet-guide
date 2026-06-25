import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Where Winds Meet Guide',
  description: 'The ultimate English guide for Where Winds Meet (燕云十六声) — Sects, Builds, Puzzles, Bosses & more.',
  lang: 'en-US',
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sects', link: '/guides/sects/' },
      { text: 'Combat', link: '/guides/combat/' },
      { text: 'Puzzles', link: '/guides/puzzles/' },
      { text: 'Bosses', link: '/guides/bosses/' },
      { text: 'Updates', link: '/guides/updates/' }
    ],

    sidebar: {
      '/guides/sects/': [
        {
          text: '🏯 Sects Guide',
          items: [
            { text: 'Overview & Comparison', link: '/guides/sects/' },
            { text: 'Thundercry Blade', link: '/guides/sects/thundercry-blade' },
            { text: 'Panacea Fan', link: '/guides/sects/panacea-fan' },
            { text: 'Infernal Twinblades', link: '/guides/sects/infernal-twinblades' },
            { text: 'Mortal Rope Dart', link: '/guides/sects/mortal-rope-dart' },
            { text: 'Velvet Shade', link: '/guides/sects/velvet-shade' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Unofficial fan guide. Not affiliated with Everstone Studio or NetEase.',
      copyright: 'Copyright © 2026'
    },

    search: {
      provider: 'local'
    }
  }
})
