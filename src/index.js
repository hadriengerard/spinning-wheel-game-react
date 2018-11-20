import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

export class App extends React.Component {
  constructor() {
    super();
    this.places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      this.setState({
        selectedItem: Math.floor(Math.random() * this.places.length),
      });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const wheelVars = {
      '--nb-item': this.places.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <div className="App">
        <h1>What should you eat today?</h1>
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
            {this.places.map((place, index) => (
              <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                {place}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
