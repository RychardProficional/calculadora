import { ClockHistory, Container, ContantTerminal, Table, Terminal } from "./style"
import { Component } from "react"
import Button from "./button"
import mError from "./mathematicalError"
import History from "./history"

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      terminalValue: "",
      datePress: 0,
      calculationDone: false,
      activeHistory: true,
      history: [],
    }
  }

  operation = ["+", "-", "÷", "×", ".", "%"]

  numberOfOpenParentheses = (str) =>
    str.split("").reduce((a, c) => a + (c === "(" ? 1 : c === ")" ? -1 : 0), 0)

  ACpress = () => {
    this.setState({
      datePress: setTimeout(() => {
        this.setState({ terminalValue: "" })
      }, 1000),
    })
  }

  ACdownPress = () => {
    if (this.state.terminalValue) {
      clearTimeout(this.state.datePress)
      this.setState({ terminalValue: this.state.terminalValue.slice(0, -1) })
    }
  }

  calcPrepare = (str) => {
    str += ")".repeat(this.numberOfOpenParentheses(str))
    str = str
      .replace(/(\d+(\.\d+)?)%/g, (m, n) => (parseFloat(n) / 100).toString())
      .replace(/\(\)/g, "(0)")
      .replace(/×/g, "*")
      .replace(/÷/g, "/")

    return str
  }

  calc = (s = "") => {
    let result
    if (this.operation.slice(0, -1).includes(s.slice(-1))) s = s.slice(0, -1)
    let str = this.calcPrepare(s)
    try {
      // Verifica se tem divisão por zero
      if ((str.match(/(?!\/)(0+(\.\d+)?)/gm) || []).filter((x) => parseFloat(x) === 0).length)
        throw new mError("Divisão por zero")

      // eslint-disable-next-line
      result = eval(str).toString()
    } catch (e) {
      if (e.typestyle === "mathematicalError") console.log(e.message)
      else alert(`Erro ao tentar executar o calculo: ${str}`)

      result = "0"
    } finally {
      console.log("result: " + result)
      this.setState({ calculationDone: true, history: [...this.state.history, [s, result]] })
      console.log(this.state.history)
      this.setState({})
      return result
    }
  }

  check = (tv = "", newC) => {
    const op = this.operation
    const lestChar = tv.slice(-1)

    if (newC === "=") return this.calc(tv)

    if (isNaN(newC)) {
      if ((!tv.length || lestChar === "(") && !["(", ".", "-"].includes(newC)) return tv
      else if ((tv.length === 1 || tv.slice(-2)[0] === "(") && op.includes(lestChar))
        return tv.slice(0, -1)
      else if (newC === ".") {
        if ((tv.match(/\.(\d+)?$/gm) || []).length || lestChar === ")") return tv
        else if (!tv.length || lestChar === "(" || op.slice(0, -1).includes(lestChar))
          return tv + "0."
      } else if (
        (op.slice(0, -1).includes(lestChar) && op.includes(newC)) ||
        (lestChar === "%" && "%" === newC)
      )
        return tv.slice(0, -1) + newC
      else if (
        newC === "(" &&
        (lestChar === ")" || (!isNaN(lestChar) && tv.length) || lestChar === "%")
      ) {
        return tv + "×" + newC
      } else if (newC === ")") {
        if (this.numberOfOpenParentheses(tv) <= 0) return tv
      }
    } else {
      if ((tv.match(/((\d+)?\.)?\d+(\.)?$/gm) || [])[0] === "0") {
        if (newC === "0") return tv
        else return tv.slice(0, -1) + newC
      }
      if (lestChar === ")") return tv + "×" + newC
    }

    return tv + newC
  }

  headleClickButton = (e) => {
    const value = e.target.innerText
    const { terminalValue, calculationDone } = this.state
    var newTerminalValue

    if (calculationDone) this.setState({ calculationDone: false })
    if (!isNaN(value) && calculationDone) newTerminalValue = this.check("", value)
    else newTerminalValue = this.check(terminalValue, value)

    this.setState({
      terminalValue: newTerminalValue,
    })
  }

  headleClickHistory = () => {
    this.setState({ activeHistory: !this.state.activeHistory })
  }
  render() {
    const { terminalValue, activeHistory, history } = this.state
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <td colSpan="4">
                <ContantTerminal>
                  <ClockHistory onClick={this.headleClickHistory} />
                  <Terminal value={terminalValue} />
                </ContantTerminal>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  (
                </Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  )
                </Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  %
                </Button>
              </td>
              <td>
                <Button
                  onMouseDown={this.ACpress}
                  onMouseUp={this.ACdownPress}
                  typestyle="emphasis"
                  longPressEffect={true}
                >
                  AC
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>7</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>8</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>9</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  ÷
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>4</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>5</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>6</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  ×
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>1</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>2</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>3</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  -
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>0</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)}>.</Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="equal">
                  =
                </Button>
              </td>
              <td>
                <Button onClick={(e) => this.headleClickButton(e)} typestyle="emphasis">
                  +
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <History hidden={activeHistory} content={history} />
      </Container>
    )
  }
}

export default Calculator
