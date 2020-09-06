import React from 'react';

export class Panel extends React.Component {
    render () {
        // return <div className="panel">panel {this.props.number}</div>
        return (
            <div className="panel">
                <div className="panel-content">
                    {this.props.panelContent ? this.props.panelContent : `panel ${this.props.number}`}
                </div>
            </div>
        )
    }
}

