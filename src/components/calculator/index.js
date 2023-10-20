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
              <Button>(</Button>
              <Button>)</Button>
              <Button>%</Button>
              <Button>AC</Button>
            </td>
            <td>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>/</Button>
            </td>
            <td>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>*</Button>
            </td>
            <td>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>-</Button>
            </td>
            <td>
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
              <Button>+</Button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Calculator
