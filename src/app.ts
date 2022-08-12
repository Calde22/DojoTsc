//Inferencia de Datos

// No puede cambiar
/* 
const num = 10
*/
//Pasar a 
const num:number =10

//Problema de no Definir Ganar Flexibilidad a costa de perder Control !!!!
let b 
b = 3.14251
b = {}


//No tener implicito el <any> 
/*
configurar el el <tsconfig.json> el hablitiar la propiedad "noImplicitThis": true

function funNew ( msg){
    console.log(msg)
}
*/
function funNew ( msg: string ){
    console.log(msg)
}