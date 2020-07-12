import React from 'react';
import {Panel} from './panel';

export class PanelContainer extends React.Component {
    renderPanels (i) {
        return <Panel number={i}/>;
    }

    render () {
        const classes = `panel-wrapper ${this.props.transition}`;
        return (
            <div className="panel-container">
                <div 
                    className={classes} 
                    style={{ 
                        transform: `translateY(${this.props.position})`}}>
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
    position: '0',
    transition: ''
}
