import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Footer  extends Component{
    render(){
        return(
            <footer>
                <Link activeClassName="contact" to="/contact">Contact</Link>
            </footer>
        )
    }
}

