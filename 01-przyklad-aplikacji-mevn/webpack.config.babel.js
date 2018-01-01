import {resolve} from 'path';

const config = {};

config.entry = {
    app: './client/app.js'
};

config.output = {
    filename: '[name].dist.js',
    path: resolve(__dirname, 'public')
};

module.exports = config;