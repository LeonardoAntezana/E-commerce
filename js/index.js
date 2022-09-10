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

    Descuento(){
        this.precio= this.precio - (this.precio * 0.10)
        return this.precio
    }
}

// STOCK DE PRODUCTOS
const productos=[{id:1, nombre:"Heladera", desc:"electrodomestico", precio:100000}, {id:2, nombre:"Televisor", desc:"tecnologia", precio:70000}, 
{id:3, nombre:"Celular", desc:"tecnologia", precio:50000}, {id:4, nombre:"Cama", desc:"descanso", precio:120000},
{id:5, nombre:"Sillon", desc:"decoracion", precio:40000}, {id:6, nombre:"Cafetera", desc:"electrodomestico", precio:100000}]



// VARIABLES GLOBALES
const carrito=[]


// FUNCION CATALOGO
function MostrarCatalogo(){
    const catalogo= []
    productos.forEach((elem) => {catalogo.push(`${elem.id}. ${elem.nombre}  $${elem.precio}`)})
    alert(catalogo.join("\n"))
}

// FUNCION INGRESO DE PRODUCTOS AL CARRITO
function Ingreso(){
    let entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    while(entrada != "Fin" && entrada != "fin"){
        let productId= productos.find(product => product.id === parseInt(entrada))
        carrito.push(productId)
        MostrarCatalogo()
        entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    }
    if(carrito.length === 0){
        alert("Carrito vacio")
        Ingreso()
    }
    let carritoMsj= carrito.map(elem => `${elem.nombre}     $${elem.precio}`)
    alert(carritoMsj.join("\n"))
}

// FUNCION PRECIO FINAL DEL CARRITO
function TotalCarrito(){
    let total=carrito.reduce((acc, elem)=> acc+elem.precio, 0)
    let pago= prompt("El metodo de pago sera en efectivo o tarjeta?")
    if(pago.toLowerCase() == "efectivo"){
        alert(`El total de la compra mas descuento es: ` + (total-(total* 0.10)))
    }
    else if(pago.toLowerCase() == "tarjeta"){
        alert(`El total de la compra es: ${total}`)
    }
    else{
        alert("Opcion incorrecta")
        pago= prompt("El metodo de pago sera en efectivo o tarjeta?")
    }
}

// MAIN
MostrarCatalogo()
Ingreso()
TotalCarrito()










