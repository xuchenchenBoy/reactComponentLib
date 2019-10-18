const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docz-button-mdx": hot(preferDefault(require("E:\\assets\\leaf\\docz\\button.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\assets\\leaf\\.docz\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("E:\\assets\\leaf\\.docz\\src\\pages\\404.js")))
}

