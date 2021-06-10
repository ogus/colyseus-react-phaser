const { Room } = require('colyseus');

class GameRoom extends Room {
  constructor() {
    super();
    this.props = 0;
  }
}

module.exports = GameRoom;
