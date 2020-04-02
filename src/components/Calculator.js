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
            isFlag: false
        }
    }

    handleNumber = (data) => {
        let val = 0;
        let rst = 0;

        if(typeof data == 'number') {
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
            if(data === 'C') {
                val = null;
                rst = '';
                data = '';
            }else if(data === '=') {
                val = 0;
                rst = '';
            } else if(data === '+') {
                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    val = parseInt(this.state.value) + parseInt(this.state.result);
                    rst = parseInt(this.state.value) + parseInt(this.state.result);
                }
            } else if(data === '-') {
                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    val = parseInt(this.state.value) - parseInt(this.state.result);
                    rst = parseInt(this.state.value) - parseInt(this.state.result);
                }
            } else if(data === '*') {
                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    val = parseInt(this.state.value) * parseInt(this.state.result);
                    rst = parseInt(this.state.value) * parseInt(this.state.result);
                }
            } else if(data === '/') {
                if(this.state.value == null) {
                    val = this.state.result;
                    rst = this.state.result;
                } else {
                    val = parseInt(this.state.value) / parseInt(this.state.result);
                    rst = parseInt(this.state.value) / parseInt(this.state.result);
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

    render() {
        let arrSign = ['+','-','*','/','C','='];
        let rows = [];
        for (let i = 0; i < 10; i++) {
          rows.push(<Buttons num={i} btnNumber = {this.handleNumber} />);
        }

        for(let i = 0; i < arrSign.length; i++) {
            rows.push(<Buttons num={arrSign[i]} btnNumber = {this.handleNumber} />);
        }

        return (
            <div className="Main">
                <div>
                    <input
                        type="text"
                        name="input_number"
                        value={this.state.result}
                        onChange={(e) => {
                            this.setState({result: e.target.value})
                            }
                        }
                    />
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