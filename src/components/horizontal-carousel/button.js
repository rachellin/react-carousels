import React from 'react';

import { StyledButton } from './style';

export class Button extends React.Component {
    render () {
        return (
            <StyledButton  
                onClick={this.props.onClick}
                style={{background: this.props.buttonColor}}>
                    {this.props.number}
            </StyledButton>
        );
    }
}

// Button.defaultProps = {
//     buttonColor: 'salmon'
// }