//Que quiero hacer ? 1-declarar los productos 2-poder usar esos productos

/*const productos = [ //1- Declaro el objeto productos en un array para poner los productos del supermercado
  {nombre: "Cookies", precio: 50,},
  {nombre: "Flour", precio: 100,}, //decalro los productos que tengo en  mi inventario
  {nombre: "Milk", precio: 150,},
  {nombre: "Beer", precio: 200,},
  {nombre: "Chocolate", precio: 250,},
];
 // 2 ahora hacemos el carrito
 //.prompt() = El método Window.prompt() muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
let carrito = []         //creo el carrito con una variable carrito

let seleccion = prompt("Hi! what do would you need...? yes or not ") //3 creamos la seleccion del los productos con un mensaje a travez de la funcion prompt("")
// preguntamos al cliente si necesita o no necesita algo y hacemos un bucle para elegir lo que el desee 
// usamos el bucle "wile" mientras..

while(seleccion !="yes" &&  seleccion != "not") { //4 realizamos el bucle while para saber si podmeos ayudar al cliente o no a traves del let seleccion.
  alert("Please, check your answer  ")
  seleccion = prompt("Hi! what do would you need...? yes or not ")
};

if(seleccion == "yes") {//5 si la respuesta es si , le mostramos los productos con un alert
  alert("follow for our list of products")
  let todoslosProductos = productos.map(// la funcion map nos sirve para recorrer lo que hay en cada onbjeto, en este caso nombre y precio 
    (producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "not"){//6 al ser no la respuesta, le birndamos el saludo de despedida con un nuevo alert 
  alert("thanks  for coming, see you soon ")
}

while(seleccion != "not") { //si el cliente confirme con un si y vio los productos , le mostramos los prodcutos para agrefarlos al carrito
  let producto = prompt("add a prducto to cart")
  let precio = 0 //7 Declaramos una nueva variable precio y arranca con el valor 0 , ya que iremos modificando los valores en cada producto para poder recorrerlos.

  if( producto == "Cookies" || producto == "Flour" || producto == "Milk" || producto == "Beer" || producto == "Chocolate") {//8 evaluamos caso por caso cuale es el precio de cada producto y agregarlo al carrito 
      switch(producto){
        case "Cookies":
          precio = 50;
          break;
        case "Flour":
          precio = 100;
          break;
        case "Milk":
          precio = 150;
          break;
        case "Beer":
          precio = 200;
          break;
        case "Chocolate":
          precio = 250;
          break;
        default:
          break
      }
      let unidades = parseInt(prompt("how many do you want to take?"))//9 declaro la variable unidades para saber cuantas unidades quiere llevar de cada producto
    
      carrito.push({producto, unidades, precio})//10 aca le agregamos al acrrito vacio los productos con la funcion push() de lo que vamos a agregar 
      console.log(carrito)
  } else {// en el caso de que el cliente pida un prodcto y no se sencuentre le saldra el mensaje que no tenmos el producto
    alert("there is not this product")
  }
   
  seleccion = prompt("Do you want to continue shopping ")// en el caso de que el cliente quiera seguir comprando le vamos a perguntar una vez que haya seleccionado un producto 

  while(seleccion === "not"){//12 si el cliente ya no quiera comprar le mostraremos el mensaje, gracias por su compra, hasta pronto 
    alert("thanks for you buy, see you soon")
    carrito.forEach((carritoFinal)=>{// en el caso que el cliente quiera agregar mas productps a su carrito, creamos la funcion carritoFinal y con forEach recorremos los productos que el desea agregar
    console.log(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}, Total to Pay ${carritoFinal.unidades * carritoFinal.precio}`)
    })//aca declaramos el carritoFinal con el producto, las unidades, y el precio a posterior hacemos el precio por las unidades para sacar el precio total
    break;//cerramos el bucle
  }

} 

const Total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)//para finalizar creamos la Const Total para aplicar el precio final con la funcion reduce
console.log(`Total for your buy is : ${Total}`)//tomamos todo lo agragado al carrito y usamos reduce para sacar el total de los productos, las unidades de los productios y el precio por cada uno de ellos




//reduce() Ejecuta una funcion sobre cada elemento de un "Array" devolviendo como resultado un unico valor, recibe dos valores el acumulador y el elemento (acc, el, y no olvidar valor inicial)
//map() el metodo map crea un nuevo "array" con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
//forEach() recorre la funcion indicada una ez por cada elemento 
//while() "mientra" crea un bucle que ejecuta una sentencia epcificada hasta que la condicion sea falsa
//&& "operador logico y" AND
//|| "operador logico o" OR
//parseInt() convertir un string en un entero de la base especificada
//switch()evalua una expresion comparando el valor de esa expresion con una instancia case y ejecuta declaraciones 
//if () si, condicional
//else entonces , derevado del if condicional 
//prompt()muestra un dialogo con mensaje opcional que solicita el usuario 
//alert()muestra un dialogo de alerta con un mensaje 
//join()une todos los elementos en una cadena y devuekve esa cadena 

*/
