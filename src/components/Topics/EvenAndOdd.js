import React, {Component} from 'react'

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    splitArrays(userInput) {
        let arr = userInput.split(',')
        let arrEven = []
        let arrOdd = []
        
        let t1 = arr.map(element => element % 2=== 0 ? arrEven.push(Number(element)) :  arrOdd.push(Number(element)))
        this.setState({evenArray: arrEven, oddArray: arrOdd})
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h1>Evens and Odds</h1>
                <input className="inputLine" onChange = { (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick = { () => this.splitArrays(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}