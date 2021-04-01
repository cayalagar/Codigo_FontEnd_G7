 const  misdatos=[
    {
        nombre: "carlos",
        edad: "39",
        altura: "1.60",
    },
    {
        nombre: "carlos",
        edad: "39",
        altura: "1.60",
    },
    {
        nombre: "carlos",
        edad: "39",
        altura: "1.60",
    }
];


function generarID(xnombre, xedad){
    console.log(typeof(xnombre));
    return xnombre + xedad + 2;
}

console.log(generarID(misdatos[0].nombre,misdatos[0].edad ))