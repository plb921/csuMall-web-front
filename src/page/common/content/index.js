require('./index.css');

var nowKey = 1;
$('.carousel_img[name=1]').show();
$('.icon i[name=1]').css("color", "#f00");
objTime = setInterval(Carousel,2500);

function Carousel() {
	var forKey = 1;
	nowKey++;
	//img标签
	$('.carousel_img').each(function(){
		//如果已显示
		if (!$(this).is(":hidden") && (nowKey-1) == forKey) {
			if (nowKey == 6) {
				nowKey = 1;
				$('.carousel_img[name=1]').fadeIn(800);
				console.log(nowKey);
			}else{
				$(this).next('img').fadeIn(800);
			}
			$(this).fadeOut(800);
		}
		forKey++;
	});
	//下面红点跟着幻灯片动
	if (nowKey == 1) {
		$(".icon i[name=1]").css("color", "#f00");
		$(".icon i[name=5]").css("color", "#fff");
	}else{
		$(".icon i[name="+nowKey+"]").css("color", "#f00");
		$(".icon i[name="+(nowKey-1)+"]").css("color", "#fff");
	}
}