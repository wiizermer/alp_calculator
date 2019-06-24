import React from 'react'

export class OperatorsCol extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        operators:["+","-","*","/","="],
        
    };
    
  }

  render () {
    const operators = this.state.operators;
    const buttons = operators.map((o)=>
        {if( o !== "="){
            return <button className="btn btn-primary col-12 mt-1" 
                        key={o.toString()} 
                        onClick={()=>this.props.operatorClick(o,"col")}
                        value={o}
                    >
                        <h4>{o}</h4>
                    </button>
        } else{
            return <button className="btn btn-danger col-12 mt-1" 
                        key={o.toString()} 
                        onClick={()=>this.props.answerClick(o,"col")}
                        value={o}
                    >
                        <h4>{o}</h4>
                    </button>
        }
            
        }
    )
    return (
      
        <div className="d-flex flex-column">
        {buttons}
        </div>
        
      

    )
  }
}


export class OperatorsRow extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
          
          operators:["AC","%"]
      };
      
    }
  
    render () {
      const operators = this.state.operators;
      const buttons = operators.map((o)=>
      <button className="btn btn-info col-6 mx-auto mt-1" 
      key={o.toString()} 
      onClick={()=>this.props.operatorClick(o,"row")}
      value={o}
  >
      <h4>{o}</h4>
  </button>
      )
      return (
        <div className="">
          <div className="d-flex flex-row">
          {buttons}
          </div>
          
        </div>
  
      )
    }
  }
