function onsubmit() {
var conta = document.querySelector("#conta").value;
var tipoTransação = document.querySelector("#transação").value;
var formaPagamento = document.querySelector("#pagamento").value;
var dataEhora = document.querySelector("#datetime").value;
var valor = document.querySelector("#text").value;
var descrição = document.querySelector("#textarea").value;

console.log(tipoTransação, formaPagamento, dataEhora, valor, descrição)
}

