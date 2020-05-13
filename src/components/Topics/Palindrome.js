import React, {Component} from 'react'

export default class Palindrome extends Component {
    constructor(){
        super()
        this.state={
            userInput: '',
            palindrome: ''
        }
    }

    inputHandler(val){
        this.setState({userInput: val})       
    }

    palindroneCheck(userInput){
        let check = Array.from(userInput).reverse().join('') === userInput
        check ? this.setState({ palindrome: 'true' }) : this.setState({ palindrome: 'false' })
    }
  
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.inputHandler(e.target.value)}/>
                <button className="confirmationButton" onClick = {() => this.palindroneCheck(this.state.userInput)}>Check</button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    }
}