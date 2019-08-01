const withMDX = require('@zeit/next-mdx')({
  extension: /\.md?$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})