/* let mi_nombre = prompt("Adivina mi nombre!!!");

if (mi_nombre.toLowerCase() !== "carlos") {
  while (mi_nombre.toLowerCase() !== "carlos") {
    let match = prompt("Sigue intentando!!!");
    if (match.toLowerCase() == "carlos") {
      alert("Hey!! , adivinaste mi nombre");
      break;
    }
  }
} else {
  alert("Hey!! , adivinaste mi nombre");
}
 */

/* let mi_nombre = prompt("Adivina mi nombre!!!");
do{
    mi_nombre= prompt("Sigue intentando!!!");
}while(mi_nombre.toLowerCase() !== "carlos") */

function adi_mi_nombre(mi_nombre){
    mi_nombre=prompt("Adivina mi nombre!!!");
    if (mi_nombre.toLowerCase() == "carlos") {
        alert("Hey!! , adivinaste mi nombre");
        return;
    }
    adi_mi_nombre(mi_nombre);
}

adi_mi_nombre();