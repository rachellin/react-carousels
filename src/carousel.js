import React from 'react';
import CSSTransitionGroup from 'react-transition-group';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';

export class Carousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: 0,
           buttonArr: Array(5).fill('skyblue')
        }
    }

    changeButtonColor (i) {
        let color;
        let buttonArr = this.state.buttonArr.slice();
        for (let a = 0; a < buttonArr.length; a++) {
            if (a == i) {
                buttonArr[a] = 'lightpink';
            } else {
                buttonArr[a] = 'skyblue';
            }
        }
        return buttonArr;
    }

    handleClick (i) {
        // change panel
        let newPosition = i * -100; 
        newPosition += '%';
        console.log(this.state.buttonArr);
        // change clicked on button color
        let newArr = this.changeButtonColor(i);
        this.setState({
            position: newPosition,
            buttonArr: newArr
        });
    }

    render () {
        return (
            <div className="carousel">
                <PanelContainer 
                    panelCount="5"
                    position={this.state.position}/> 
                <Menu 
                    buttonColor={this.state.buttonArr}
                    panelCount="5"
                    onClick={(i) => this.handleClick(i)}/>
            </div> 
        );
    };
}
