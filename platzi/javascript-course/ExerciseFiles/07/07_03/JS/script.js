const CTA = document.querySelector(".cta a"); // Button
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

// we can catch the event object as a param (e). In this case the event
// is a clicked link
function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.onclick = reveal; // without the parenthesis we make sure the script doesn't run
// when it loads
