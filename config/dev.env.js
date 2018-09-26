'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API_ADDR: '"https://biz.juniuo.com/"',
    BASE_API_ADDR_TEST: '"http://b-test.juniuo.com"',
})
