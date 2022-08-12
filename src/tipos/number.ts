(() =>{
    
    //Generando el error 
    //let mynumber;
    
    //Sin Error
    let mynumber:number = 5;

    console.log(mynumber)

    const myfavNumber:number = 20

    if (mynumber < myfavNumber){
        console.log('es el nuemro Noooooo')
    }else{
        console.log('Mi numero')        
    }
    // TS NO es Dios .....
    let _mynumber = Number('88A') // Salida de esto es NaN , NaN en Js se considera un Numero
    console.log({_mynumber})

})()