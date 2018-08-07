const url = 'https://chrome.google.com/webstore/detail/' + chrome.runtime.id;
const title = encodeURIComponent(chrome.i18n.getMessage('name'));
const summary = encodeURIComponent(chrome.i18n.getMessage('desc'));

document.getElementById("share_title").innerHTML = chrome.i18n.getMessage("name");
document.getElementById("share_text").innerHTML = chrome.i18n.getMessage("share_text");
document.getElementById("store_ref").setAttribute("href",url);

const share_tw="https://twitter.com/intent/tweet?";
var twLink = share_tw + "text=" + title + "&url=" + url;
document.getElementById("share-tw-btn").setAttribute("href",twLink);

const share_fb="http://www.facebook.com/sharer.php?s=100";
var fbLink = share_fb + "&p[url]=" + url + "&p[title]=" + title + "&p[summary]=" + summary;
document.getElementById("share-fb-btn").setAttribute("href",fbLink);

const share_vk="https://vk.com/share.php?s=100";
var vkLink = share_vk + "&url=" + url + "&title=" + title + "&summary=" + summary;
document.getElementById("share-vk-btn").setAttribute("href",vkLink);
