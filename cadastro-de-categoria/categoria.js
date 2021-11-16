/*

$(document).ready(function(){
    $("#pagrecval").mask("999.999.990,00", {reverse: true})
})

function onSubmit(){
    const user = {};
    user.tipoCategoria = document.querySelector("#tipdecategoria").value;
    user.tipoPagarReceber = document.querySelector("#entradaousaida").value;
    user.valor = document.querySelector("#pagrecval").value;
    user.forma = document.querySelector("#formadepagamento").value;
    user.data = document.querySelector("#datapag").value;

    console.log(user);
}

*/
// const { URL_SERVER } = require("../constants.js");

async function onSubmit() {
  const categoria = {}
  categoria.tipdecategoria = document.querySelector('#tipdecategoria').value
  categoria.entradaousaida = document.querySelector('#entradaousaida').value
  categoria.formadepagamento = document.querySelector('#formadepagamento').value
  // user.dataNascimento = document.querySelector("#date").value;
  // user.fone = document.querySelector("#number").value;
  // user.aceite = document.querySelector("#checkbox").checked;

  save(categoria)
}

async function save(categoria) {
  const url = 'http://18.218.201.243:8080'.concat('/category')
  //const url = URL_SERVER.concat(CATEGORIES);

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  const properties = {
    method: 'POST',
    body: JSON.stringify(categoria),
    headers
  }

  fetch(url, properties)
    .then(res => {
      if (res.ok) {
        alert('Categoria cadastrada com sucesso!')
      } else {
        alert('Erro ao salvar Categoria!')
      }
    })
    .catch(err => console.log(err))
}
