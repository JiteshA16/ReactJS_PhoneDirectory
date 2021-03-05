import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscriberList : [
                {
                    id: 0,
                    name: 'Jitesh',
                    phone: '9090909090'
                },
                {
                    id: 1,
                    name: 'Ramesh',
                    phone: '8286700239'
                }
            ]
        }
    }

    // Create add subscriber handler
    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;

        // Assigning a dynamic id for new subscriber
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log('Phone directory');
        console.log(this.state.subscriberList);
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;

        subscriberList.forEach(function(subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);

        let newSubscribersList = this.state.subscriberList;
        newSubscribersList.splice(subscriberIndex,1);
        this.setState({subscriberList: newSubscribersList});
    } 

    render() {
        return(
            <Router>
                <div className="main-container">
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} showSubscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} />
                <Route exact path='/add' render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>} />
                </div>
            </Router>
        )
    }
}

export default PhoneDirectory;