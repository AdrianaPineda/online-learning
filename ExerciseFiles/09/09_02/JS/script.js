var extLinks = document.querySelectorAll('a[href^="http"]');
console.log(extLinks);

for (var i = 0; i < extLinks.length; i++) {
    console.log(extLinks[i]);
    if (!extLinks[i].hasAttribute('target')) {
        extLinks[i].setAttribute('target', '_blank');
    }
}
