

let nombre =`Jorge Armando Silva Barragan`; 
let edad = 38;
let altura = 1.8;
let soyEstudiante = true;
let direcciones = null;
let cambioRopa = undefined;
let listaPasatiempos = ["leer" , "guitarra" , "video juegos" , "escuchar musica"];
let caracteristicasPc = {
    sistema: "windows 10 pro 64x",
    ram: 12,
    disco: "SSD", 
    iluminacion(){
        return "si";
    }
}


let myStyle = `color: #fff;background: #b23a48;font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;border-radius: 5px;padding: 5px;`;
console.group(`%cNombre del estudiante`, myStyle);
    console.log(nombre);
console.groupEnd();
console.group(`%cEdad del estudiante`, myStyle);
    console.log(edad);
console.groupEnd();
console.group(`%cAltura del estudiante`, myStyle);
    console.log(altura);
console.groupEnd();
console.group(`%cPermiso para estudiar`, myStyle);
    console.log(soyEstudiante);
console.groupEnd();
console.group(`%cDirrecion del estudiante`, myStyle);
    console.log(direcciones);
console.groupEnd();
console.group(`%cRopa del estudianter`, myStyle);
    console.log(cambioRopa);
console.groupEnd();
console.group(`%cPasatiempos del estudiante`, myStyle);
    console.log(listaPasatiempos);
console.groupEnd();
console.group(`%cPC del estudiante`, myStyle);
    console.log(caracteristicasPc);
console.groupEnd();

