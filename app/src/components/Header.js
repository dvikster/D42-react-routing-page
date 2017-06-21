import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Header extends Component{
    render(){
        return(
                <header className="container ">
                    <div className="main-menu">
                        <Link activeClassName="active" to="/">Home</Link>
                        <Link activeClassName="active" to="/print">Print</Link>
                        <Link activeClassName="active" to="/web">Web</Link>
                        <Link activeClassName="active" to="/lost-cats">Lost cats</Link>
                    </div>
                </header>
        )
    }
}
