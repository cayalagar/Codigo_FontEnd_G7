// FUNCION RECURSIVA //

function recursividad(contador){
    if(contador>=10){
        return; 
    }
    console.log(contador);
    recursividad(contador + 1);
}

console.log(recursividad(1));
