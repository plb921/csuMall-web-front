var _common_util = require('util/common_util.js');

var _cart_service = {
    getCartCount : function(resolve, reject){
        _common_util.request({
            url     : _common_util.getServerURL('cart/getCartCount'),
            success : resolve,
            error   : reject
        });
    }
};

module.exports = _cart_service;