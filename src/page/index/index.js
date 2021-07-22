// require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('page/common/content/index.js');
var navSide = require('page/common/nav-side/index.js');
var _common_util = require('util/common_util.js');

navSide.init({
    name : 'user-center'
});
// _common_util.request({
//     url: 'http://localhost:8080/product/list?categoryId=0',
//     success : function(res){
//         console.log(res);
//     },
//     error : function(errMsg){
//         console.log(errMsg);
//     }
// });

// console.log('this is index/index.js');