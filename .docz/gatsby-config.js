const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Leaf',
    description: '组件库',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: 'E:\\assets\\leaf\\.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Leaf',
        description: '组件库',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'E:\\assets\\leaf',
          templates:
            'E:\\assets\\leaf\\node_modules\\docz-core\\dist\\templates',
          packageJson: 'E:\\assets\\leaf\\package.json',
          docz: 'E:\\assets\\leaf\\.docz',
          cache: 'E:\\assets\\leaf\\.docz\\.cache',
          app: 'E:\\assets\\leaf\\.docz\\app',
          appPublic: 'E:\\assets\\leaf\\.docz\\public',
          appNodeModules: 'E:\\assets\\leaf\\node_modules',
          appPackageJson: 'E:\\assets\\leaf\\package.json',
          appYarnLock: 'E:\\assets\\leaf\\node_modules\\docz-core\\yarn.lock',
          ownNodeModules:
            'E:\\assets\\leaf\\node_modules\\docz-core\\node_modules',
          gatsbyConfig: 'E:\\assets\\leaf\\gatsby-config.js',
          gatsbyBrowser: 'E:\\assets\\leaf\\gatsby-browser.js',
          gatsbyNode: 'E:\\assets\\leaf\\gatsby-node.js',
          gatsbySSR: 'E:\\assets\\leaf\\gatsby-ssr.js',
          importsJs: 'E:\\assets\\leaf\\.docz\\app\\imports.js',
          rootJs: 'E:\\assets\\leaf\\.docz\\app\\root.jsx',
          indexJs: 'E:\\assets\\leaf\\.docz\\app\\index.jsx',
          indexHtml: 'E:\\assets\\leaf\\.docz\\app\\index.html',
          db: 'E:\\assets\\leaf\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
