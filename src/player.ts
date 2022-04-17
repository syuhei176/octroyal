import { Actor, Color, Engine, Input, vec } from "excalibur";
import { Resources } from "./resources";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 100,
      height: 100
    });
  }

  onInitialize() {
    this.graphics.add(Resources.Player.toSprite());
    this.on('pointerup', () => {
      alert('yo');
    });
  }

  update(engine: Engine) {
    if (
      engine.input.keyboard.isHeld(Input.Keys.D) ||
      engine.input.keyboard.isHeld(Input.Keys.Right)
    ) {
      this.vel.x = 10
    }

  }
}