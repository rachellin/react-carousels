import React from 'react';

import { PanelContainer } from './panelcontainer';
import { Menu } from './menu';
import { Arrow } from './arrow';

import { StyledCarousel, CarouselWrapper } from './style';

import Timer from './timer';

export class HorizontalCarousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
           position: "0%",
           panels: this.props.panels,
           buttonArr: Array(1).fill(this.props.circleColor),
           panelContent: this.props.panelContent,
           pag: [this.props.forever, true],
           userPag: false,
           timer: null
        }
    }

    componentDidMount () {
        let buttonArr = Array(this.state.panels).fill(this.props.circleColor);
        buttonArr[0] = this.props.accentColor;
        this.setState({
            buttonArr: buttonArr
        });
        if (this.props.autoplay) {
            this.state.timer = new Timer(this.autoplay.bind(this), this.props.timer);
            this.state.timer.start();
        }
    }

    componentDidUpdate () {
        if (!this.props.forever) {
            this.checkPagination();
        }
        if (this.props.autoplay && this.state.userPag) {
            this.state.timer.restart();
        }
    }

    changeButtonColor (i) {
        // change button color 
        let color;
        let buttonArr = this.state.buttonArr.slice();
        for (let a = 0; a < buttonArr.length; a++) {
            if (a == i) {
                buttonArr[a] = this.props.accentColor;
            } else {
                buttonArr[a] = this.props.circleColor;
            }
        }
        return buttonArr;
    }

    handleClick (i) {
        // change panel
        let newPosition = i * -100; 
        newPosition += '%';
        //console.log(this.state.buttonArr);
        // change clicked on button color
        let newArr = this.changeButtonColor(i);
        this.setState({
            position: newPosition,
            buttonArr: newArr,
            userPag: false
        });
        // reset timer
        this.setState({ userPag: true });
        setTimeout(() => {
            this.setState({ userPag: false });
        }, this.props.timer);
    }

    handleArrow (dir) {
        const currentPosition = Number(this.state.position.replace("%", ""))/-100;
        let newIndex;
        if (dir == "prev") {
            if (!this.state.pag[0]) {
                return;
            }
            newIndex = currentPosition - 1;
            if (this.props.forever && newIndex < 0) {
                newIndex = this.state.panels - 1;
            } 
        } else {
            if (!this.state.pag[1]) {
                return;
            }
            newIndex = currentPosition + 1;
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
        });
        // reset timer
        this.setState({ userPag: true });
        setTimeout(() => {
            this.setState({ userPag: false });
        }, this.props.timer);
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

    autoplay () {
        let currentPosition = Number(this.state.position.replace("%", ""))/-100;
        if (currentPosition == this.state.panels - 1) {
            currentPosition = -1;
        }
        let newPosition = (currentPosition + 1);
        let newArr = this.changeButtonColor(newPosition);
        newPosition = newPosition * -100 + "%";
        this.setState({
            position: newPosition,
            buttonArr: newArr
        });
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

// panel content
const panel1 = 'horizontal!';
const panel2 = 'panel deux';
const panel3 = 'trois';
const panel4 = 'quatre';
const panel5 = 'cinq';
const panel6 = 'six';

// default props
HorizontalCarousel.defaultProps = {
    panels: 6,
    panelContent: [panel1, panel2, panel3, panel4, panel5, panel6],
    forever: true,
    timer: 3000,
    autoplay: true,
    circleColor: "#eaeaea",
    accentColor: "lightpink",
}

