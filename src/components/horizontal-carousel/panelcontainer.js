import React from 'react';
import {Panel} from './panel';

import { StyledPanelContainer } from './style';

export class PanelContainer extends React.Component {
    renderPanel (i) {
        return (
            <Panel 
                panelContent={this.props.panelContent[i]}
                number={i}/>
        );
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
            <StyledPanelContainer>
                <div 
                    className="panel-wrapper slide-in" 
                    style={{transform: `translateX(${this.props.position})`}}>
                        {this.generatePanels(this.props.panelCount)}
                </div>
            </StyledPanelContainer>
        )
    }
}

PanelContainer.defaultProps = {
    position: '0'
}
