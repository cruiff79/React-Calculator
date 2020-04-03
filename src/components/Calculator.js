import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Buttons from './Buttons';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            result: '',
            sign: '',
            isFlag: false,
            arrSign: ['+','-','*','/','C','=']
        }
    }

    // callback from Buttons component
    handleNumber = (data) => {
        let val = 0;
        let rst = 0;

        if(typeof data == 'number') {
            // prevent to begin 0
            if(this.state.result === 0 || (data === 0 && this.state.result === '')) return;

            if(this.state.sign === '') {
                this.setState({
                    result: this.state.result + data
                });
            } else {
                if(this.state.isFlag) {
                    this.setState({
                        result: this.state.result.toString() + data
                    });
                } else {
                    this.setState({
                        result: data,
                        isFlag: true
                    });
                }   
            }
        } else {
            // button C
            if(data === this.state.arrSign[4]) {
                val = null;
                rst = '';
                data = '';
            // button =
            }else if(data === this.state.arrSign[5]) {
                if(!this.state.isFlag) return;

                val = null;
                rst = this.clac(parseInt(this.state.value), parseInt(this.state.result), this.state.sign);
                data = '';
            // button +,-,*,/
            } else {
                if(!this.state.isFlag && this.state.sign !== '') return;

                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    val = this.clac(parseInt(this.state.value), parseInt(this.state.result), this.state.sign);
                    rst = this.clac(parseInt(this.state.value), parseInt(this.state.result), this.state.sign);
                }
            }

            this.setState({
                value: val,
                result: rst,
                sign: data,
                isFlag: false
            });
        }
    }

    // calculate between num1 and num2
    clac = (num1, num2, sign) => {
        if(sign === this.state.arrSign[0]) {
            return num1 + num2;
        } else if(sign === this.state.arrSign[1]) {
            return num1 - num2;
        } else if(sign === this.state.arrSign[2]) {
            return num1 * num2;
        } else if(sign === this.state.arrSign[3]) {
            return num1 / num2;
        }
    }

    render() {
        let rows = [];
        for (let i = 0; i < 10; i++) {
          rows.push(<Buttons num={i} btnNumber = {this.handleNumber} />);
        }

        for(let i = 0; i < this.state.arrSign.length; i++) {
            rows.push(<Buttons num={this.state.arrSign[i]} btnNumber = {this.handleNumber} />);
        }

        return (
            <div className="Main">
                <div>
                    <input type="text" name="input_number" value={this.state.result} readOnly />
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