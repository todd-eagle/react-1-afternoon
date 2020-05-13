import React , {Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrone from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TropicBrowser extends Component {
    render() {
      return  (
       <div>
         <EvenAndOdd />
         <FilterObject />
         <FilterString />
         <Palindrone />
         <Sum />
       </div>
      )
    }
}