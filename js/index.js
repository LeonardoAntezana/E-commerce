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

    sumaIva(){
        this.precio= this.precio * 1.21
        return this.precio
    }
}


function consultarIva(){
    let nombre= prompt("Ingrese nombre de producto")
    let precio= prompt("Ingrese precio producto:")
    let producto= new Producto(nombre, precio)
    return (`El precio del ${producto.nombre} por unidad mas iva es: ` + producto.sumaIva() )
}


function buy(){
    let nombre, precio
    const carrito = []
    let sumador = 0
    nombre= prompt("Ingresar nombre de producto o fin para terminar")
    while(nombre != "fin"){
        precio= prompt("Ingresar precio:")
        carrito.push(new Producto(nombre,precio))
        nombre= prompt("Ingresar nombre de producto o fin para terminar")
    }
    alert("Mostrando carrito:")
    for(const product of carrito){
       product.sumaIva() 
    }

    for( let product of carrito){
        alert(`${product.nombre}    $ ${product.precio}` )
    }
    for( let product of carrito){
        sumador += product.precio 
    }

    envioGratis(sumador)
}



function menu(){
    let opcion= parseInt(prompt("1. Para consultar precio del producto mas IVA \n2. Para agregar productos a su carrito \n3.Salir"))
    switch(opcion){
        case 1:
            alert(consultarIva())
            menu()
            break
        case 2:
            buy()
            menu()        
        case 3:
            alert("Gracias por su consulta")
            break
        default:
            alert("Opcion incorrecta")
            menu()
    }
}



function envioGratis(total){
    if(total >= 11000){
        alert(`El total del carrito es ${total} e incluye envio gratis`)
    }
    else{
        alert(`El total del carrito es ${total}`)
    }
}

// MAIN
menu()










