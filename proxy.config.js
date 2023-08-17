const proxy_config = [
  {
     context: ['/api'],
     target: 'http://localhost:8080',
     secure: false,
     logLevel: 'debug',
     pathRewrite: {'^/api':''}


}
];
module.exports = proxy_config;
