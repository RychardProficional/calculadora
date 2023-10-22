class mathematicalError extends Error {
  constructor(message) {
    super(message)
    this.type = "mathematicalError"
  }
}

export default mathematicalError
