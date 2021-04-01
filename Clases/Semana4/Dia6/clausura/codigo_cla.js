
//scope - espacio disponible enre las llaves
/* function ejemplo(){
    let texto="Hola Carlos ... "

    function montrarTexto(){
        alert(texto)
    }

    montrarTexto();
}

let ejecutaFuncion=ejemplo()

ejecutaFuncion() */

function sumatoriaDeNumeros(x){
        return function(y){
            return x + y
        }
//        return (y) => x+y;
}

let suma5=sumatoriaDeNumeros(5)

//console.log(suma5());
console.log(suma5(1));