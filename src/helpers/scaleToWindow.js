function scaleToWindow(canvas, backgroundColor) {
  var scaleX, scaleY, scale, center;

  //1. Scale the canvas to the correct size
  //Figure out the scale amount on each axis
  scaleX = window.innerWidth / canvas.offsetWidth;
  scaleY = window.innerHeight / canvas.offsetHeight;

  //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
  scale = Math.min(scaleX, scaleY);
  canvas.style.transformOrigin = '0 0';
  canvas.style.transform = 'scale(' + scale + ')';

  //2. Center the canvas.
  //Decide whether to center the canvas vertically or horizontally.
  //Wide canvases should be centered vertically, and
  //square or tall canvases should be centered horizontally
  if (canvas.offsetWidth > canvas.offsetHeight) {
    if (canvas.offsetWidth * scale < window.innerWidth) {
      center = 'horizontally';
    } else {
      center = 'vertically';
    }
  } else {
    if (canvas.offsetHeight * scale < window.innerHeight) {
      center = 'vertically';
    } else {
      center = 'horizontally';
    }
  }

  //Center horizontally (for square or tall canvases)
  var margin;
  if (center === 'horizontally') {
    margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
    canvas.style.marginTop = 0 + 'px';
    canvas.style.marginBottom = 0 + 'px';
    canvas.style.marginLeft = margin + 'px';
    canvas.style.marginRight = margin + 'px';
  }

  //Center vertically (for wide canvases)
  if (center === 'vertically') {
    margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
    canvas.style.marginTop = margin + 'px';
    canvas.style.marginBottom = margin + 'px';
    canvas.style.marginLeft = 0 + 'px';
    canvas.style.marginRight = 0 + 'px';
  }

  //3. Remove any padding from the canvas  and body and set the canvas
  //display style to "block"
  canvas.style.paddingLeft = 0 + 'px';
  canvas.style.paddingRight = 0 + 'px';
  canvas.style.paddingTop = 0 + 'px';
  canvas.style.paddingBottom = 0 + 'px';
  canvas.style.display = 'block';

  //4. Set the color of the HTML body background
  document.body.style.backgroundColor = backgroundColor;

  //Fix some quirkiness in scaling for Safari
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      // Chrome
    } else {
      // Safari
      //canvas.style.maxHeight = "100%";
      //canvas.style.minHeight = "100%";
    }
  }

  //5. Return the `scale` value. This is important, because you'll nee this value
  //for correct hit testing between the pointer and sprites
  return scale;
}

export default scaleToWindow;

// (If you are using Pixi, supply the renderer.view as the element.)
// The optional second argument lets you set the color of the browser's background that borders the element.
// You can supply any RGB, HSLA or Hexadecimal color value, as well as the any HTML color string, like “blue” or “red”.
// (If you don't supply this optional color, the border will be set to a neutral dark gray: #2C3539.)

// The scaleToWindow function also returns the scale value that the element is scaled to. You can find it like this:

// var scale = scaleToWindow(renderer.view);
// This will give you a number, like 1.98046875, which tells you the ratio by which the element was scaled.
// This might be an important value to know if you need to convert browser pixel coordinates to the scaled pixel
// values of the element. For example, if you have a pointer object which tracks the mouse's position in the browser,
//  you might need to convert those pixel positions to the scaled element coordinates to find out if the mouse is
//  touching something in the element. Some general code like this will do the trick:

// pointer.x = pointer.x / scale;
// pointer.y = pointer.y / scale;

// Optionally, you might also want the element to rescale itself every time the size of the browser
// window is changed. If that’s the case, call scaleToWindow inside a window event listener:

// window.addEventListener("resize", function(event){
//   scaleToWindow(anyelementElement);
// });
