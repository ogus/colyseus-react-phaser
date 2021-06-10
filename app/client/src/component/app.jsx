import React from 'react';
import GameContainer from '../game/game-container';

export default class App extends React.Component {
  constructor() {
    super();
    this.container = React.createRef();
    this.game = new GameContainer(this.container);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Title</h1>
        </header>
        <main>
          <div ref={this.container}></div>
        </main>
      </div>
    );
  }
}
