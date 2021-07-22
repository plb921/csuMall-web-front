var Hogan = require('hogan.js');

var config = {
    serverHost : 'http://localhost:8080/'
};

var _common_util = {
    request : function(param){
        var _this = this;
        $.ajax({
            type : param.method || 'GET',
            url : param.url || '',
            dataType : param.type || 'json',
            data : param.data || '',
            success : function(res){
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data, res.msg);
                }
                else if(1 === res.status){
                    typeof param.error === 'function' && param.error(res.msg);
                }
                else if(10 === res.status){
                    _this.doLogin();
                }
            },
            error : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        });        
    },
    doLogin : function(){
        window.location.href = './view/login.html?redirect=' + encodeURIComponent(window.location.href);
    },
    getServerURL : function(path){
        return config.serverHost + path;
    },
    successTips : function(msg){
        alert(msg || "操作成功");
    },
    errorTips : function(errMsg){
        alert(errMsg || "操作失败");
    },
    goHome : function(){
        window.location.href = './index.html'; 
    },
    getURLparam : function(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    renderHtml : function(htmlTemplate, data){
        var template = Hogan.compile(htmlTemplate);
        var result = template.render(data);
        return result;
    }
};

module.exports = _common_util;