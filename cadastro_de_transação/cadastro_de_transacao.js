function cadastrar(form){
    const transação = {};

    transação.conta = document.querySelector("#conta").value
    transação.tipoTransação = document.querySelector("#tipoTransação").value
    transação.pagamento = document.querySelector("#pagamento").value
    transação.dataHora = document.querySelector("#dataHora").value
    transação.valor = document.querySelector("#valor").value
    transação.descricao = document.querySelector("#descricao").value

    console.log(transação)
}