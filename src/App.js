
import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class App extends Component {
  clickHandler(message) {
    alert(message);
  }

  render() {
    let subscribers = [
      {
        id: 100,
        name: "Jitesh",
        phone: "8286700239"
      },
      {
        id: 101,
        name: "Test user",
        phone: "9090909090"
      }
    ]

    return (
      <div className="body-container">
        <Header heading="Phone Directory" />
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          subscribers.map(sub => {
            return <div className="grid-container" key={sub.id}>
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"Do you want to delete the contact?")} style={{ marginTop: 0 }}>Delete</button>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
