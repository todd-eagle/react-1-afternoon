import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unfilteredArray: ['Godzilla', 'Rodan', 'Mothra', 'King Ghidorah', 'Gamora', 'Mecha Godzilla', 'King Kong'],
            userInput: '',
            filteredArray:[]
        }
    }

    textHandler(val){
        this.setState({userInput: val})
    }

    filterNames(userInput) {
        let filteredArray = this.state.unfilteredArray.filter(element => element.includes(userInput))
        this.setState({ filteredArray: filteredArray });
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered:{ JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.textHandler(e.target.value)}/>
                <button className="confirmationButton" onClick={()=>this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}