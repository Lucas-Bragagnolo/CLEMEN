function openTab(evt, tabName) { 
    const tabcontent = document.getElementsByClassName('tabcontent');
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    const tablinks = document.getElementsByClassName('tablink'); 

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

//la funcion de arriba tambien hace que al principio solo se muestre el tab1




//selector por id
//const onePage = document.getElementById('onepage') ;

//console.log(onePage);


//selector por clase
const tabcontent = document.getElementsByClassName('tabcontent');
const tablinks = document.getElementsByClassName('tablink');

// agregar clases a los elementos
//tabcontent[1].className = "border p-2 text-center";

//crear nodo
const parrafo = document.createElement('p');
parrafo.innerText= "soy un parrafo creado con js";

//agregar el nodo al documento
tabcontent[1].appendChild(parrafo);

//eliminar elementos


//tablinks[0].className = "active-tab";


//acceedar al valor de los inputs   
const inputName = document.querySelectorAll('input[type=text]#nombre');

inputName[0].value = "Lucas";


//interpolacion
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
};
let template = `Producto: ${producto.nombre}, Precio: ${producto.precio}, Disponible`;


