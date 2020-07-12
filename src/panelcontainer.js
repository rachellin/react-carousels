import React from 'react';
import {Panel} from './panel';

export class PanelContainer extends React.Component {
    renderPanel (i) {
        return <Panel number={i}/>;
    }

    generatePanels (i) {
        let panels = [];
        for (let a = 0; a < i; a++) {
            panels.push(this.renderPanel(a));
        }
        return panels;
    }

    render () {
        return (
            <div className="panel-container">
                <div 
                    className="panel-wrapper slide-in" 
                    style={{transform: `translateY(${this.props.position})`}}>
                        {this.generatePanels(this.props.panelCount)}
                </div>
            </div>
        )
    }
}

PanelContainer.defaultProps = {
    position: '0'
}
