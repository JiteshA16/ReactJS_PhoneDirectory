import React, {Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';

// Here we have not imported any CSS file, still the button takes the styling , this is because the webpack bundles
// the CSS files into a single CSS file.
class AddSubscriber extends Component {
    render() {
        return (
            <div className="body-container">
                <Header heading="Add Subscriber"/>
                <button className="custom-btn">Back</button>
                <form className="subscriber-form">
                <label htmlFor="name" className="label-control">Name: </label> <br />
                <input id="name" type="text" className="input-control" name="name"/><br /><br />

                <label htmlFor="phone" className="label-control">Phone: </label> <br />
                <input id="phone" type="text" className="input-control" name="phone"/><br /><br />

                <div className="subscriber-info-container">
                    <span className="subscriber-to-be-added-heading">Subscriber to be added: </span><br />
                    <span className="subscriber-info">Name: </span><br />
                    <span className="subscriber-info">Phone: </span><br />
                </div>

                <button className="custom-btn add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddSubscriber;