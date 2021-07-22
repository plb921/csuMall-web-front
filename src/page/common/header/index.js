var _common_util = require('util/common_util.js');
require('./index.css');

var header = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    bindEvent : function(){
        var _this = this;
        $('#search-btn').click(function(){
            _this.searchSubmit();
        });
        $('#search-input').keyup(function(e){
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        });
    },
    onLoad :function(){
        // alert(window.location.search);
        var keyword = _common_util.getURLparam('keyword');
        // alert(keyword);
        if(keyword){
            $('#search-input').val(keyword);
        };
        
    },
    searchSubmit : function(){
        var keyword = $.trim($('#search-input').val());
        if(keyword){
            window.location.href = './view/list.html?keyword=' + keyword ;
        }else{
            alert("商品名不能为空！");
        }
    }
}

header.init();