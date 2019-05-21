import * as PIXI from 'pixi.js';
import scaleToWindow from '../helpers/scaleToWindow';

function initialize() {
  let type = 'WebGL';
  if (!PIXI.utils.isWebGLSupported()) {
    type = 'canvas';
  }

  PIXI.utils.sayHello(type);

  // Create a Pixi Application
  const app = new PIXI.Application({
    width: 1024, // default: 800
    height: 1024, // default: 600
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1 // default: 1
  });

  // Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);

  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';
  app.renderer.autoResize = true;

  // Include scale from custom function in app object
  app.scale = scaleToWindow(app.renderer.view);

  return app;
}

export default initialize;
