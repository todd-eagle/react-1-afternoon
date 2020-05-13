import React, {Component} from 'react'

export default class Sum extends Component {
    constructor(){
        super()
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    inputNum1(val){
        this.setState({number1: Number(val)})
    }

    inputNum2(val){
        this.setState({number2: Number(val)})
    }

    add(num1, num2){
        this.setState({sum: num1+num2})
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.inputNum1(e.target.value) }/>
                <input className="inputLine" onChange={ (e) => this.inputNum2(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2 )}></button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}