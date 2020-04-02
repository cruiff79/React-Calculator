import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Buttons from './Buttons';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    handleNumber = (data) => {
        if(typeof data == 'number') {
            this.setState({
                result: this.state.result + data
            });
        }
    }

    render() {
        let sign = ['+','-','*','/','C','='];
        let rows = [];
        for (let i = 0; i < 10; i++) {
          rows.push(<Buttons num={i} btnNumber = {this.handleNumber} />);
        }

        for(let i = 0; i < sign.length; i++) {
            rows.push(<Buttons num={sign[i]} btnNumber = {this.handleNumber} />);
        }

        return (
            <div className="Main">
                <div>
                    <input type="text" name="input_number" value={this.state.result} />
                </div>
                <div>
                    <ButtonGroup aria-label="First group">
                        {rows[7]}{rows[8]}{rows[9]}{rows[10]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Second group">
                        {rows[4]}{rows[5]}{rows[6]}{rows[11]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Third group">
                        {rows[1]}{rows[2]}{rows[3]}{rows[12]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Fourth group">
                        {rows[14]}{rows[0]}{rows[15]}{rows[13]}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Calculator;