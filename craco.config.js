const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Pages': path.resolve(__dirname, 'src/pages'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Styles': path.resolve(__dirname, 'src/styles'),
            '@Hooks': path.resolve(__dirname, 'src/hooks'),
            '@Firebase': path.resolve(__dirname, 'src/firebase')
        },
    },
};
