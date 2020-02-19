// let firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

chrome.runtime.sendMessage({'message': 'open_new_tab', 'url': 'http://v-vv-vv.tech/beanjump'});