const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'contentlayer/generated': path.resolve(__dirname, 'src/.contentlayer/generated'),
            'types': path.resolve(__dirname, 'src/types'),
        },
    },
};