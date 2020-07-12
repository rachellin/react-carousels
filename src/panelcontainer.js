import React from 'react';
import {Panel} from './panel';

export class PanelContainer extends React.Component {
    renderPanels (i) {
        return <Panel number={i}/>;
    }

    render () {
        return (
            <div className="panel-container">
                <div 
                    className="panel-wrapper slide-in" 
                    style={{transform: `translateY(${this.props.position})`}}>
                        {this.renderPanels(1)}
                        {this.renderPanels(2)}
                        {this.renderPanels(3)}
                        {this.renderPanels(4)}
                </div>
            </div>
        )
    }
}

PanelContainer.defaultProps = {
    position: '0'
}
