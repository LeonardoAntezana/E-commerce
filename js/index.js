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

// VARIABLES GLOBALES
const carrito=[]
const usuarios=[new Usuario("Furixxx","1234"), new Usuario("Blade","4567"), new Usuario("Leoni","8901")]
// STOCK DE PRODUCTOS
const productos=[new Producto(1,"Excellent","Gato", 7000),new Producto(2,"Pedigree","Perro",10000), 
new Producto(3,"Dog Chow","Perro",5000), new Producto(4,"Whiskas","Gato", 8000),new Producto(5,"Heno","Otro",3000),
new Producto(6,"Shulet","Otro",500),]


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
        carrito.push(prodId)
        entrada = prompt("Ingrese nombre del producto a agregar al carrito o fin para terminar")
    }
    menu()
}


// FUNCION MENU
const menu = () =>{
    let entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir\n6. Para ver el carrito"))
    if(typeof(entrada) === NaN){
        alert("Opcion incorrecta")
        entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir\n6. Para ver el carrito"))
    }    
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
            alert("Hasta luego...")
            break
        case 6:
            if(carrito.length === 0){
                alert("El carrito se encuentra vacio")
                menu()
            }
            let total = carrito.reduce((acc, elem) => acc + elem.precio, 0)
            let mostrar= carrito.map(elem => elem.mostrarP())
            alert(`${mostrar.join("\n")}\nTotal : $${total}`)
            menu()
            break 
        default:
            alert("Opcion incorrecta")
            entrada=parseInt(prompt("1. Para ver el catalogo completo\n2.Para productos de gatos\n3.Para ver productos de perros\n4. Para ver productos para otras mascotas\n5. Para salir\n6. Para ver el carrito")
            )     
            break
        }
    }

// MAIN
menu()






