const path = require('path');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'contentlayer/generated': path.resolve(__dirname, 'src/.contentlayer/generated'),
            'types': path.resolve(__dirname, 'src/types'),
        },
    },
    // style: {
    //     postcss: {
    //         plugins: [
    //             autoprefixer,
    //             tailwindcss
    //             // other postcss plugins can go here
    //         ],
    //     },
    // },
};