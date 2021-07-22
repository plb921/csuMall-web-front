require('./index.css');

var _common_util = require('util/common_util.js');
var templateNavSide = require('./index.string');

var navSide = {
    option : {
        name : '',
        navSideList : [
            {name : 'user-center', description : '个人中心', href : './view/user-center.html'},
            {name : 'order-list', description : '我的订单', href : './view/order-list.html'},
            {name : 'password-modify', description : '修改密码', href : './view/password-modify.html'},
            {name : 'about-csumall', description : '关于CSUMall', href : './view/about-csumall.html'}
        ]
    },
    init : function(option){
        $.extend(this.option, option);
        this.renderNavSide();
    },
    renderNavSide : function(){
        for(var i=0; i < this.option.navSideList.length; i++){
            if(this.option.navSideList[i].name === this.option.name){
                this.option.navSideList[i].isActive = true;
            }
        }
        var navSideHtml = _common_util.renderHtml(templateNavSide, {navSideList : this.option.navSideList});
        $('.nav-side').html(navSideHtml);
    }
}

module.exports = navSide;