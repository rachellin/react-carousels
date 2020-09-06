import React from 'react';

import { StyledPanel } from './style';

export class Panel extends React.Component {
    render () {
        // return <div className="panel">panel {this.props.number}</div>
        return (
            <StyledPanel>
                <div className="panel-content">
                    {this.props.panelContent ? this.props.panelContent : `panel ${this.props.number}`}
                </div>
            </StyledPanel>
        )
    }
}

