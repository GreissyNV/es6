//Dividir el codigo de funciones
console.log("Antes de init App");
initApp();
console.log("Despues de init App");

function initApp() {
  console.log("Inicializando app...");
  pedirDatosUsuario();
}

function pedirDatosUsuario(){
  console.log("Pidiendo datos al usuario...");
autenticarUsuario("Papá Noel");
}

function autenticarUsuario(usuario){
  console.log("Autenticando usuario...")
  console.log("Usuario" + usuario + "autenticando conéxito");
}