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

const catalogo= []
const carrito=[]
productos.forEach((elem) => {catalogo.push(`${elem.id}. ${elem.nombre}  $${elem.precio}`)})

function MostrarCatalogo(){
    alert(catalogo.join("\n"))
}

function Ingreso(){
    let entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    while(entrada != "Fin"){
        let productId= productos.find(product => product.id === parseInt(entrada))
        carrito.push(productId)
        MostrarCatalogo()
        entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    }
    let carritoMsj= carrito.map(elem => `${elem.nombre}     $${elem.precio}`)
    alert(carritoMsj.join("\n"))
}

MostrarCatalogo()
Ingreso()
let total=carrito.reduce((acc, elem)=> acc+elem.precio, 0)
alert(`El total de la compra es: ${total}`)
let pago= prompt("El metodo de pago sera en efectivo o tarjeta?")
if(pago == "efectivo"){
    alert(`El total de la compra mas descuento es: ` + (total-(total* 0.10)))
}










