function status(request, response) {
  response.status(200).json({ chave: "curso.dev é incrível"})
}

export default status