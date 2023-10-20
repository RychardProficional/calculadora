const Button = (props) => {
  return (
    <div className="content-btn">
      <div className="btn">
        <span>{props.children}</span>
      </div>
    </div>
  )
}

export default Button
