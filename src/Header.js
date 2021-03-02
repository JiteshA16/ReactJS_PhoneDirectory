//import React, { Component } from 'react';
import React from 'react';
import './Header.css';

/* This is functional component */
const Header = function () {
    /* Moving style as constant object */
    //const headerStyle = { textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase' };
    
    return (
        /*  
        // Inline styling : Directly writing style alongside JSX

            <div className="header" style={{textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'}}>
            */

        <div className="header">
            Phone Directory
        </div>
    )
}

/* This is class component
class Header extends Component {
    render() {
        return (
            <div className="header">
                Phone Directory
            </div>
        )
    }
}
*/

export default Header;