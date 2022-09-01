function sumarIva(precio){
    return precio + (precio * 0.21)
}


function calcularCarrito(){
    let sumador = 0 
    let ingDatos=prompt("Ingrese precio del pruducto a sumar o fin para terminar:")
    while(ingDatos != "fin" && ingDatos != "Fin"){
        sumador += parseFloat(ingDatos)
        ingDatos=prompt("Ingrese precio del pruducto a sumar o fin para terminar:")
    }
    if(sumador >= 10000){
        return `El precio total es de ${sumador} e incluye envio gratis!`
    }
    else{
        return `El precio total del carrito es ${sumador}`
    }
}


function consultarIva(){
    let producto= prompt("Ingrese nombre de producto")
    let entrada= parseFloat(prompt("Ingrese precio producto:"))
    let mensaje= `El precio del ${producto} por unidad mas iva es: `
    return (mensaje + sumarIva(entrada))
}


function menu(){
    let opcion= parseInt(prompt("1. Para consultar precio del producto mas IVA \n2. Para calcular el precio total del carrito \n3. Salir"))
    switch(opcion){
        case 1:
            alert(consultarIva())
            menu()
            break
        case 2:
            alert(calcularCarrito())
            menu()
            break
        case 3:
            alert("Gracias por su consulta")
    }
}


menu()