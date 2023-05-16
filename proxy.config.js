const proxy_config = [
  {
     context: ['/api'],
     target: 'http://localhost:8080/acessos',
     secure: false,
     logLevel: 'debug',
     pathRewrite: {'^/api':''}


}
];
module.exports = proxy_config;
