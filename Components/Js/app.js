//eliminar producto
//manrjar cantidades 
//Agregar un contador de productos en el navbar 


const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modalcontainer")
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []; ///el carrito es lo que esta guardaddo en el lS o es un array vacio

//1 recorrer los productos
//2 creamos los elementos html desde js con el fotEach

// recorro cada objeto y le asigno elementos Html 
productos.forEach((product)=>{// con el metodo forEach recorremos todos los productos del "Array productos, uno por uno"
  let content = document.createElement("div")// le asignamos los elementos html al div y a los productos con , creando una variable let content que va a contener un "div", una vez creado, debemos tener un "padre" para poder asignarle el hijo q es el que acabamos de crear, el padre debe esttar en el index HTML.
  content.className= "card"
  content.innerHTML = ` 
  <img src="${product.img}">  
  <h3 class="nombre-producto">${product.nombre}</h3> 
  <p class="price">$${product.precio}</p>
  <p class="#cantidad">cantidad: ${product.cantidad}</p>
  `
  ; //le asignamos el valor a la variable conten , que sea igual a "document" que nos referimos al documento del Dom HTML y le agregamos la funcion createElement document.createElement y creamos el "div"
  //posterior, le creaal innerHTML que es el indice html pero lo creamos desde js llamando a la variable con la funcion innerHTML y con la comilla invertida `` y el signo ${} podemos agregar elementos HTML desde js. en este caso creamos una etiqueta <img>, <h3> y <p>
  //propiedad append(); inserta un conjunto de objetos Node u objetos de cadena despues del ultimo hijo del elemento. los objetos de cadena se insertan como nodos de texto equivalentes.
  shopContent.append(content); // no olvidar que todos los elementos deben estar dentro de la funcion cuando creamos los elementos de HTMl.


//hago Boton

  let comprar = document.createElement("button") // creamos el elemento html button de la misma forma que creamos para el div,img,h3 y p. con document.createElement("")
  comprar.innerText = "Comprar"; // una vez creado el elemento le asigno el texto comprar porq solo quiero que tenga un texto
  comprar.className = "comprar"
  //le agrego  el boton al content con .append() compar quedaria como el renglon de abajo 
  content.append(comprar); // le agregamos el boton que creamos al contenido con el nombre de la cariable let content como cualquier otro elemento HTML
  
  //agregamos el escuchador de eventeos, que es "que es lo que quiero que suceda cuando pase tal cosa, en este caso seria click"
  // agregamos interaccion 

  comprar.addEventListener("click",()=>{//a travez de el evento addEventListener("click") , que por cada click que realicemos agregue el producto seleccionado con sus propiedades, ej id, precio, imagen y nombre.
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id)
    
    if (repeat){
      carrito.map((prod) => {
        if(prod.id === product.id) {
          prod.cantidad++;
        }
      })
    } else {
      carrito.push({// push, agrega elementos a un array , en este caso por cada click le agregamos los elementos que seleccionemos al Array vacio "carrito" - ver mas arriba
        id:product.id,
        img:product.img,
        nombre:product.nombre,
        precio:product.precio,
        cantidad:product.cantidad
      });
      console.log(carrito)
      console.log(carrito.length)
      carritoCounter();
      saveLocal();
    }
  });
});
//creamos el modal resumen de compra o tarjeta para el carrito de compras que nos diga que es lo q no es estamos llevando y cuanto es para pagar 

//set item guardar
const saveLocal = () =>{
  
  localStorage.setItem("carrito", JSON.stringify(carrito)) // al localstorage solo recibe strings por eso lo pasamos a string
  
}

//get item obtener lo que guardamos

//