
const topBtn = document.getElementById("btn-top");
window.onscroll = function () {
    scrollDown();
};
function scrollDown() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
