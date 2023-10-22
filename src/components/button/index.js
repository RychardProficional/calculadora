const Button = ({ children, ...rest }) => {
  return (
    <div className="content-btn">
      <div className="btn" {...rest}>
        <span>{children}</span>
      </div>
    </div>
  )
}

export default Button
