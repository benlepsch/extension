chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'http://v-vv-vv.tech/beanjump'});

let lastWidth = $(window).width();
let currentZoom = 100;

function checkZoomed() {
    let currentWidth = $(window).width();
    if (currentWidth != lastWidth) {
        lastWidth = currentWidth;
        currentZoom += (Math.random() >= 0.5 ? 20 : -20);
        $('body').css('zoom', ' ' + currentZoom + '%');
    }
    setInterval(checkZoomed, 100);
}

checkZoomed();