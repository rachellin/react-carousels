import React from 'react';
import { Button } from './button';

import { StyledMenu } from './style';

export class Menu extends React.Component {
    renderButton (i) {
        return (
            <Button 
                number={i}
                buttonColor={this.props.buttonColor[i]}
                onClick={() => this.props.onClick(i)}/>
        );
    }

    generateMenu (i) {
        let buttons = [];
        for (let a = 0; a < i; a++) {
            buttons.push(this.renderButton(a)) 
        }
        return buttons;
    }

    render () {
        return (
            <StyledMenu>
                {this.generateMenu(this.props.panelCount)}
            </StyledMenu>
        )
    }
}