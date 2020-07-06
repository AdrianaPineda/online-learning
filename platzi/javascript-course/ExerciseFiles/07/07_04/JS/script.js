const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// Event handlers:
CTA.onclick = reveal;
CTA.onclick = console.log("The button was clicked");
// The second event handled is taken precedence over my script handler
// If we want to bind functions to browser-level events or tie more than one
// function to an event we use a more modern approach called the event listener
// An event listener listens for an event to occur, then passes the event on to
// the specified function.

// CTA.addEventListener('click', reveal, false);
// true/false: how we want the browser to capture the event.
// false for the most specific node (the anchor)
// true for the least specific one (the document)
