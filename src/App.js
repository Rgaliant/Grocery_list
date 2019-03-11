import React, { Component } from 'react';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm';


class App extends Component {
  state = {
    groceries: [
      { id: 1, name: "Milk", complete: true, },
      { id: 2, name: "Cereal", complete: false, },
      { id: 3, name: "Cheese", complete: false, },
    ]
  }
  
  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
    const { groceries } = this.state;
    const grocery = { id: this.getUniqId, name,  complete: false }
    this.setState({ groceries: [grocery, ...groceries] }); 
    }

    handleClick = (id) => {
      const { groceries } = this.state
      this.setState({
        groceries: this.state.groceries.map( grocery => {
          if (grocery.id === id) {
            return { ...grocery, complete: !grocery.complete,}
            } 
            return grocery;
          })
        })
      }

  renderGroceries = () => {
    const { groceries, } = this.state;
    return groceries.map( grocery => 
      <li key={grocery.id}>{grocery.name}</li>
    )
  }


  render() {
    const { groceries } = this.state;
    
    return (
      <div className="App">
      <h1>Grocery List</h1>
        <ul>
          <List name="Grocery List" items={this.state.groceries} groceryClick={this.handleClick} />
          <GroceryForm addItem={this.addItem} />

        </ul>
      </div>
    );
  }
}

export default App;
