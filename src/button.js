import React from 'react';

export class Button extends React.Component {
    render () {
        return <div className="button" onClick={this.props.onClick}>{this.props.number}</div>
    }
}