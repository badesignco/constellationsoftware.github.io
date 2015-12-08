var vid = ""
var frame = ""

window.onload = function() {
    // select video element
    vid = document.getElementById("v0");

    //var vid = $('#v0')[0]; // jquery option
    // pause video on load

    vid.play()
    vid.pause();
}




// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    vid.pause();
    sizeVid(vid, frame);
};

// refresh video frames on interval for smoother playback
setInterval(function(){
    vid.currentTime = window.pageYOffset/40;
}, 40);
