let elems = document.getElementsByClassName('modal_wr');
let click = document.getElementsByClassName("close");
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}
function check() {
    for (i = 0; i < elems.length; i++) {
        elems[i].style.opacity = 1;
        elems[i].style.visibility = 'visible';
    }
    disableScrolling();
}
window.onload = () => {
    num_online.innerHTML = randomInteger(132, 200);
    num_last.innerHTML = randomInteger(132, 200);
    check();
}
let output = () => {
    setTimeout(() => {
        num_online.innerHTML = randomInteger(0, 200);
        num_last.innerHTML = randomInteger(0, 100);
    }, 7000)
}
(async () => {
    await output();
})