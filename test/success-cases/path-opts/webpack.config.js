var SitemapPlugin = require('../../../');

var paths = [
  {
    path: '/',
    lastMod: '2016-01-01',
    changeFreq: 'daily',
    priority: '1.0',
  },
  {
    path: '/about/',
    priority: '0.4'
  },
  {
    path: '/faq/'
  },
  '/contact/'
];

module.exports = {
  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    libraryTarget: 'umd'
  },

  plugins: [
    new SitemapPlugin('https://mysite.com', paths, {
      fileName: 'map.xml',
      priority: '0.5'
    })
  ]
};