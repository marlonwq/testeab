import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Studies",
  description: "Site",
  srcDir: 'src',
  base: '/testeab/',

  themeConfig: {
    nav: [
      { text: 'dfadfafa', link: 'https://discord.com' },
      { text: 'teste', link: '/hidrocarbonetos' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'cgvn',
        items: [
          { text: 'Hidrocarbonetos', link: '/hidrocarbonetos' },
          { text: 'Github Profile', link: 'https://github.com/marlonwq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    ]
  }
})
