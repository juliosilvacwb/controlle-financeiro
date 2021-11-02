function cadastrar(form) {
  const transação = {}

  transação.conta = document.getElementById('conta').value
  transação.tipoTransação = document.getElementById('tipoTransação').value
  transação.pagamento = document.getElementById('pagamento').value
  transação.dataHora = document.getElementById('dataHora').value
  transação.valor = document.getElementById('valor').value
  transação.descricao = document.getElementById('description').value
  save(form)
}

var form = document.getElementById('form-id')

document.getElementById('submitForm').addEventListener('click', function () {
  form.submit()
})

function save(form) {
  const url = 'http://18.218.201.243:8080'.concat('/transactions')
  //const url = URL_SERVER.concat(TRANSACTIONS)

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const properties = {
    method: 'POST',
    body: JSON.stringify(form),
    headers
  }

  fetch(url, properties)
    .then(res => {
      if (res.ok) {
        alert('Transação cadastrada com sucesso!')
      } else {
        alert('Erro ao adicionar transação!')
      }
    })
    .catch(err => console.log(err))
}
