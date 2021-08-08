

function onSubmit(){
    const user = {};
    user.tipoCategoria = document.querySelector("#tipdecategoria").value;
    user.tipoPagarReceber = document.querySelector("#entradaousaida").value;
    user.valor = document.querySelector("#pagrecval").value;
    user.forma = document.querySelector("#formadepagamento").value;
    user.data = document.querySelector("#datapag").value;

    console.log(user);
}