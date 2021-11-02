function logar(form) {
  const user = {}

  user.email = document.querySelector('#email').value
  user.senha = document.querySelector('#senha').value

  save(form)
}

async function logar(user) {
  // const url = "http://18.218.201.243:8080".concat("/users");
  const url = URL_SERVER.concat(USERS)

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const properties = {
    method: 'GET',
    body: JSON.stringify(user),
    headers
  }

  fetch(url, properties)
    .then(res => {
      if (res.ok) {
        alert('Login efetuado com sucesso')
      } else {
        alert('Erro efetuar login')
      }
    })
    .catch(err => console.log(err))
}
