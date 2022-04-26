class GreetHandler {
  sayHello(req, res) {
    res.json({
      message: `Hello ${req.params.to}`
    });
  }
}

export default GreetHandler
