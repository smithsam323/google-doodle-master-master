// Store 3 images
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';
// http://codepen.io/manikoth/pen/RpbNEj.js
// SVG line animation
var google = $('svg').drawsvg({
  duration: 5000,
  reverse: true,
  stagger: 1000,
});
google.drawsvg('animate');
//Random Background
var max = 3;
var randNum = Math.floor(Math.random() * max);
console.log(randNum);
// Get random number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

// Display randomized images
$('#random').attr( 'src', eval('img' + numRand) );

