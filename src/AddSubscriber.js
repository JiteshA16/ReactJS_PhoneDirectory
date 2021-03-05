import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import {Link} from 'react-router-dom';

// Here we have not imported any CSS file, still the button takes the styling , this is because the webpack bundles
// the CSS files into a single CSS file.
class AddSubscriber extends Component {

    constructor() {
        super();
        this.state = {
            id : 0,
            name :'',
            phone : ''
        }
        console.log(this.state);
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0, name:'', phone:''});
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="body-container">
                <Header heading="Add Subscriber"/>
                
                <Link to="/">
                <button className="custom-btn">Back</button>
                </Link>

                <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                <label htmlFor="name" className="label-control">Name: </label> <br />
                <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}/><br /><br />

                <label htmlFor="phone" className="label-control">Phone: </label> <br />
                <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler} /><br /><br />

                <div className="subscriber-info-container">
                    <span className="subscriber-to-be-added-heading">Subscriber to be added: </span><br />
                    <span className="subscriber-info">Name: {this.state.name}</span><br />
                    <span className="subscriber-info">Phone: {this.state.phone}</span><br />
                </div>

                <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddSubscriber;