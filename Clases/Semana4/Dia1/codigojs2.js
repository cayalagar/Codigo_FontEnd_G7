let jsonCarlos={
    nombre:"Carlos",
    apePaterno:"Ayala",
    apeMaterno:"Galarza",
};

let jsonHobbies={
    hobbies1:"Dormir",
    hobbies2:"Correr",
    hobbies3:"Comer",
};

let jsonMascota={
    mascota1:"Maky",
    mascota2:"Toby",
};

let a=2
let b=50
let c=3

let formulaCuadratica=Math.pow(b,2)-(4*a*b)
formulaCuadratica=((b*-1)+Math.sqrt(formulaCuadratica))/(2*a)

//let formulaCuadratica=((b*-1)+ Math.sqrt((b**2)-(4*a*b)))/(2 * a)
//formulaCuadratica=Math.sqrt(15)

alert(`Bienvenido ${jsonCarlos.nombre} ${jsonCarlos.apePaterno} ${jsonCarlos.apeMaterno}`);

console.log("Valor Cuadratico es", formulaCuadratica );
