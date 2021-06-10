import Phaser from 'phaser';


export default class GameContainer {
  constructor(container) {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: container,
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 200 }
          }
      }
    });
  }
}
