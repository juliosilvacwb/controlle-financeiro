// const { URL_SERVER } = require("../constants.js");

async function onSubmit() {
    const user = {};
    user.name = document.querySelector("#nome").value;
    user.password = document.querySelector("#password").value;
    user.email = document.querySelector("#email").value;
    // user.dataNascimento = document.querySelector("#date").value;
    // user.fone = document.querySelector("#number").value;
    // user.aceite = document.querySelector("#checkbox").checked;

    save(user);
}

async function save(user) {
    // const url = "http://18.218.201.243:8080".concat("/users");
    const url = URL_SERVER.concat(USERS);
    
    const headers = {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    };

    const properties =  {
                            method: "POST",
                            body: JSON.stringify(user),
                            headers
                        };

    fetch(url, properties)
        .then((res) => { 
            if (res.ok) {
                alert("Usuário cadastrado com sucesso!");
            } else {
                alert("Erro ao salvar usuário!");
            }
        })
        .catch((err) => console.log(err));
}
