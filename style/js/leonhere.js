function baidu_share(){
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	try{
		if(window._bd_share_main!=null){
			window._bd_share_main.init();
		}
	}catch(E){}	
}
function pajx_loadDuodsuo(){
	var dus=$(".ds-thread");
	if($(dus).length==1){
		var el = document.createElement('div');
		el.setAttribute('data-thread-key',$(dus).attr("data-thread-key"));//必选参数
		el.setAttribute('data-url',$(dus).attr("data-url"));
		DUOSHUO.EmbedThread(el);
		$(dus).html(el);
    }
}
function start_pajx(){
	$(document).pjax('.header a,.container a,#divSearchPanel input', '.container', {fragment:'.container', timeout:1500});
	$(document).on('submit', '#divSearchPanel form', function (event) {$.pjax.submit(event, '.main', {fragment:'.main', timeout:6000});});
    $(document).on('pjax:send', function() {
		$('body').append('<div class="loading"></div>');
		start_slides();		
		$('.main').fadeTo(200,0.0);		 
	});	
    $(document).on('pjax:complete', function() {
		$('.loading').remove();
		baidu_share();
		$('.main').fadeTo(500,1);
		start_slides();
		pajx_loadDuodsuo();
		$('.post .entry img').attr('height','auto');
		$('.post .entry img').css('height','auto');
	});
}
$(function(){		
	$(window).scroll(function(){
		var $top = $(window).scrollTop();
		if($top > 0){
			$('.header').addClass('fixed');
			$('.site-header').addClass('fixed');
		}else{
			$('.header').removeClass('fixed');
			$('.site-header').removeClass('fixed');	
		}
		var $sideH = $('.sidebar').height() + $('.sidebar').offset().top;
		var $scrollT = $top + $('#scroll').height();
		var $footT = $('.footer').offset().top;
		if($top > $sideH){
			if($scrollT > $footT){
				$('#scroll').addClass('stop').removeClass('scroll');
			}else{
				$('#scroll').addClass('scroll').removeClass('stop');
			}
		}else{
			$('#scroll').removeClass('scroll').removeClass('stop');
		}	
	});
	$('.widget ul.hot-post li:last-child,#divComments ul li:last-child').css({'paddingBottom':'0','borderBottomWidth':'0'});
	$('.post .search-result p a:first-child').css('fontWeight','bold');
	$('.loop-entry').hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	});
	$('.site-header').after('<nav class="mobile-nav"></nav>');
	$('.header .logo').after('<div class="btn"><i class="icon-th-large"></i></div>');
	$('.nav ul li').hover(function(){
		$(this).children('ul').show();
	},function(){
		$(this).find('ul').hide();
	});
	$('.nav .menu li ul').prepend('<span class="arrow-top"></span>');
	$('.nav .menu li ul').before(' <i class="icon-angle-down"></i>');
	$('.nav .menu').clone(false).appendTo('.mobile-nav');	
	$('.header .btn').click(function(){
		$('.mobile-nav').slideToggle('fast');
		$('html,body').animate({scrollTop:0},500);
	});
	$(window).resize(function(){	
		var $body = $('body').width();
		if($body > 900){
			$('.mobile-nav').slideUp('fast');			
		}
	});
	$('.commentlist ol li ol:odd()').css('backgroundColor','#fff');
	$('.backtop a').click(function(){
		$('html,body').animate({scrollTop:0},500);
	});
	$('.post .entry img').attr('height','auto');
	$('.post .entry img').css('height','auto');
});
zbp.plugin.unbind("comment.reply", "system");
zbp.plugin.on("comment.reply", "start", function(id) {
	var i = id;
	$("#inpRevID").val(i);
	var frm = $('#comment'),
		cancel = $("#cancel-reply");

	frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
	$('#AjaxComment' + i).before(frm);

	cancel.show().click(function() {
		var temp = $('#temp-frm');
		$("#inpRevID").val(0);
		if (!temp.length || !frm.length) return;
		temp.before(frm);
		temp.remove();
		$(this).hide();
		frm.removeClass("reply-frm");
		return false;
	});
	try {
		$('#txaArticle').focus();
	} catch (e) {}
	return false;
});

zbp.plugin.on("comment.get", "start", function (logid, page) {
	$('span.commentspage').html("Waiting...");
	$.get(bloghost + "zb_system/cmd.php?act=getcmt&postid=" + logid + "&page=" + page, function(data) {
		$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();
		$('#AjaxCommentEnd').before(data);
		$("#cancel-reply").click();
	});
})

zbp.plugin.on("comment.postsuccess", "start", function () {
	$("#cancel-reply").click();
});