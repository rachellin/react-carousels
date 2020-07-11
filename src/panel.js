import React from 'react';

export class Panel extends React.Component {
    render () {
        return <div className="panel">panel {this.props.number}</div>
    }
}