import initialize from './cfg/init';
import * as PIXI from 'pixi.js';

// Aliases
const Application = PIXI.Application;
const loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.
const resources = loader.resources;
const Sprite = PIXI.Sprite;

const app = initialize();

loader.add('hero', './spritesheets/hero.png').load(setup);

function setup() {
  // let sheet = PIXI.Loader.shared.resources['assets/spritesheet.json'].spritesheet;
  const hero = new Sprite(resources.hero.texture);
  app.stage.addChild(hero);

  // hero.visible = false;
}

// Multiple files load

// loader
//   .add("images/imageOne.png")
//   .add("images/imageTwo.png")
//   .add("images/imageThree.png")
//   .load(setup);

// loader
//   .add([
//     "images/imageOne.png",
//     "images/imageTwo.png",
//     "images/imageThree.png"
//   ])
//   .load(setup);
