//搜索ui-search 定义
$ . fn. UiSearch =function(){
	var ui=$(this);
	$('.ui-search-selected', ui).on('click',function( ){
		$('.ui-search-selected-list').show( );
		return false;
	});
	$('.ui-search-selected-list a',ui).on('click',function( ){
		$('.ui-search-selected').text($(this).text( ) );
		$('.ui-search-selected-list').hide( );
		return false;
	});

	$('body').on('click',function( ){
		$('.ui-search-selected-list').hide();
	});
}
//ui-tab定规
/**
 * @param {string} tabs  TAB组件，的所有选项卡，item
 * @param {string} cons TAB组件，的内容区域，所有 item
 * @param {string} focus_prefix 选项卡高亮样式前缀，可选
 * 
 */
$.fn.UiTab  = function(tabs,cons,focus_prefix){

	var ui = $(this);
	var tabs = $(tabs,ui);
	var cons = $(cons,ui);
	var focus_prefix = focus_prefix || '';


	tabs.on('click',function(){
		var index = $(this) .index();
		
		tabs.removeClass(focus_prefix+'item_focus').eq(index) .addClass(focus_prefix+"item_focus");
		cons.hide() .eq(index) .show();
		return false;
	});
}; 
//ui-backTop
$.fn.UiBackTop = function(){
	var ui=$(this);
	var el=$('<a  class="ui-backTop" herf="#0"></a>');
	ui.append(el);

	var windowHeight = $(window) .height();
	$(window).on('scroll',function(){
		var top= $('body') .scrollTop( );
		if(top>windowHeight){
			el.show();
		}else{
			el.hide();
		}
	});
	el.on('click',function(){
		$(window).scrollTop(0);
	})
}
//ui-slider
//左右箭头能控制翻页
//翻页时进度点要联动进行focus
//翻到第三页的时候下一页回到第一页，翻到第一页的时候同理
//进度点在点击的时候需要切换到对应的页面
//没有进度点点击时翻页需要自动滚动
//滚动过程中，屏蔽其他操作（自动滚动，左右翻页，进度点点击）
//
$.fn.Uislider= function(){
	var ui=$(this);
	var item = $('.ui-slider-wrap .item',ui);
	var btn_prev $('.ui')

}
//页面的脚本逻辑
$(function () {
	$('.ui-search') .UiSearch();

	$('.content-tab').UiTab('.caption > .item ' , '.block > .item');
	$('.content-tab .block .item').UiTab('.block-caption > a ' , '.block-wrap','block-capiton-');
	
	$('body') .UiBackTop();

	$('.ui-slider') .Uislider();
});