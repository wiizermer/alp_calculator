import React from 'react'

class Numbers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
    }
  }
  render () {
    const numbers = this.state.numbers
    const buttons = numbers.map((n) => {
      if (n === 0) {
        return <button className='btn btn-secondary col-8 mx-auto mt-1'
          key={n.toString()}
          onClick={() => this.props.numberClick(n)}
          value={n}
        >
          <h4>{n}</h4>
        </button>
      } else {
        return <button className='btn btn-secondary col-4 mx-auto mt-1'
          key={n.toString()}
          onClick={() => this.props.numberClick(n)}
          value={n}
        >
          <h4>{n}</h4>
        </button>
      }
    }
    )
    return (
      <div className=''>
        <div className='d-flex flex-row flex-wrap'>
          {buttons}
        </div>
      </div>
    )
  }
}

export default Numbers
