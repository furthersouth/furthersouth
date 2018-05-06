const config = {
  global: {
    author: 'Zach Schnackel',
    url: 'https://www.furthersouth.com',
    title: 'Further South',
  },
  metalsmith: {
    src: './src',
    built: ['./dist/assets/css/site.css', './dist/assets/js/site.js'],
  },
};

export default config;
