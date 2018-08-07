function SaveMoment() {

    var appendixTitle = "screenshot.png";

    var title;

    var headerEls = document.querySelectorAll("h1.title");

    function SetTitle() {
        if (headerEls.length > 0) {
            title = headerEls[0].innerText.trim();
            return true;
        } else {
            return false;
        }
    }

    if (SetTitle() == false) {
        headerEls = document.querySelectorAll("h1.watch-title-container");

        if (SetTitle() == false)
            title = '';
    }

    var player = document.getElementsByClassName("video-stream")[0];

    var time = player.currentTime;

    title += " ";

    let minutes = Math.floor(time / 60)

    time = Math.floor(time - (minutes * 60));

    if (minutes > 60) {
        let hours = Math.floor(minutes / 60)
        minutes -= hours * 60;
        title += hours + "-";
    }

    title += minutes + "-" + time;

    title += " " + appendixTitle;

    var canvas = document.createElement("canvas");
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;
    canvas.getContext('2d').drawImage(player, 0, 0, canvas.width, canvas.height);

    var downloadLink = document.createElement("a");
    downloadLink.download = title;

    canvas.toBlob(function(blob) {
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.click();
    }, 'image/png');
}

function RenderSaveMomentButton() {
    var ytpRightControls = document.getElementsByClassName("ytp-right-controls")[0];
    if (ytpRightControls) {
        ytpRightControls.prepend(saveMomentButton);
    }
}

var saveMomentButton = document.createElement("button");
saveMomentButton.className = "saveMomentButton ytp-button";
saveMomentButton.style.width = "auto";
saveMomentButton.style.color = "white";
saveMomentButton.style.font = 'Roboto, medium, sans-serif';
saveMomentButton.style.fontWeight = '12px';
saveMomentButton.innerHTML = chrome.i18n.getMessage('title');
saveMomentButton.style.padding = '1px';
saveMomentButton.style.cssFloat = "left";
saveMomentButton.onclick = SaveMoment;

RenderSaveMomentButton();