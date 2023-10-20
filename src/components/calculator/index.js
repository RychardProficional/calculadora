import Button from "../button"

const Calculator = () => {
  return (
    <div>
      <div className="contains-calculator">
        <table className="calculator">
          <tbody>
            <div className="contant-terminal">
              <input className="terminal" type="text" />
            </div>
          </tbody>
          <tr>
            <td>
              <Button>1</Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Calculator
