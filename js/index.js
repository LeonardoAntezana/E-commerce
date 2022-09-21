// CLASE PRODUCTO
class Producto{
    constructor(id,nombre,tipo,precio, imagen,peso){
        this.id= id
        this.nombre= nombre
        this.tipo= tipo
        this.precio= parseFloat(precio)
        this.imagen= imagen
        this.peso = peso
    }

    sumaIva(){
        this.precio= this.precio * 1.21
        return this.precio
    }

    Descuento(){
        this.precio= this.precio - (this.precio * 0.10)
        return this.precio
    }

    mostrarP(){
        return `${this.nombre}      $${this.precio}`
    }
}

// STOCK DE PRODUCTOS
const productos=[new Producto(1,"Excellent","Gato", 7000, "./images/excellent.png", "15kg"),new Producto(2,"Pedigree","Perro",10000,"./images/pedigree.png", "10kg"), 
new Producto(3,"Dog Chow","Perro",5000, "./images/dog-chow.png","15kg"), new Producto(4,"Whiskas","Gato", 8000, "./images/whiskas.png", "7kg"),new Producto(5,"Heno","Otro",3000, "./images/heno.png", "500gr"),
new Producto(6,"Shulet","Otro",500, "./images/peces.png", "150gr"), new Producto(7, "ProPlan", "Gato",19000, "./images/Proplan-gato.png", "15kg"),
new Producto(8,"Royal Canin", "Gato",7800, "./images/royal-canin-gato.png", "7.5kg"), new Producto(9, "VitalCan", "Perro", 8870, "./images/vital-can-perro.png", "20kg"), 
new Producto(10,"Eukanuba", "Perro", 10425, "./images/eukanuba-perro.png", "15kg"),new Producto(11, "Proplan Puppy", "Perro", 3900, "./images/proplan-perro.png", "3kg"),
new Producto(12, "Nutrafin Max", "Otro", 680, "./images/nutrafin.png", "50gr"),new Producto(13, "Nutrafin Tortugas", "Otro", 460, "./images/nutrafin-tortugas.png", "20gr"),
new Producto(14,"Infinity", "Gato", 4185, "./images/infinity-gato.png", "10kg"),new Producto(15, "ProPlan Active Mind", "Perro", 3900, "./images/proplanActive-perro.png", "3kg"),
new Producto(16, "Maintenance Criadores", "Perro", 4140, "./images/mainCriadores.png", "22kg"),new Producto(17, "VitalCat (control de peso)", "Gato", 7535, "./images/vitalCat.png", "7.5kg"),
new Producto(18,"Old Prince Novel", "Perro", 8900, "./images/oldPrince.png", "15kg"),new Producto(19, "Vegetales para Canario Zootec", "Otro", 780, "./images/zootec-canario.png", "40gr"),
new Producto(20, "Veggie para Aves Zootec", "Otro", 525, "./images/veggieZootec.png", "100gr"),]

// VARIABLES GLOBALES
const totalCarrito = document.querySelector('#totalCarrito')
const containerCarrito = document.querySelector('#carrito-contenedor')
const verCatalogo = document.querySelector('#catalogo')
const carrito=[]
const buttonLimpiar = document.getElementById("vaciarCarrito")
buttonLimpiar.onclick = () => {
    carrito.length = 0
    mostrarCarrito()
    totalCarrito.innerHTML = "0"
}


// FUNCION PARA AGREGAR ELEMENTOS AL DOM
const Presentar = array => {
    array.forEach(producto =>{
        const card = document.createElement("div")
        card.className = "product"
        card.innerHTML = `<div><img src="${producto.imagen}" alt="img-alimento"></div>
                        <h2 class= "title">${producto.nombre}</h2>
                        <div class="datos">
                        <span class="precio">$${producto.precio}</span>
                        <span>${producto.peso}</span>
                        </div>
                        <label for=""><button id="add${producto.id}">agregar</button></label>`                     
        conteiner.appendChild(card)
        const boton = document.querySelector(`#add${producto.id}`)
        boton.onclick = () =>{
            agregarProducto(producto.id)
        }
    })
}


// ARROW FUNCTION PARA AGREGAR PRODUCTOS
const agregarProducto = productoId => {
    const producto = productos.find(elem => elem.id  === productoId)
    carrito.push(producto)
    mostrarCarrito()  
}

const eliminarProducto = productoId => {
    let product = carrito.find(elem => elem.id === productoId)
    let index = carrito.indexOf(product)
    carrito.splice(index,1)
    mostrarCarrito()
}

// MOSTRAR CARRITO
const mostrarCarrito = () => {
    containerCarrito.innerHTML = ""
    carrito.forEach(producto => {
        const div = document.createElement("div")
        div.className = "producto-carrito"
        div.innerHTML =`<span>${producto.nombre} ---- $${producto.precio}</span>
                        <button id="restar">Uno menos</button><button id="sumar">Uno mas</button>
                        <button id="quitar${producto.id}" class="boton-eliminar">Eliminar</button>`     
        containerCarrito.appendChild(div)
        const boton = document.querySelector(`#quitar${producto.id}`)
        boton.onclick = () => {
            eliminarProducto(producto.id)
        }
        let total =  carrito.reduce((acc,elem) => acc + elem.precio, 0)
        if(total >= 15000){
            totalCarrito.innerText = `${total} e incluye envio gratis!`
        }
        else{
            totalCarrito.innerText = `${total}`}
    })
}

// MAIN

const conteiner = document.querySelector("#conteiner__productos")
Presentar(productos)
verCatalogo.onclick = () => {
    conteiner.innerHTML= ""
    Presentar(productos)
}

const filtroPerro= productos.filter(elem => elem.tipo === "Perro")
const botonPerro = document.querySelector("#filtroPerro")

// AGREGANDO EVENTO PARA FILTRAR SOBRE PRODUCTOS TIPO PERRO
botonPerro.onclick = () => {
    conteiner.innerHTML = ""
    Presentar(filtroPerro)}


const filtroGato = productos.filter(elem => elem.tipo === "Gato")
const botonGato = document.querySelector("#filtroGato")
// AGREGANDO EVENTO PARA FILTRAR SOBRE PRODUCTOS TIPO GATO
botonGato.onclick = () => {
    conteiner.innerHTML = ""
    Presentar(filtroGato)
}

const filtroOtro = productos.filter(elem => elem.tipo === "Otro")
const botonOtros = document.querySelector("#filtroOtro")
// AGREGANDO EVENTO PARA FILTRAR SOBRE PRODUCTOS TIPO OTRO
botonOtros.onclick = () => {
    conteiner.innerHTML = ""
    Presentar(filtroOtro)
}



