import React from 'react';
import CSSTransitionGroup from 'react-transition-group';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';

export class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: 0,
        }
    }

    handleClick (i) {
        // change panel
        let newPosition = (i - 1) * -100; 
        newPosition += '%';
        this.setState({
            position: newPosition,
        });
    }

    render () {
        return (
            <div className="carousel">
                <PanelContainer 
                    position={this.state.position}/> 
                <Menu onClick={(i) => this.handleClick(i)}/>
            </div> 
        );
    };
}