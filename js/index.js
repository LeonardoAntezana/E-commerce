// CLASE PRODUCTO
class Producto{
    constructor(id,nombre,tipo,precio, imagen,peso, cantidad){
        this.id= id
        this.nombre= nombre
        this.tipo= tipo
        this.precio= parseFloat(precio)
        this.imagen= imagen
        this.peso = peso
        this.cantidad = cantidad
    }
}

// VARIABLES GLOBALES
let productos = []
const conteiner = document.querySelector("#conteiner__productos")
const totalCarrito = document.querySelector('#totalCarrito')
const containerCarrito = document.querySelector('#carrito-contenedor')
const verCatalogo = document.querySelector('#catalogo')
let carrito=[]
const cardCarrito = document.querySelector('.card__carrito')
const buttonLimpiar = document.getElementById("vaciarCarrito")
const botonPerro = document.querySelector("#filtroPerro")
const botonGato = document.querySelector("#filtroGato")
const botonOtros = document.querySelector("#filtroOtro")
const labelBuy = document.querySelector('#conteinerComprar') 
const search = document.querySelector('#buscador')


const botonComprar = () => {
    if(carrito.length > 0){
        labelBuy.innerHTML= ""
        let buttonBuy = document.createElement('button')
        buttonBuy.className = 'botonComprar'
        buttonBuy.innerText = 'FINALIZAR COMPRA'
        labelBuy.appendChild(buttonBuy)
        buttonBuy.onclick = () => {
            Swal.fire({
                icon: 'question',
                iconColor:'#95b8f6',
                title: `Desea finalizar la compra?`,
                padding: '1em',
            })
        }
    }
    else{
        labelBuy.innerHTML = ""
    }   
}

// EVENTO PARA LIMPIAR CARRITO
buttonLimpiar.onclick = () => {
    if(carrito.length > 0){
        Swal.fire({
            icon: 'info',
            iconColor:'#95b8f6',
            title: `Se vacio el carrito`,
            padding: '1em',
            showConfirmButton: false,
            timer: 2000,
            toast:true,
            position:'center',
    })
    }
    carrito.forEach(elem => {
        elem.cantidad = 1
    })
    
    carrito.length = 0
    mostrarCarrito()
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
    const productR = carrito.some(elem => elem.id === productoId)
    if(productR){
        const producto = carrito.find(elem => elem.id  === productoId)
        producto.cantidad ++
        Swal.fire({
            icon: 'success',
            iconColor:'#95b8f6',
            title: `Se agrego una unidad mas de ${producto.nombre} al carrito`,
            padding: '1em',
            showConfirmButton: false,
            timer: 2000,
            toast:true,
            position:'top',
        })
    }
    else{
        const producto = productos.find(elem => elem.id  === productoId)
        carrito.push(producto)
        Swal.fire({
            icon: 'success',
            iconColor:'#95b8f6',
            title: 'Se agrego al carrito el producto',
            text: `${producto.nombre}`,
            padding: '1em',
            showConfirmButton: false,
            timer: 2000,
            toast:true,
            position:'top',
        })
    }
    mostrarCarrito()  
}

const eliminarProducto = productoId => {
    let product = carrito.find(elem => elem.id === productoId)
    let index = carrito.indexOf(product)
    product.cantidad = 1
    carrito.splice(index,1)
    mostrarCarrito()
    Swal.fire({
        icon: 'error',
        title: 'Se elimino del carrito el producto',
        text: `${product.nombre}`,
        padding: '1em',
        showConfirmButton: false,
        timer: 2000,
        toast:true,
        position:'bottom',
    })
}

const restarCantidad = productoId => {
    let item = carrito.find(elem => elem.id === productoId)
    item.cantidad --
    if(item.cantidad <=0){
        item.cantidad = 1
    }
    else{
        Swal.fire({
            icon: 'error',
            title: `Se elimino una unidad mas de ${item.nombre} al carrito`,
            padding: '1em',
            showConfirmButton: false,
            timer: 2000,
            toast:true,
            position:'top',
    })
    }
    mostrarCarrito()
}

