const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText); // create a text node to hold our alt text
captionElement.appendChild(captionText);
console.log(captionElement);

FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt", "");

// Supported by all browsers ^
// Another way, not supported by all browsers is: (no text node needed)
// `captionElement.append(altText);`
// `FEATURED.append(captionElement);`
