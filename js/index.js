// CLASE USUARIO
class Usuario{
    constructor(name,password){
        this.name= name
        this.password= password
    }
}
// CLASE PRODUCTO
class Producto{
    constructor(id,nombre,tipo,precio){
        this.id= id
        this.nombre= nombre
        this.tipo= tipo
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

    mostrarP(){
        return `${this.nombre}      $${this.precio}`
    }
}

// STOCK DE PRODUCTOS
const productos=[new Producto(1,"Excellent","Gato", 7000),new Producto(2,"Pedigree","Perro",10000), 
new Producto(3,"Dog Chow","Perro",5000), new Producto(4,"Whiskas","Gato", 8000),new Producto(5,"Heno","Otro",3000),
new Producto(6,"Shulet","Otro",500),]



// VARIABLES GLOBALES
const carrito=[]
const catalogo= []
const usuarios=[new Usuario("Furixxx","1234"), new Usuario("Blade","4567"), new Usuario("Leoni","8901")]


// FUNCION LOGIN
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


// FUNCION CATALOGO
function Catalogo(){
    productos.forEach((elem) => {catalogo.push(`${elem.id}. ${elem.nombre}  $${elem.precio}`)})
}

// FUNCION INGRESO DE PRODUCTOS AL CARRITO
function Ingreso(){
    let entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    while(entrada != "Fin" && entrada != "fin" && entrada != ""){
        let productId= productos.find(product => product.id === parseInt(entrada))
        carrito.push(productId)
        alert(catalogo.join("\n"))
        entrada= prompt("Ingrese numero del producto a agregar al carrito o Fin para terminar")
    }
    if(carrito.length === 0){
        alert("El carrito esta vacio")
        menu()
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


// FUNCION MENU
const menu = () =>{
    let entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir")
    )
    if(typeof(entrada) === NaN){
        alert("Opcion incorrecta")
        entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir")
    )
    }    
    switch(entrada){
        case 1:
            alert(catalogo.join("\n"))
            Ingreso()
            login()
            break
        case 2:
            let filtroGato= productos.filter(elem => elem.tipo === "Gato")
            let mostrar= filtroGato.map(elem => `${elem.nombre}      $${elem.precio}`)
            alert(mostrar.join("\n"))
            break
        case 3:
            let filtroPerro= productos.filter(elem => elem.tipo === "Perro")
            let mostrarPerros= filtroPerro.map(elem => `${elem.nombre}      $${elem.precio}`)
            alert(mostrarPerros.join("\n"))
            break
        case 4:
            let filtroOtro= productos.filter(elem => elem.tipo === "Otro")
            let mostrarOtros= filtroOtro.map(elem => `${elem.nombre}      $${elem.precio}`)
            alert(mostrarOtros.join("\n"))
            break
        case 5:
            alert("Hasta luego...")
            break
        default:
            alert("Opcion incorrecta")
            entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir")
            )
            break
        }
    }

// MAIN
Catalogo()
menu()






