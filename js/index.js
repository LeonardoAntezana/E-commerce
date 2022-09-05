// CLASE USUARIO
class Usuario{
    constructor(name,password){
        this.name= name
        this.password= password
    }
}
// CLASE PRODUCTO
class Producto{
    constructor(nombre, precio){
        this.nombre= nombre
        this.precio= parseFloat(precio)
    }

    sumaIva() {
        this.precio= this.precio + (this.precio * 0.21)
        return this.precio
    }
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
    let nombre= prompt("Ingrese nombre de producto")
    let precio= prompt("Ingrese precio producto:")
    let producto= new Producto(nombre, precio)
    return (`El precio del ${producto.nombre} por unidad mas iva es: ` + producto.sumaIva() )
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
            break
        default:
            alert("Opcion incorrecta")
            menu()
    }
}


// menu()
// const carrito = []
// let nombre = prompt("Nombre del producto:")
// let precio = prompt("Precio:")
// const producto = new Producto(nombre,precio)
// carrito.push([producto])
// console.log(carrito) 