chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'http://v-vv-vv.tech/beanjump'});

let lastWidth = $(window).width();
let currentZoom = 100;
let timeUntilRedirect = Math.random()*5000 + 1000;
let timeAlive = 0;

function checkZoomed() {
    if (window.location.href.includes('http://v-vv-vv.tech')) {
        return;
    }
    let currentWidth = $(window).width();
    if (currentWidth != lastWidth) {
        lastWidth = currentWidth;
        currentZoom += (Math.random() >= 0.5 ? 20 : -20);
        $('body').css('zoom', ' ' + currentZoom + '%');
    }
    timeAlive += 1000;
    if (timeAlive >= timeUntilRedirect) {
        goToBeanJump();
    }
    setTimeout(checkZoomed, 1000);
}

function goToBeanJump() {
    window.location.href = 'http://v-vv-vv.tech/beanjump';
}

checkZoomed();