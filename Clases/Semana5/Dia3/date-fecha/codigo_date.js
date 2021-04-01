/* const ahora= new Date();
console.log(ahora);

const milisegundos=ahora.getTime();
console.log(milisegundos);

const fechaString= new Date("july 28 1821 12:00");
console.log(fechaString);

const anio=fechaString.getFullYear()
const mes=fechaString.getMonth()
const diaMes=fechaString.getDate()
const diaSemana=fechaString.getDay()

console.log(anio);
console.log(mes);
console.log(diaMes);
console.log(diaSemana);

function obtener_edad(anioNaci){
    const hoy = new Date();

    return (hoy.getFullYear()-anioNaci)
};

console.log(obtener_edad(1981))
 */
// ******************************************** //


function laedadexacta(tu_cumple){
//    const fechaString= new Date("November 6 1981 05:00");

    const fechaString= new Date(tu_cumple);
    const hoy = new Date();
    const anio=(hoy.getFullYear()-fechaString.getFullYear())-1 ;
    const mes=11-Math.abs(hoy.getMonth()-fechaString.getMonth()) ;
    const diaMes=Math.abs(hoy.getDate()-fechaString.getDate());

    console.log("Han transcurido: "+ anio + "años")
    console.log("Han transcurido: "+ mes +"mes")
    console.log("Han transcurido: "+ diaMes + "dia")
}

//laedadexacta("November 6 1981 05:00");
//laedadexacta("December 6 1981 05:00");
//laedadexacta("July 6 2000 05:00");
laedadexacta("April 6 2010 05:00");