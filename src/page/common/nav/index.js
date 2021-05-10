require('./index.css');
var _common_util = require('util/common_util.js');
var _userService = require('service/user_service.js');
var _cartService = require('service/cart_service.js');

var nav = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartInfo();
        return this;
    },
    bindEvent : function(){
        $('.js-login').click(function(){
            _common_util.doLogin();
        });
        $('.js-register').click(function(){
            window.location.href = "./register.html?redirect=" + encodeURIComponent(window.location.href);
        });
        $('.js-logout').click(function(){
            _userService.logout(
                function(res){
                    window.location.reload();
                },
                function(errMsg){
                    _common_util.errorTips(errMsg);
                }
            );
        });
    },
    loadUserInfo : function(){
        _userService.checkLogin(
            function(res){
                $('.user.not-login').hide().sibling('.user.login').show().find('username').text(res.username);
            },
            function(errMsg){
                // do nothing
            }
        );
    },
    loadCartInfo : function(){
        _cartService.getCartCount(
            function(res){
                $('.cart-count').text(res || 0);
            },
            function(errMsg){
                $('.cart-count').text(0);
            }
        );
    }

};

module.exports = nav.init();