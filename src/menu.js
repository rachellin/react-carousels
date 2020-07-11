import React from 'react';
import { Button } from './button';

export class Menu extends React.Component {
    renderButton (i) {
        return (
            <Button 
            number={i}
            onClick={this.props.onClick}/>
        );
    }

    render () {
        return (
            <div className="menu">
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
                {this.renderButton(4)}
            </div>
        )
    }
}