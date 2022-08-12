(() => {
    let b:boolean // Aqui no esta asignada
    let c: boolean = false

    b = true && false
    console.log({b})
    
    /** Aqui existe el error de tipado 
    
    c = ( c ) ? true : 'npi'
    console.log(c)

    */
   
})()