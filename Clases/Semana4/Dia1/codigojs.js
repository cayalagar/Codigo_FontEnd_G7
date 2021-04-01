// comentario de una linea 

/*
    comentario devarias lineas :D
*/
 // alert("Hola Soy Carlos")

 //Inicializar variables

 let nombre="Carlos";

 let sistemaoperativo="Windows";

// alert("Mi nombre es " + nombre +" y uso el sistema operativo " + sistemaoperativo )

alert(`Mi nombre es ${nombre} y uso el sistema operativo ${sistemaoperativo}`);

let celsius=1;
let fahrenheit=(celsius*(9/5)+32);
console.log("Celsius a fahrenheit:",fahrenheit );

celsius=((fahrenheit-32)/(9/5));
console.log("fahrenheit a Celsius :",celsius );

let soyFrontend=true ;
let soyMachineLearning=false;

//JSON --> Javascript Object Notacion 

let json2={
    valor1:"Poemas",
};

let json={
    propiedad1:"Valor de Texto",
    propiedad2:34,
    propiedad3:true,
    propiedad4:json2,
};

let jsonCarlos={
    nombre:"Carlos",
    apePaterno:"Ayala",
    apeMaterno:"Galarza",
};

let nombreCompleto=`${jsonCarlos.nombre} 
                    ${jsonCarlos.apePaterno} 
                    ${jsonCarlos.apeMaterno}`;

console.log("Mi nombre completo es ", nombreCompleto);

//Vamos a almacenar nuestros hobbies, mascotas, si somos hombre tru/flase
// alerta con mi nombre y bien venida
// 

