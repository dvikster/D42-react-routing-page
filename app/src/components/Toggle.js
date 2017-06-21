import React, {Component} from 'react';

export default class Toggle extends Component{
    render() {
        return (
            <div onClick={this.props.onClick} data-time={this.props.time} className="Toggle">
                <div className="Button"></div>
            </div>
        )
    }
}
