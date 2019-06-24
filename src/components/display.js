import React from 'react'
import Numbers from './numbers.js';
import { OperatorsCol, OperatorsRow } from './operators.js'
import './display.css'
class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: "0",
            // curValue:0,
            // preValue:0,
            // tempResult:0,
            finalResult:0,
            lastOperator: "",
            lastInput: "x",
        }
    }

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

          if(this.state.lastOperator.length>0){
            let r = d.split(this.state.lastOperator)
            result = parseFloat(r[r.length-1])
          } else{
            result = parseFloat(d);
          }

        this.setState({
            displayValue: d,
            curValue:result,
            lastInput: n
        })

    }
    operatorClick = (o,type) => {
        // let check = this.state.lastInput === this.state.lastOperator;
        // if(check){
        //     let d = this.state.displayValue.substring(0,this.state.displayValue.length-1)+o
        //     this.setState({displayValue:d})
        // } else if ( this.state.lastOperator === "="){
        //     let d = ""+this.state.curValue+o;
        //     this.setState({displayValue:d})
        // }
        // else {
        //     let d = ""+this.state.displayValue;
        //     d += o;
        //     this.setState({displayValue:d})
        // };
        if(type ==="row"){
            if(o==="AC"){
                this.setState({
                    displayValue: "0",
                    curValue:0,
                    // preValue:0,
                    // tempResult:0,
                    finalResult:0,
                    lastOperator: "",
                    lastInput: "x",
                })
            }else if(o==="%"){
                console.log(this.state);
                let n  = parseFloat(this.state.curValue)/100;
                this.setState({
                    displayValue:this.state.displayValue.replace(this.state.curValue,n),
                    curValue:n
                })
                console.log(this.state);
                // if(this.state.lastOperator.length>0 && this.state.lastOperator !=="="){
                //     let split = this.state.displayValue.split(this.state.lastOperator);
                //     n = split[split.length-1]/100
                //     split[split-1] = n;
                //     console.log(n);
                //     this.setState({displayValue:split.concat()})
                // }else{
                    
                // }
            }
        }else{
            let d = "" + this.state.displayValue;
            d += o;
            
            this.setState({
                displayValue: d,
                // tempResult:tempAns,
                // preValue:this.state.curValue,
                lastInput: o,
                lastOperator: o
            })
        }
        
        // let tempAns ;
        // if(this.state.lastOperator === "+"){
        //     tempAns = this.state.tempResult + this.state.curValue;
        // } else if( this.state.lastOperator ==="-"){
        //     tempAns = this.state.tempResult - this.state.curValue;
        // } else if(this.state.lastOperator === "*"){
        //     tempAns = this.state.tempResult * this.state.curValue;
        // } else if( this.state.lastOperator ==="/"){
        //     tempAns = this.state.tempResult / this.state.curValue;
        // }else {
        //     tempAns=this.state.curValue;
        // }
        
        

    }
    answerClick = (a) => {
        console.log(this.state)
        // this.setState(displayValue)
        let fr = eval(this.state.displayValue)
        let d = "(" + this.state.displayValue + ")"

        // switch (this.state.lastOperator){
        //     case '+':
        //         fr = parseFloat(this.state.tempResult+this.state.curValue);
        //         break;
        //     case '-':
        //         fr = parseFloat(this.state.tempResult-this.state.curValue);
        //         break;
        //     case 'X':
        //         fr = parseFloat(this.state.tempResult*this.state.curValue).toFixed(5);
        //         break;
        //     case '/':
        //         fr = parseFloat(this.state.tempResult/this.state.curValue);
        //         break;
        //     case '':
        //         fr= parseFloat(this.state.curValue);
        //     case '=':
        //         fr= parseFloat(this.state.curValue);
        //     default: 
        //         break;
        // }


        this.setState({
            displayValue: d,
            // preValue:0,
            // curValue:fr,
            finalResult: fr,
            // tempResult:fr,
            lastOperator: a,
            lastInput: "="
        })
        console.log(this.state)
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
