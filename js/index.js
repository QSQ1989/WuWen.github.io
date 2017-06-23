/**
 * Created by QQ on 2017/6/16.
 */
window.onload = function () {
    changTop();
    setTim();
}

//顶部搜索栏滚动改变透明度===============================
function changTop() {
    var headerdom = document.querySelector("header");
    var bannerheight = document.querySelector(".jd-banner").offsetHeight;
    window.onscroll = function () {
        var percent = document.body.scrollTop / bannerheight;
        if (percent > 0.8) {
            percent = 0.8;
        }
        console.log(percent);
        headerdom.style.backgroundColor = "rgba(201, 21, 35," + percent + ")";
    }
}


//设置定时器===============================
function setTim() {
    var targetTime = 5 * 60 * 60;
    var timer = null;
    var lis = document.querySelectorAll(".sec-kill li");
    timer = setInterval(function () {
        targetTime--;
        if (targetTime < 0) {
            clearInterval(timer);
            alert("倒计时完了");
            return;
        }
        var hour = Math.floor(targetTime / 3600);
        var min = Math.floor(targetTime % 3600 / 60);
        var sec = targetTime % 60;
        lis[0].innerHTML = Math.floor(hour / 10);
        lis[1].innerHTML = hour % 10;
        lis[3].innerHTML = Math.floor(min / 10);
        lis[4].innerHTML = min % 10;
        lis[6].innerHTML = Math.floor(sec / 10);
        lis[7].innerHTML = sec % 10;
    }, 1)
}