var _common_util = require('util/common_util.js');

var _user_service = {
    logout : function(resolve, reject){
        _common_util.request({
            url     : _common_util.getServerURL('user/logout'),
            data    : userinfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    checkLogin : function(resolve, reject){
        _common_util.request({
            url     : _common_util.getServerURL('user/getInfo'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    }
};

module.exports = _user_service;