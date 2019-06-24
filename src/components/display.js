import React from 'react'
import Numbers from './numbers.js';
import { OperatorsCol, OperatorsRow } from './operators.js'
import './display.css'
/* eslint no-eval: 0 */
class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: "0",
            curValue: 0,
            finalResult: 0,
            lastOperator: "",
            lastInput: "x",
        }
    };
    numberClick = (n) => {
        let d = "" + this.state.displayValue;
        d = this.state.displayValue === "0" ? (n === ".") ? d + n : "" + n : d + n;
        if (this.state.lastOperator === "=") {
            if (this.state.lastInput === "=") {
                this.setState({ displayValue: "" })
                d = "" + n;
            }
        }
        let result;
        if (this.state.lastOperator.length > 0) {
            let r = d.split(this.state.lastOperator)
            result = parseFloat(r[r.length - 1])
        } else {
            result = parseFloat(d);
        }
        this.setState({
            displayValue: d,
            curValue: result,
            lastInput: n
        })
    }
    operatorClick = (o, type, oArr) => {
        if (type === "row") {
            if (o === "AC") {
                this.setState({
                    displayValue: "0",
                    curValue: 0,
                    finalResult: 0,
                    lastOperator: "",
                    lastInput: "x",
                })
            } else if (o === "%") {
                let n = parseFloat(this.state.curValue) / 100;
                this.setState({
                    displayValue: this.state.displayValue.replace(this.state.curValue, n),
                    curValue: n
                })
            }
        } else {
            let oArray = ["+", "-", "*", "/"];
            console.log(oArray)
            let check = oArray.some(x => x === this.state.lastInput);
            let d = "" + this.state.displayValue;
            if (check) {
                d = d.substring(-1, d.length - 1) + o;
            } else {
                d += o;
            }
            this.setState({
                displayValue: d,
                lastInput: o,
                lastOperator: o
            })
        }
    }
    answerClick = (a) => {
        let oArray = ["+", "-", "*", "/"];
        let check = oArray.some(x => x === this.state.lastInput);
        let fr;
        let d = this.state.displayValue;
        if (
            d[d.length - 1] !== ")" &&
            (this.state.lastOperator.length > 0 && this.state.lastOperator !== "=") && !check
        ) {
            d = "(" + d + ")";
            fr = eval(d)
        } else if (check) {
            d = d.substring(-1, d.length - 1);
            fr = eval(d)
        } else {
            fr = eval(d)
        }
        this.setState({
            displayValue: d,
            finalResult: fr,
            lastOperator: a,
            lastInput: "="
        })
    }
    render() {
        return (
            <div className="container">
                <div className='display text-right'>
                    <div className='answer form-control col-11 mx-auto' >
                        <h5><span className="float-left">A:</span> {this.state.finalResult}</h5>
                    </div>
                    <div className='question form-control col-11 mx-auto mt-1' >
                        <h5><span className="float-left">Q:</span>{this.state.displayValue}</h5>
                    </div>
                </div>
                <div className="col-12 mx-auto">
                    <div className="d-flex flex-row justify-content-center ">
                        <div className="col-9 ml-auto p-0">
                            <OperatorsRow operatorClick={this.operatorClick}></OperatorsRow>
                            <Numbers numberClick={this.numberClick} />
                        </div>
                        <div className="col-3 mr-auto p-0">
                            <OperatorsCol operatorClick={this.operatorClick} answerClick={this.answerClick} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Display
