const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:3002',
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
