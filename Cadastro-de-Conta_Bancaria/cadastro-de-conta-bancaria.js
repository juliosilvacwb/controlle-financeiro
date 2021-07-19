window.onload = function(){
  
}
function onSubmit(){
    const user = {};
    user.nome = document.querySelector("#nome").value;
    user.banco = document.querySelector("#banco").value;
    user.nbanco = document.querySelector("#nbanco").value;
    user.agencia = document.querySelector("#agencia").value;
    user.nconta = document.querySelector("#nconta").value;
    user.digito = document.querySelector("#digito").value;
    user.tipodc = document.querySelector("#tipodc").value;
    user.saldo = document.querySelector("#saldo").value;

    console.log(user);
}