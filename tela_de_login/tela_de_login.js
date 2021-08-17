function logar(form){
    const user = {};

    user.email = document.querySelector("#email").value;
    user.senha = document.querySelector("#senha").value;

    console.log(user);
}