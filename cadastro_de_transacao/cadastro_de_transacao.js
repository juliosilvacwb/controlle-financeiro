async function transaction() {
  const url = 'http://18.218.201.243:8080'.concat(TRANSACTIONS)

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }

  const account = document.querySelector('#conta').value
  const category = document.querySelector('#categoria').value
  const value = document.querySelector('#valor').value

  const transaction = {
    account: `http://18.218.201.243:8080${ACCOUNTS}/${account}`,
    category: `http://18.218.201.243:8080${CATEGORIES}/${category}`,
    value
  }

  const properties = {
    method: 'POST',
    body: JSON.stringify(transaction),
    headers
  }

  try {
    const res = await fetch(url, properties)

    if (res.ok) {
      const body = await res.json()
      console.log(body)
      alert('Transação cadastrada com sucesso')
      /*window.location.href = '/home/home.html'*/
      var formReset = document.getElementById('form-id')
      formReset.reset()
      return
    }

    throw new Error()
  } catch (error) {
    alert('Transação não efetuada, confira os dados e tente novamente')
  }
}

async function findCategories() {
  const url = 'http://18.218.201.243:8080'.concat(CATEGORIES)

  const headers = {
    Accept: 'application/json',
    Authorization: localStorage.getItem('token')
  }

  const properties = {
    method: 'GET',
    headers
  }

  try {
    const res = await fetch(url, properties)

    if (res.ok) {
      const body = await res.json()
      const categories = body._embedded.categories
      let options = ''
      categories.forEach(c => {
        options = options.concat(`<option value="${c.id}">${c.name}</option>`)
      })
      document.querySelector('#categoria').innerHTML = options
      return
    }

    throw new Error()
  } catch (error) {
    console.log(error)
    alert('Não foi possível consultar suas categorias')
  }
}

async function findAccount() {
  const url = 'http://18.218.201.243:8080'
    .concat(ACCOUNTS_SEARCH_BY)
    .concat(`?userId=${4}`)

  const headers = {
    Accept: 'application/json',
    Authorization: localStorage.getItem('token')
  }

  const properties = {
    method: 'GET',
    headers
  }

  try {
    const res = await fetch(url, properties)

    if (res.ok) {
      const body = await res.json()
      const accounts = body._embedded.accounts
      let options = ''
      accounts.forEach(c => {
        options = options.concat(`<option value="${c.id}">${c.name}</option>`)
      })
      document.querySelector('#conta').innerHTML = options
      return
    }

    throw new Error()
  } catch (error) {
    console.log(error)
    alert('Não foi possível consultar suas contas')
  }
}
window.onload = function () {
  findCategories()
  findAccount()
}
