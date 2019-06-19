$(function(){
    $(window).scroll();
    var contents = $('main > section'),
        menu = $('.main_header_bottom li');
	
	menu.click(function(e){
		e.preventDefault();
		//menu.removeClass('on');
		//$(this).addClass('on').siblings().removeClass('on');
		var idx = $(this).index();
		var section = contents.eq(idx);
		var tt = section.offset().top - 120;
		//console.log(tt);
        $('html,body').animate({scrollTop:tt});
	});//click
    
    var mainSlider = $('.main_slider').bxSlider({
        auto:true,
        controls:false,
        pause: 5000,
        onSliderLoad: function() {
            $(".main_slider .slide").not('.bx-clone').eq(0).addClass('animate');
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            $(".slide").removeClass('animate');
            $slideElement.addClass('animate');
        }
    });
    
    
    var topBtn = $('#top-btn');
    topBtn.click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        });
    });

    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        
        if(sct > 100){
            topBtn.stop().fadeIn();
        } else{
            topBtn.stop().fadeOut();
        }
    }); //윈도우에 스크롤이 생기면 할일
    
    
    
    
    //웨이포인트 부분
    $('.point01 .div1').waypoint(function () {$('.point01 .div1').addClass('on');}, {offset: '80%'});
    $('.point01 .div2').waypoint(function () {$('.point01 .div2').addClass('on');}, {offset: '80%'});
    $('.point02 .div1').waypoint(function () {$('.point02 .div1').addClass('on');}, {offset: '80%'});
    $('.point02 .div2').waypoint(function () {$('.point02 .div2').addClass('on');}, {offset: '80%'});
    $('.point03 .div1').waypoint(function () {$('.point03 .div1').addClass('on');}, {offset: '80%'});
    $('.point03 .div2').waypoint(function () {$('.point03 .div2').addClass('on');}, {offset: '80%'});
    $('.point04 .div1').waypoint(function () {$('.point04 .div1').addClass('on');}, {offset: '80%'});
    $('.point04 .div2').waypoint(function () {$('.point04 .div2').addClass('on');}, {offset: '80%'});
    $('.point05 .div1').waypoint(function () {$('.point05 .div1').addClass('on');}, {offset: '80%'});
    $('.point05 .div2').waypoint(function () {$('.point05 .div2').addClass('on');}, {offset: '80%'});
    $('.point06 .div1').waypoint(function () {$('.point06 .div1').addClass('on');}, {offset: '80%'});
    $('.point07 .div1').waypoint(function () {$('.point07 .div1').addClass('on');}, {offset: '80%'});
    $('.point08 .div1').waypoint(function () {$('.point08 .div1').addClass('on');}, {offset: '80%'});
    
    
    $('.top_banner .close').click(function(e){
        e.preventDefault();
        $('.top_banner').hide();
        
    });
    
    $('a.colorBox').colorbox({
        opacity: 0.7,
        rel: 'group1',
        width: '100%',
        height:800,
        maxWidth: 1200
    });
    $('.quick li').click(function(){
        if($(this).hasClass('link_1')){menu.eq(7).click();}
        if($(this).hasClass('link_6')){menu.eq(6).click();}
        if($(this).hasClass('link_8')){$('html,body').animate({scrollTop:0});}
    });
    
    
    $('[name="extra_vars2[]"]').eq(0).val('010');
    $('[name="extra_vars4[]"]').eq(0).attr('checked','checked');
    
    $(document).mouseup(function(e){
        var popContainer = $('#addon-popup-layer');
        if(popContainer.has(e.target).length === 0)
            popContainer.hide();
    });//레이어 팝업 바깥은 누르면 사라지는 기능
    
    
    var privacyPop = $('.privacy-pop');
    privacyPop.click(function(){
        $(this).hide();
    });
    $('.privacy-close').click(function(){
        privacyPop.hide();
    });
    $('.see').click(function(e){
        e.preventDefault();
        privacyPop.show();
    });
    
    
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new daum.maps.LatLng(37.432723389425995, 127.12943939923177), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new daum.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다 
    var markerPosition = new daum.maps.LatLng(37.432723389425995, 127.12943939923177); 

    // 마커를 생성합니다
    var marker = new daum.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">정은치과<br><a href="http://kko.to/kB5wl9Bjj" style="color:blue" target="_blank">큰지도보기</a> <a href="http://kko.to/mEV1l9B0j" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new daum.maps.LatLng(37.369762, 126.936832); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new daum.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
    
    
    
    
});