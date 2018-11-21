import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  }

  render() {
    return (
      <div className="App">
        <h1>What should you eat today?</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
