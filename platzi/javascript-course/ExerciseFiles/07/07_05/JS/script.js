const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();

    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooooops!" : CTA.innerHTML = "Book Now!"

    ALERT.classList.toggle("hide");
}

// Event listeners
CTA.addEventListener('click', function(e) { reveal(e, this) }, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
// Both events are happening at the same time ^
// There are no params to the reveal function. If we put "()" then the function will
// run when the script is loaded
// The second line is an anonymous function, thats why it works

// function(e) { reveal(e, this) } > why the e? e is not available inside the anonymous function,
// but it is when the function is called
// `this` refers to the object we just clicked
