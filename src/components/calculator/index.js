import { Component } from "react"
import Button from "../button"

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terminalValue: "",
    }
  }

  check = (tv = "", newC) => {
    const operations = ["+", "-", "/", "*", ".", "%"]
    const lestChar = tv.slice(-1)

    if (isNaN(newC)) {
      if ((!tv.length || lestChar === "(") && !["(", ".", "-"].includes(newC))
        return tv
      else if (
        (tv.length === 1 || tv.slice(-2)[0] === "(") &&
        operations.includes(lestChar)
      )
        return tv.slice(0, -1)
      else if (newC === ".") {
        if ((tv.match(/\.(\d+)?$/gm) || []).length || lestChar === ")")
          return tv
        if (
          !tv.length ||
          lestChar === "(" ||
          operations.slice(0, -1).includes(lestChar)
        )
          return tv + "0."
      } else if (
        (operations.slice(0, -1).includes(lestChar) &&
          operations.includes(newC)) ||
        (lestChar === "%" && "%" === newC)
      )
        return tv.slice(0, -1) + newC
      else if (newC === "(" && lestChar === ")") {
        return tv + "*" + newC
      } else if (newC === ")") {
        if (
          tv
            .split("")
            .reduce((a, c) => a + (c === "(" ? 1 : c === ")" ? -1 : 0), 0) <= 0
        )
          return tv
      }
    } else {
      return tv + newC
    }
    return tv + newC
  }

  headleClick = (e) => {
    const newTerminalValue = this.check(
      this.state.terminalValue,
      e.target.innerText,
    )

    this.setState({
      terminalValue: newTerminalValue,
    })
  }
  render() {
    return (
      <div className="contains-calculator">
        <table className="calculator">
          <tbody>
            <td colspan="4">
              <div className="contant-terminal">
                <input
                  className="terminal"
                  type="text"
                  value={this.state.terminalValue}
                />
              </div>
            </td>
          </tbody>
          <tr>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>(</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>)</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>%</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>AC</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>7</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>8</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>9</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>/</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>4</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>5</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>6</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>*</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>1</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>2</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>3</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>-</Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>0</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>.</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>=</Button>
            </td>
            <td>
              <Button onClick={(e) => this.headleClick(e)}>+</Button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Calculator
