function onSubmit() {
    const user = {};
    user.nome = document.querySelector("#nome").value;
    user.senha = document.querySelector("#password").value;
    user.email = document.querySelector("#email").value;
    user.dataNascimento = document.querySelector("#date").value;
    user.fone = document.querySelector("#number").value;
    user.aceite = document.querySelector("#checkbox").checked;

    console.log(user);
}
