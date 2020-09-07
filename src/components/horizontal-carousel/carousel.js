import React from 'react';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';
import { Paginator } from './paginator';

import { StyledCarousel } from './style';

export class HorizontalCarousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: "0%",
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

    paginate (dir) {
        const currentPosition = this.state.position;
        let newIndex;
        if (dir == "prev") {
            newIndex = Number(currentPosition.replace("%", ""))/-100 - 1;
            if (this.props.forever && newIndex < 0) {
                newIndex = this.state.panels - 1;
            } else if (!this.props.forever && newIndex < 0) {
                return;
            }
        } else {
            newIndex = Number(currentPosition.replace("%", ""))/-100 + 1;
            if (this.props.forever && newIndex > this.state.panels - 1) {
                newIndex = 0;
            } else if (!this.props.forever && newIndex > this.state.panels - 1) {
                return;
            }
        }
        let newPosition = newIndex * -100;
        newPosition += "%";
        const newArr = this.changeButtonColor(newIndex);
        this.setState({
            position: newPosition,
            buttonArr: newArr
        })
    }

    render () {
        return (
            <StyledCarousel>
                <Paginator dir={"prev"} onClick={() => this.paginate("prev")}/>
                <PanelContainer 
                    panelCount={this.state.panels}
                    position={this.state.position}
                    panelContent={this.state.panelContent}/> 
                <Menu 
                    buttonColor={this.state.buttonArr}
                    panelCount={this.state.panels}
                    onClick={(i) => this.handleClick(i)}/>
                <Paginator dir={"next"} onClick={() => this.paginate("next")}/>
            </StyledCarousel> 
        );
    };
}

// default props
HorizontalCarousel.defaultProps = {
    forever: false
}

// panel content
const panel1 = 'horizontal!';
const panel2 = 'panel deux';
const panel3 = 'trois';
const panel4 = 'quatre';
const panel5 = 'cinq';
const panel6 = 'six';