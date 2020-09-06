import React from 'react';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';

export class VerticalCarousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: 0,
           panels: 6,
           buttonArr: Array(1).fill('skyblue'),
           panelContent: [panel1, panel2, panel3, panel4, panel5, panel6]
        }
    }

    componentDidMount () {
        this.setState({
            buttonArr: Array(this.state.panels).fill('skyblue')
        });
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
                    panelCount={this.state.panels}
                    position={this.state.position}
                    panelContent={this.state.panelContent}/> 
                <Menu 
                    buttonColor={this.state.buttonArr}
                    panelCount={this.state.panels}
                    onClick={(i) => this.handleClick(i)}/>
            </div> 
        );
    };
}

// panel content
const panel1 = 'asdfasdf';
const panel2 = 'panel deux';
const panel3 = 'trois';
const panel4 = 'quatre';
const panel5 = 'cinq';
const panel6 = 'six';