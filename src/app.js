import initialize from './cfg/init';
import * as PIXI from 'pixi.js';

// Aliases
const Loader = PIXI.Loader.shared; // PixiJS exposes a premade instance.
const Resources = Loader.resources;
const Sprite = PIXI.Sprite;
const Utils = PIXI.utils;
const Rectangle = PIXI.Rectangle;

const app = initialize();

// Add texture atlas
Loader.add('./spritesheets/hero.json').load(setup);

function setup() {
  // Load background / map

  // Load item

  // Load hero texture atlas and give it an Alias
  const heroTextures = Resources['./spritesheets/hero.json'].textures;

  // Pick one texture and create a sprite from it
  const hero = new Sprite(heroTextures['hero-down-2']);

  // Scale sprite
  hero.scale.set(3.5, 3.5);

  // Position sprite
  hero.position.set(255, 255);

  // Add sprite to the canvas
  app.stage.addChild(hero);

  // Render the stage
  app.renderer.render(app.stage);
}
