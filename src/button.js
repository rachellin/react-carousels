import React from 'react';

export class Button extends React.Component {
    render () {
        return (
            <div 
                className="button" 
                onClick={this.props.onClick}
                style={{background: this.props.buttonColor}}>
                    {this.props.number}
            </div>
        );
    }
}

// Button.defaultProps = {
//     buttonColor: 'salmon'
// }