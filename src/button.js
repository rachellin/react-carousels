import React from 'react';

export class Button extends React.Component {
    render () {
        return <div class="button" onClick={this.props.onClick}>{this.props.number}</div>
    }
}