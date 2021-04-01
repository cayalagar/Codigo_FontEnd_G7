// Objetos, es una coleccion de propiedades 

/*  let miObjeto =new Object();

miObjeto.propiedad1='es un objeto'
miObjeto.propiedad2='es otra propiedad 2'
miObjeto.propiedad3='es la tercera propíedad'

miObjeto.getpropiedad1=function(){
        return this.propiedad1
};

let miObjeto2 = {
    propiedad1:'..1..',
    propiedad2:'..2..',
    propiedad3:'..3..',
};

console.log(miObjeto.getpropiedad1())
console.log(miObjeto["propiedad3"])
console.log(miObjeto2["propiedad2"])
 */

function Carro (marca, modelo, anio){
    this.marca=marca
    this.modelo=modelo
    this.anio=anio
}

let miBus = new Carro("yakas wagen","lo mejor",2030) 

miBus.anio
miBus.marca
miBus.modelo