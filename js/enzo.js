function fadeHero(percentage) {
    var hero = document.getElementById("hero");
    hero.style.opacity="0.5";
}

function scrollAlpha() {
    var object = document.getElementById("hero");
    var screenPosition = object.getBoundingClientRect();
    var amountHidden = Math.max(0, screenPosition.bottom - window.innerHeight);
    var percentHidden = amountHidden / object.height;
    object.style.opacity = 1 - percentHidden;
    // var bottom_of_window = window.scrollTop() + window.height();
    // console.log(bottom_of_window);
    // if(bottom_of_window > bottom_of_object) {
    //     object.animate({'opacity': '1'}, 500);
    // }
}
window.onload = fadeHero; 
window.onscroll = scrollAlpha;
