import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <p style={{fontSize: '6px', width: '80px', textAlign: 'center'}}>
    <img src="https://files.readme.io/746bce3-small-vortex_eos_white-03.png" width="80px" height="150px"/>Vortex by Christian</p>,
  project: {
    link: 'https://github.com/chericito/tech-writing-test.git',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/chericito/tech-writing-test.git',
  footer: {
    text: 'Writer: Christian Arango',
  },
}

export default config
