import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Toggle from "./Toggle";



export default class MainLayout extends Component{
    state = {
        time: 'night'
    }

    handleClick =()=> {
        if(this.state.time === 'night') {
            this.setState({time: 'day'});
        } else {
            this.setState({time: 'night'});
        }
    }

    render(){
        return(
            <div className={this.state.time}>
                    <div className="Switch" data-time={this.state.time}>
                        <Toggle onClick={this.handleClick} time={this.state.time} />
                    </div>
                    <Header/>
                    <div className="main-content container">
                            {this.props.children}
                    </div>
                    <Footer/>
            </div>
        )
    }
}
