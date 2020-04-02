import React from 'react';
import Button from 'react-bootstrap/Button';

class Buttons extends React.Component {
    sendNumber = (num) => {
        this.props.btnNumber(num);
    }

    render() {
        return (
            <div>
                <Button
                    variant="secondary"
                    onClick={() => {
                        this.sendNumber(this.props.num);
                    }}
                >
                    <h4>{this.props.num}</h4>
                </Button>
            </div>
        );
    }
}

export default Buttons;