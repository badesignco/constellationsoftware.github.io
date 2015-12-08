

function scrollHero() {
    var object = document.getElementById("hero");
    var screenPosition = object.getBoundingClientRect();
    console.log(screenPosition.top);
    var amountHidden = Math.max(0, screenPosition.bottom - window.innerHeight);
    var percentHidden = amountHidden / object.height;
    //object.style.opacity = 1 - percentHidden;

    //object.height = window.innerHeight;

    if (screenPosition.top <= 0) {
        var tm = screenPosition.top * -1;
        console.log(tm);
        object.style.marginTop = tm+"px";
    }
    // var bottom_of_window = window.scrollTop() + window.height();
    // console.log(bottom_of_window);
    // if(bottom_of_window > bottom_of_object) {
    //     object.animate({'opacity': '1'}, 500);
    // }
}

window.onscroll = scrollHero;
