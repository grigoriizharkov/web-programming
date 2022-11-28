let starting_time = new Date().getTime()

window.onload = function (){
    document.getElementsByClassName("footer__loading-time")[0].innerHTML =
        "Page load time is <b>" + (new Date().getTime() - starting_time) / 1000 + "</b> seconds";
}