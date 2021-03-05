
import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  /*
  constructor() {
    super();
    this.state = {
      subscribersListToShow: []
    }
  }
  */

  /* 
  Adding harcoded subscriber

  componentDidMount() {
    let newSubscriber = {
      id: 100,
      name: "Jitesh",
      phone: "8286700239"
    }
    let subscriberList = this.state.subscribersListToShow;
    subscriberList.push(newSubscriber);
    this.setState({subscribersListToShow: subscriberList});
  }
  */


  // Delete button action
  onClickDelete = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  render() {
    /*
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
    */
   
    return (
      <div className="body-container">
        <Header heading="Phone Directory" />
        <Link to="/add">
        <button className="custom-btn add-btn">Add</button>
        </Link>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          this.props.showSubscriberList.map(sub => {
            return <div className="grid-container" key={sub.id}>
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <button className="custom-btn delete-btn" onClick={this.onClickDelete.bind(this, sub.id)} style={{ marginTop: 0 }}>Delete</button>
            </div>
          })
        }
      </div>
    );
  }
}

export default ShowSubscribers;
