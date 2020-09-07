import React from 'react';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';
import { Arrow } from './arrow';

import { StyledCarousel, CarouselWrapper } from './style';

export class HorizontalCarousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: "0%",
           panels: this.props.panels,
           buttonArr: Array(1).fill('skyblue'),
           panelContent: [panel1, panel2, panel3, panel4, panel5, panel6],
           pag: [false, true]
        }
    }

    componentDidMount () {
        this.setState({
            buttonArr: Array(this.state.panels).fill('skyblue')
        });
    }

    componentDidUpdate () {
        this.checkPagination();
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

    handleArrow (dir) {
        const currentPosition = this.state.position;
        let newIndex;
        if (dir == "prev") {
            newIndex = Number(currentPosition.replace("%", ""))/-100 - 1;
            if (this.props.forever && newIndex < 0) {
                newIndex = this.state.panels - 1;
            } 
        } else {
            newIndex = Number(currentPosition.replace("%", ""))/-100 + 1;
            if (this.props.forever && newIndex > this.state.panels - 1) {
                newIndex = 0;
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

    checkPagination () {
        const currentPanel = Number(this.state.position.replace("%", ""))/-100;
        if (currentPanel == this.state.panels - 1 && this.state.pag[1]) {
            this.setState({ pag: [true, false] });
        } else if (currentPanel == 0 && this.state.pag[0]) {
            this.setState({ pag: [false, true] });
        } else if (this.state.pag[0] !== this.state.pag[1] && ((currentPanel !== 0) && (currentPanel !== this.state.panels - 1))) {
            this.setState({ pag: [true, true] });
        }
    }

    render () {
        return (
            <StyledCarousel>
                <Arrow dir="prev" onClick={() => this.handleArrow("prev")} clickable={this.state.pag[0]}/>
                <CarouselWrapper>
                    <PanelContainer 
                        panelCount={this.state.panels}
                        position={this.state.position}
                        panelContent={this.state.panelContent}/> 
                    <Menu 
                        buttonColor={this.state.buttonArr}
                        panelCount={this.state.panels}
                        onClick={(i) => this.handleClick(i)}/>
                </CarouselWrapper>
                <Arrow dir="next" onClick={() => this.handleArrow("next")} clickable={this.state.pag[1]}/>
            </StyledCarousel> 
        );
    };
}

// default props
HorizontalCarousel.defaultProps = {
    panels: 6,
    forever: false
}

// panel content
const panel1 = 'horizontal!';
const panel2 = 'panel deux';
const panel3 = 'trois';
const panel4 = 'quatre';
const panel5 = 'cinq';
const panel6 = 'six';