import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '50px' }}>
    <img src="https://files.readme.io/1cab609-vbc.png" alt="Vortex Logo" style={{ width: '75px', height: '75px' }} />
    <p style={{ fontSize: '8px', textAlign: 'center', margin: '0' }}></p>
  </div>,
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
  head: (
    <>
      <link rel="icon" type="image/png" href="https://files.readme.io/1cab609-vbc.png" />
    </>
  ),
}

export default config

