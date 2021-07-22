require('./index.css');
require('page/common/nav/index.js');
// require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _common_util = require('util/common_util.js');

navSide.init({
    name : 'order-list'
});