const sumarCantidad = productoId => {
    let item = carrito.find(elem => elem.id === productoId)
    item.cantidad ++
    Swal.fire({
        icon: 'success',
        iconColor:'#95b8f6',
        title: `Se agrego una unidad mas de ${item.nombre} al carrito`,
        padding: '1em',
        showConfirmButton: false,
        timer: 2000,
        toast:true,
        position:'top',
})
    mostrarCarrito()
}

// MOSTRAR CARRITO
const mostrarCarrito = () => {
    containerCarrito.innerHTML = ""
    botonComprar()
    carrito.forEach(producto => {
        const div = document.createElement("div")
        div.className = "producto-carrito"
        div.innerHTML =`<p>${producto.nombre}</p>
                        <span>$${producto.precio}</span>
                        <div class="quantity">Cantidad: ${producto.cantidad}</div>
                        <div class= "botones"><button id="restar${producto.id}">Uno menos</button><button id="sumar${producto.id}">Uno mas</button>
                        <button id="quitar${producto.id}" class="boton-eliminar">Eliminar</button>
                        </div>`     
        containerCarrito.appendChild(div)
        const boton = document.querySelector(`#quitar${producto.id}`)
        boton.onclick = () => {
            eliminarProducto(producto.id)
        }
        const botonRestar = document.querySelector(`#restar${producto.id}`)
        botonRestar.onclick = () => {
            restarCantidad(producto.id)
        }
        const botonSumar = document.querySelector(`#sumar${producto.id}`)
        botonSumar.onclick = () => {
            sumarCantidad(producto.id)
        }
        }
    )
        localStorage.setItem('carrito', JSON.stringify(carrito))
        let total =  carrito.reduce((acc,elem) => acc + elem.precio * elem.cantidad, 0)
        total > 15000 ? totalCarrito.innerText = `$${total} e incluye envio gratis!` : totalCarrito.innerText = `$${total}`  

}

// LOCALSTORAGE
const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
if(carritoStorage){
    carrito = carritoStorage
    mostrarCarrito()
}

// EVENTOS DE FILTRO POR TIPO DE ANIMAL

const filters = array => {
    verCatalogo.onclick = () => {
        conteiner.innerHTML= ""
        Presentar(array)
    }
    const filtroGato = array.filter(elem => elem.tipo === "Gato")
    botonGato.onclick = () => {
        conteiner.innerHTML = ""
        Presentar(filtroGato)
        }
    const filtroOtro = array.filter(elem => elem.tipo === "Otro")
    botonOtros.onclick = () => {
        conteiner.innerHTML = ""
        Presentar(filtroOtro)
    }
    const filtroPerro= array.filter(elem => elem.tipo === "Perro")
    botonPerro.onclick = () => {
        conteiner.innerHTML = ""
        Presentar(filtroPerro)
    }

}

// FILTRADO A TRAVES DE DATOS DE USUARIO
const buscar = (array) => {
    search.addEventListener('input', () => {
        let valor = search.value
        const filtro = array.filter(producto => producto.nombre.includes(valor))
        conteiner.innerHTML = ""
        if(filtro.length === 0){
            
        }
        Presentar(filtro)
    })
}

// CARGANDO DATOS DE ARCHIVO JSON
const cargarStock = async () => {
    let obtencion = await fetch('js/stock.json')
    let parseo = await obtencion.json()
    return parseo
}

cargarStock()
    .then(array => {
        array.forEach(producto => {
            const {id,nombre,tipo,precio,imagen,peso,cantidad} = producto
            productos.push(new Producto(id,nombre,tipo,precio,imagen,peso,cantidad))
        })
        Presentar(productos)
        filters(productos)
        buscar(productos)
    })
    




