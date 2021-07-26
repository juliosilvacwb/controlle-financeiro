function onSubmit() {
  const user = {};
  user.categoria = document.querySelector("#categoria").value;
  user.valor = document.querySelector("#valor").value;
  user.data = document.querySelector("#data").value;

  console.log(user);
}