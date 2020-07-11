import React from 'react';
import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';

export class Carousel extends React.Component {
    render () {
        return (
            <div className="carousel">
                <PanelContainer/>
                <Menu/>
            </div> 
        );
    };
}