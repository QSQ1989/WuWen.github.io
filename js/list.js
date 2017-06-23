/**
 * Created by QQ on 2017/6/19.
 */
//滑动
var swiperLeft = new Swiper('nav', {
    //scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊
});
var swiperRight = new Swiper('.right', {
    //scrollbar: '.swiper-scrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊
});


var lis = document.querySelectorAll("nav li a");
var aHeight = lis[0].offsetHeight;
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].classList.remove("current");
        }
        this.classList.add("current");
        swiperLeft.setWrapperTransition(1000);
        swiperLeft.setWrapperTranslate(-aHeight * this.index);
    }
}

