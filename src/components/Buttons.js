import React from 'react';
import Button from 'react-bootstrap/Button';

class Buttons extends React.Component {
    sendNumber = (num) => {
        this.props.btnNumber(num);
    }

    render() {
        const btnZero = <Button style={{width:"161px"}} variant="secondary" onClick={() => {this.sendNumber(this.props.num);}}><h4>{this.props.num}</h4></Button>;
        const btnOther = <Button variant="secondary" onClick={() => {this.sendNumber(this.props.num);}}><h4>{this.props.num}</h4></Button>;
        return (
            <div className="btnClass">
                {this.props.num === 0 ? btnZero : btnOther}
            </div>
        );
    }
}

export default Buttons;