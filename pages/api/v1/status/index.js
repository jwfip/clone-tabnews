function status(request, response) {
  response.status(200).json({ chave: "Primeira API do projeto" });
}

export default status;
