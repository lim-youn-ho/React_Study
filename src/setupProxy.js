// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware(['/api'],{
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};