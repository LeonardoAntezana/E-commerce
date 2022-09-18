// CLASE USUARIO    |  ESTA CLASE LA VOY A UTILIZAR SOLO QUE POR TIEMPOS DECIDI DARLE MAS IMPORTANCIA A LOS PRODUCTOS   |
class Usuario{
    constructor(name,password){
        this.name= name
        this.password= password
    }
}
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

// VARIABLES GLOBALES
const carrito=[]
const usuarios=[new Usuario("Furixxx","1234"), new Usuario("Blade","4567"), new Usuario("Leoni","8901")]
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

// FUNCION LOGIN  |  ESTA FUNCION LA VOY A UTILIZAR SOLO QUE POR TIEMPOS DECIDI DARLE MAS IMPORTANCIA A LOS PRODUCTOS   |
const login = () =>{
    let user= new Usuario(prompt("Ingrese nombre de usuario"),prompt("Ingrese clave"))
    let validacion= usuarios.some(elem => elem.name === user.name && elem.password === user.password)
    if(validacion == true){
        TotalCarrito()
    }
    else{
        alert("Usuario no encontrado")
        login()
    }
}


// FUNCION FILTRADO
const filtrado = (array, tipo) => {
    let filtro = array.filter(elem => elem.tipo === tipo)
    let mostrar = filtro.map(elem => elem.mostrarP())
    let mostrarProductos= mostrar.join("\n")
    alert(mostrarProductos)  
}


// AGREGAR AL CARRITO
const addProduct = (array, tipo) => {
    filtrado(array,tipo)
    let entrada = prompt("Ingrese nombre del producto a agregar al carrito o fin para terminar")
    while(entrada.toLowerCase() != "fin"){
        let prodId = productos.find(elem => elem.nombre === entrada)
        if(prodId === undefined){
            alert("Opcion incorrecta")
            filtrado(array,tipo)
            entrada = prompt("Ingrese nombre del producto a agregar al carrito o fin para terminar")   
        }
        else if(prodId != undefined){
            carrito.push(prodId)
        }
        entrada = prompt("Ingrese nombre del producto a agregar al carrito o fin para terminar")
    }
    menu()
}


// FUNCION MENU
const menu = () =>{
    let entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para ver el carrito\n6. Para salir"))    
    switch(entrada){
        case 1:
            let catalogo = productos.map(elem => elem.mostrarP())
            let mostrarCatalogo= catalogo.join("\n")
            alert(mostrarCatalogo)
            menu()
            break
        case 2:
            addProduct(productos,"Gato")
            break
        case 3:
           addProduct(productos, "Perro")
            break
        case 4:
            addProduct(productos, "Otro")
            break
        case 5:
            if(carrito.length === 0){
                alert("El carrito se encuentra vacio")
                menu()
            }
            let total = carrito.reduce((acc, elem) => acc + elem.precio, 0)
            let mostrar= carrito.map(elem => elem.mostrarP())
            alert(`${mostrar.join("\n")}\nTotal : $${total}`)
            menu()
            break 
        case 6:
            alert("Hasta luego...")
            break
        default:
            alert("Opcion incorrecta")
            menu()
            break
        }
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
                        <label for=""><button>agregar</button></label>`                     
        conteiner.appendChild(card)
    })
}


// MAIN
const conteiner = document.querySelector("#conteiner__productos")
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

Presentar(productos)