

const pintarCarrito = () => {
  
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  
 const modalHeader = document.createElement("div")// dentro de ese vercarrito, le creamos un modal o plantilla de resumen de compra, creando primero un div, creando la const nombre.document.createeElement(div)
 modalHeader.className = "modal-header";//le damos una clase a la constante con el nuevo elemento
 modalHeader.innerHTML = `
 <h1 class="modale-header-title">Carrito.</h1>
 `;

 // creamos un h1 con innerHTML y le damos una clase a ese h1 para luego darle estilo

 modalContainer.append(modalHeader)

// al id padre "modalcontainer" que esta en el index.html, le agregamos el modalHeader con los elementos creados, quedando modalcontainer con un div hijo

 const botonModal = document.createElement("h1"); // creamos un boton con createElementbyId() con la constante botonModal
 botonModal.innerText = "❌" // a la constante botonModal le agregamos elemento de texto con innerText, en este caso una x para q luego esa x sea para cerrar el modal o resumen de compra
 botonModal.className = "modal-header-button" // le agregamos una clase al boton para luego darle estilo



 botonModal.addEventListener("click",() => { // creamos el evento , que cuando hagamos click en la "X" se ciere la ventana
    modalContainer.style.display = "none"
 });


 modalHeader.append(botonModal);  // al modal header que esta dentro de modalcontainer le agregamos tambien el boton que ya creamos mas arriba 


  carrito.forEach((product) =>{ //recorremos el carrito con forEach por que quiero mostrar todo el contenido de los productos seleccionados  para eso..
    let carritoContent = document.createElement("div") // creo una nueva valiable <div> con el nombre de carritoContent
    carritoContent.className = "modal-content"// una vez creado el div , le doy una clase 
    carritoContent.innerHTML = ` 
      <img src="${product.img}",
      <h3>${product.nombre}</h3>
      <p>${product.precio}</p>
      <span class="restar">   -   </span>
      <p>cantidad: ${product.cantidad} </p>
       <span class="sumar">   +   </span>
      <p>Total: ${product.cantidad * product.precio}</p>
        `;
      //acá arriba creamos en la variable carritoContent, junto con innerHTML "carritoContent.innerHTML", le agregamos los elementos al HTML, de los productos que queremos que se vean en el carrito final, junto con su img, nombre y precio

      //todo esto le agregamos a la variable modalContainer que es lo que ya creamos anteriormente, con el header, el boton, ahora le agregamos los productos con append()

      modalContainer.append(carritoContent);// Agregamos carritocontent a > modalContainer

      let restar = carritoContent.querySelector(".restar") // llamamos la clase restar como en css

      restar.addEventListener("click",() =>{// le doy la funcion restar al boton restar
        if(product.cantidad !== 1) {
          product.cantidad--;
          }
          saveLocal()
          pintarCarrito()
      });


      let sumar = carritoContent.querySelector(".sumar")
       
      sumar.addEventListener("click",()=>{
        product.cantidad++
        saveLocal()
        pintarCarrito();
      })
      
      //creamos un boton eliminar
       
       let eliminar = document.createElement("span");
       eliminar.innerText = "❌";
       eliminar.className = "delete-product";
       carritoContent.append(eliminar);

       eliminar.addEventListener("click", (eliminarProducto));
  })




  //creamos el total 
 
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0) // creamos la const total para sumar los productos y sus cantidades con la funcion de js reduce (ver ej en plantilla)
  
  
  const totalCompra = document.createElement("div") // creamos una const total de compra, ya que el metodo reduce solo me suma los elementos del precio, creamos un div , ya q es un nuevo elemento el q vamos a agregar 
  totalCompra.className = "total-content" // agregamos una clase al nuevo elemento "div"
  totalCompra.innerHTML = `Total a pagar: $ ${total} ` //al total de la compra le agregamos dentro del elemento HTML el total que hicimos arriba 
  modalContainer.append(totalCompra);

}

verCarrito.addEventListener("click", pintarCarrito ) 

//funcion del bototn eliminar
// encuentro el elemento del carrito 
const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id) // traigo ese elemento con find()

  carrito = carrito.filter((carritoId) => { //recorro el carrito con filter y pido que retorne los productos distintos a la funcion que cree arriba 
    return carritoId !== foundId; //distinto al elemeto id, por que eso es lo que el usuario quiere eliminar 
  })

  carritoCounter()
  saveLocal()
  pintarCarrito()
  
};

  const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
}

carritoCounter();