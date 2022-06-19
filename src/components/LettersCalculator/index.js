// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {typeInput: ''}

  onChangeInput = event => {
    const {value} = event.target

    this.setState({typeInput: value})
  }

  render() {
    const {typeInput} = this.state

    return (
      <div className="letter-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="enter-phrase" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                id="phraseText"
                type="text"
                placeholder="Enter the phrase"
                className="input-text"
                onChange={this.onChangeInput}
                value={typeInput}
              />
              <p className="no-letters">No.of letters: {typeInput.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
