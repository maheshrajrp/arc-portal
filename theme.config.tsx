import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './components/footer'
const config: DocsThemeConfig = {
  logo: <span>The Arc</span>,
  project: {
    link: 'https://github.com/maheshrajrp/arc-portal',
  },
  primaryHue: 191,
  docsRepositoryBase: 'https://github.com/maheshrajrp/arc-portal',
  footer: {
    text: <Footer />
  },
  feedback: {
    content: 'Have Questions?'
  },
  editLink: {
    component: null
  },
  search: {
    placeholder: "Search"
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s – Arc'
    }
  }
}

export default config
