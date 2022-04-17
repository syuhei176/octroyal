import { ImageSource } from "excalibur";
import player from "./images/player.png"; // for parcelv2 this is configured in the .parcelrc

let Resources = {
  Player: new ImageSource(player)
};

export { Resources };