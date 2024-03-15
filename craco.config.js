const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Pages': path.resolve(__dirname, 'src/pages'),
            '@Firebase': path.resolve(__dirname, 'src/firebase')
        },
    },
};
