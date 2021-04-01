console.log("El hostname es :",location.hostname);
console.log("El host es :",location.host);
console.log("La ruta es :",location.pathname);

let contador=0;

let intervalo = setInterval(() => {
    console.log("Hola mundo");
}, 3000);

/* trabaja en la memoria del navegador */

window.localStorage.setItem("contrasena","1234")

let contra= window.localStorage.getItem("contrasena")
console.log(contra)

let profile =window.localStorage.setItem("tema","claro")
window.localStorage.removeItem("contra")
window.localStorage.clear()

if(window.confirm("Deseas eliminar las variables guardas en el local storage")){
    alert("Hey las variable ya fueron ... :D")
    window.localStorage.clear()
}
