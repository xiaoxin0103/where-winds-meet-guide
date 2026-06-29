import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Where Winds Meet Guide',
  description: 'The ultimate English guide for Where Winds Meet (燕云十六声) — Sects, Builds, Puzzles, Bosses & more.',
  lang: 'en-US',
  ignoreDeadLinks: true,

  // Sitemap for search engines
  sitemap: {
    hostname: 'https://where-winds-meet-guide.pages.dev'
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph (Facebook, Discord, etc.)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Where Winds Meet Guide — Ultimate English Wiki' }],
    ['meta', { property: 'og:description', content: 'Complete guides for all 11 sects, builds, puzzles, bosses, and updates. Updated daily.' }],
    ['meta', { property: 'og:image', content: 'https://where-winds-meet-guide.pages.dev/og-image.png' }],
    ['meta', { property: 'og:site_name', content: 'Where Winds Meet Guide' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Where Winds Meet Guide — Ultimate English Wiki' }],
    ['meta', { name: 'twitter:description', content: 'Complete guides for all 11 sects, builds, puzzles, bosses, and updates.' }],
    // SEO
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://where-winds-meet-guide.pages.dev' }]
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
            { text: 'Well of Heaven (Thundercry Blade)', link: '/guides/sects/thundercry-blade' },
            { text: 'Silver Needle (Panacea Fan)', link: '/guides/sects/panacea-fan' },
            { text: 'Midnight Blades (Infernal Twinblades)', link: '/guides/sects/infernal-twinblades' },
            { text: 'Nine Mortal Ways (Mortal Rope Dart)', link: '/guides/sects/mortal-rope-dart' },
            { text: 'Velvet Shade (Vernal Umbrella)', link: '/guides/sects/velvet-shade' },
          ]
        }
      ],
      '/guides/combat/': [
        {
          text: '⚔️ Combat & Builds',
          items: [
            { text: 'Weapon Types & Martial Arts', link: '/guides/combat/weapon-types' },
            { text: 'Inner Arts System', link: '/guides/combat/inner-arts' },
            { text: 'Gear Sets & Stats', link: '/guides/combat/gear-stats' },
            { text: 'Advanced Mechanics', link: '/guides/combat/advanced-mechanics' },
          ]
        }
      ],
      '/guides/puzzles/': [
        {
          text: '🧩 Puzzle Guides',
          items: [
            { text: 'Puzzle Mystic Arts', link: '/guides/puzzles/mystic-arts' },
            { text: 'Puzzle Types & Solutions', link: '/guides/puzzles/puzzle-types' },
            { text: 'Qinghe Region Puzzles', link: '/guides/puzzles/qinghe' },
            { text: 'Kaifeng Region Puzzles', link: '/guides/puzzles/kaifeng' },
          ]
        }
      ],
      '/guides/bosses/': [
        {
          text: '👹 Boss Guides',
          items: [
            { text: 'Boss Basics & Mechanics', link: '/guides/bosses/boss-basics' },
            { text: 'Story Bosses (Ch.1-3)', link: '/guides/bosses/story-bosses' },
            { text: 'World Bosses', link: '/guides/bosses/world-bosses' },
            { text: 'Perception Forest Bosses', link: '/guides/bosses/perception-forest' },
          ]
        }
      ],
      '/guides/updates/': [
        {
          text: '🆕 Version Updates',
          items: [
            { text: 'v1.7 Patch Notes', link: '/guides/updates/patch-1-7' },
            { text: 'v1.6 Guide (Qinchuan)', link: '/guides/updates/patch-1-6' },
            { text: 'v1.5 Guide (Raging Tides)', link: '/guides/updates/patch-1-5' },
            { text: 'Season Roadmap', link: '/guides/updates/roadmap' },
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
    },

    // Edit link and last updated
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/xiaoxin0103/where-winds-meet-guide/edit/main/:path'
    }
  }
})
