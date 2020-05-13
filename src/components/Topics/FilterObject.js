import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor() {
        super()
        this.state={
            unfilteredArray: [
            {name: 'Vladamir Putin', age: 60, title:'Permanent President'},
            {name: 'Sam Malone', age: 37, profession: 'Bartender'},
            {name: 'Julius Ceaser', title: 'Emporer', hobbies:'writing'}
            ],
            userInput: '',
            filteredArray: []
        }
    }

    grabInfo(val){
        this.setState({userInput: val})
    }

    filterArray(userInput){
        let filteredArray=this.state.unfilteredArray.filter(element => element.hasOwnProperty(userInput))
        this.setState({ filteredArray: filteredArray });
    }

    render(){
       return (
           <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
               <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
               <input className="inputLine" onChange={(e) => this.grabInfo(e.target.value)}/>
               <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
           </div>
       )
    }
}