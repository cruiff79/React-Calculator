import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Buttons from './Buttons';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            result: 0,
            sign: '',
            isFlag: false,
            isDot: false,
            arrSign: ["+","-","*","/","C","=","+/-","%","."]
        }
    }

    // callback from Buttons component
    handleNumber = (data) => {
        let val = 0;
        let rst = 0;
        let isFlag = false;

        // button number or button .
        if(typeof data == 'number' || data === this.state.arrSign[8]) {
            // button .
            if(data === this.state.arrSign[8]) {
                if(this.state.isDot) {
                    return;
                }

                this.setState({
                    isDot: true
                });
                console.log("isDot: ", this.state.isDot);
            }

            if(this.state.sign === '') {
                if(data === 0 && !this.state.isFlag) {
                    return;
                } else {
                    if(this.state.result === 0) {
                        this.setState({
                            result: this.state.result + data,
                            isFlag: true
                        });
                    } else {
                        this.setState({
                            result: this.state.result.toString() + data,
                            isFlag: true
                        });
                    }
                }
            } else {
                if(this.state.isFlag && this.state.result !== 0) {
                    this.setState({
                        result: this.state.result.toString() + data
                    });
                } else {
                    if(data === this.state.arrSign[8]) {
                        this.setState({
                            result: this.state.result.toString() + data,
                            isFlag: true
                        });
                    } else {
                        console.log("result: ", this.state.result);
                        this.setState({
                            result: data,
                            isFlag: true
                        });
                    }
                }   
            }
        } else {
            // button C
            if(data === this.state.arrSign[4]) {
                val = null;
                rst = 0;
                data = '';
            // button =
            }else if(data === this.state.arrSign[5]) {
                if(!this.state.isFlag) return;

                val = null;
                rst = this.clac(Number(this.state.value), Number(this.state.result), this.state.sign);
            // button +/-
            } else if(data === this.state.arrSign[6]) {
                if(this.state.value === null) {
                    val = null;
                } else {
                    val = this.state.value;
                }
                rst = this.state.result * -1;
                isFlag = this.state.isFlag;
                data = this.state.sign;
            // button %
            } else if(data === this.state.arrSign[7]) {
                if(this.state.value === null) {
                    val = null;
                } else {
                    val = this.state.value;
                }
                rst = this.state.result * 0.01;
                isFlag = this.state.isFlag;
                data = this.state.sign;
            // button +,-,*,/
            } else {
                if(!this.state.isFlag && this.state.sign === data) return;

                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    if(!this.state.isFlag) {
                        this.setState({
                            sign: data
                        });
                        return;
                    }
                    val = this.clac(Number(this.state.value), Number(this.state.result), this.state.sign);
                    rst = this.clac(Number(this.state.value), Number(this.state.result), this.state.sign);
                }
            }

            this.setState({
                value: val,
                result: rst,
                sign: data,
                isFlag: isFlag,
                isDot: false
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
                    <h3>A simple React calculator</h3>
                </div>
                <div>
                    <input type="text" name="input_number" value={this.state.result} readOnly />
                </div>
                <div>
                    <ButtonGroup aria-label="Fourth group">
                        {rows[14]}{rows[16]}{rows[17]}{rows[13]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="First group">
                        {rows[7]}{rows[8]}{rows[9]}{rows[12]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Second group">
                        {rows[4]}{rows[5]}{rows[6]}{rows[11]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Third group">
                        {rows[1]}{rows[2]}{rows[3]}{rows[10]}
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup aria-label="Fourth group">
                        {rows[0]}{rows[18]}{rows[15]}
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Calculator;