const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Firebase': path.resolve(__dirname, 'src/firebase')
        },
    },
};
