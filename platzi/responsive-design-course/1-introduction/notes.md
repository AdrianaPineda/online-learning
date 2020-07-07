# Responsive design
Responsive design: techniques use to adapt our web applications to a vast majority of screens

## Patterns
- Mostly fluid
- Column wrap
- Layout shifter
- Tiny tweaks
- Off canvas

https://mediaqueri.es/

## New concepts
- Viewport: visible area of your browser
- Portrait - landscape: vertical - horizontal
- Mobile first: start project from the lowest resolution supported. Technically this one is better, but it depends on your use case.
- Desktop first: start project from the highest resolution supported

## Meta viewport
To avoid our site to re-scale to fit in a screen and be difficult to read we can set a tag so the site can scale according to the device size
<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

## Relative units
- Percentage: size according to the parent element
- rem: relative unit to the farthest font size specified (html or body). If we don't set a font-size, body has a default value (set by the browser)
- vw / vh: relative unit to the viewport
- em: relative unit to the closest font size specified. 
  If we specify a font size  for a certain element and we have padding/margin with ems, those paddings/margins will take the value relative to their own element font size. Example:
<nav> font-size: 16px
  <ul> font-size: 2em; 32px
    <li> font-size: 1em; 32px
      <a> Hello </a> font-size: 0.5em; 16px; padding: 2em: 32px;
    </li>
  </ul>
</nav>

## Media queries
Is a module of CSS3 that allows content to be adapted according to the device characteristics.

It is composed by a media type and one or more conditions
@media media type and (condition) {
}

Example:
@media screen and (max-width: 768px) and (min-width:480px) {
}

Media queries can be added to the head tag, in a new css styles file, or in the existing styles file:

New css file:
<!-- <link rel="stylesheet" href="css/9-media.css" media="screen and (max-width:768px)"> -->

Existing css file:
<!-- @media screen and (max-width:768px) {
  body {
    border: 10px solid green;
  }
} -->

Inside tag style in head:
<!-- <style>
  @media screen and (max-width:768px) {
    body {
      border: 10px solid blue;
    }
  }
</style> -->

Course repo: https://github.com/LeonidasEsteban/responsive-design-portafolio