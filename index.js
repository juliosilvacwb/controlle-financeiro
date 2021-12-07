async function logar() {
  const url = URL_SERVER.concat(LOGIN)

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const email = document.querySelector('#email').value
  const password = document.querySelector('#senha').value

  const user = { email, password }

  const properties = {
    method: 'POST',
    body: JSON.stringify(user),
    headers
  }

  try {
    const res = await fetch(url, properties)

    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'))
      console.log('Token in localStorage', localStorage.getItem('token'))
      window.location.href = 'home/home.html'
      return
    }

    throw new Error()
  } catch (error) {
    alert('Credenciais inválidas')
  }
}
