var recetas = [
    {
        nombre: "Ajiaco",
        cocina: "Colombiana",
        tipo: "Criolla",
        dieta: "Moderada en calorías",
        instrucciones: "1. Hierve pollo, maíz, papa y guascas hasta que estén tiernos. 2. Agrega alcaparras y crema de leche. 3. Sirve caliente con aguacate y arroz blanco.",
        foto: "img/ajiaco.png",
        calorias: 350
    },
    {
        nombre: "Bandeja Paisa",
        cocina: "Colombiana",
        tipo: "Criolla",
        dieta: "Rica en calorías",
        instrucciones: "1. Cocina arroz, frijoles, carne de cerdo, chicharrón, huevo frito, plátano maduro y arepa. 2. Sirve en una bandeja grande y acompaña con hogao y aguacate.",
        foto: "img/bandeja_paisa.png",
        calorias: 1200
    },
    {
        nombre: "Ensalada de pollo",
        cocina: "Internacional",
        tipo: "Internacional",
        dieta: "Baja en calorías",
        instrucciones: "1. Cocina el pollo y córtalo en trozos pequeños. 2. Mezcla el pollo con verduras frescas y adereza con vinagreta. 3. Sirve frío.",
        foto: "img/ensalada-pollo.png",
        calorias: 250
    },
    {
        nombre: "Crema de tomate",
        cocina: "Mediterránea",
        tipo: "Internacional",
        dieta: "Baja en calorías",
        instrucciones: "1. Sofríe cebolla y ajo en aceite de oliva. 2. Agrega tomates, caldo de verduras y hierbas frescas. 3. Cocina a fuego lento durante 30 minutos. 4. Sirve caliente.",
        foto: "img/crema-tomate.png",
        calorias: 150
    },
    {
        nombre: "Pasta Alfredo",
        cocina: "Italiana",
        tipo: "Internacional",
        dieta: "Rica en calorías",
        instrucciones: "1. Cocina la pasta según las instrucciones del paquete. 2. Prepara una salsa Alfredo con mantequilla, nata, y queso parmesano. 3. Mezcla la pasta con la salsa y sirve caliente.",
        foto: "img/pasta-alfredo.png",
        calorias: 600
    },
    {
        nombre: "Ceviche de camarón",
        cocina: "Peruana",
        tipo: "Criolla",
        dieta: "Baja en calorías",
        instrucciones: "1. Limpia y cocina los camarones en jugo de limón. 2. Agrega cebolla, tomate, cilantro y ají. 3. Deja reposar en la nevera durante 30 minutos y sirve frío.",
        foto: "img/ceviche.png",
        calorias: 200
    },
    {
        nombre: "Tarta de manzana",
        cocina: "Americana",
        tipo: "Internacional",
        dieta: "Moderada en calorías",
        instrucciones: "1. Prepara una masa para tarta y colócala en un molde. 2. Rellena con rodajas de manzana y azúcar. 3. Hornea hasta que la masa esté dorada y las manzanas tiernas. 4. Sirve tibia con helado de vainilla.",
        foto: "img/torta-manzana.png",
        calorias: 400
    },

];

const listaRecetas = document.querySelector('ul');

// const li = document.createElement('li');
// const h3 = document.createElement('h3');

// h3.innerHTML = recetas[0].nombre;
// li.appendChild(h3);
// listaRecetas.appendChild(li);

//document.body.onload = crearNombres;

// function crearNombres() {
//     for (let i = 0; i < recetas.length; i++) {
//         const li = document.createElement('li');
//         const h3 = document.createElement('h3');
//         h3.innerHTML = recetas[i].nombre;
//         li.appendChild(h3);
//         listaRecetas.appendChild(li);
//         console.log(recetas[i].nombre)
//     }
// }

//document.body.onload = crearRecetas(recetas);

let li
let h3
let pCocina
let pDieta
let pInstrucciones
let pCalorias
let imagen

function crearRecetas(array) {
    array.forEach(item => {

        li = document.createElement('li');
        h3 = document.createElement('h3');
        pCocina = document.createElement("p");
        pDieta = document.createElement("p");
        pInstrucciones = document.createElement("p");
        pCalorias = document.createElement("p");
        imagen = document.createElement("img");

        //Insertan valores a elementos
        h3.innerHTML = item.nombre;
        pCocina.innerHTML = "Cocina: " + item.cocina;
        pDieta.innerHTML = "Dieta: " + item.dieta;
        pInstrucciones.innerHTML = "Instrucciones: " + item.instrucciones;
        pCalorias.innerHTML = "Calorias: " + item.calorias;
        imagen.src = item.foto;
        li.classList.add("card");
        imagen.classList.add("img");

        //Insertan en padres y renderizan en div lista de recetas
        li.appendChild(h3);
        li.appendChild(pCocina);
        li.appendChild(pDieta);
        li.appendChild(pInstrucciones);
        li.appendChild(pCalorias);
        li.appendChild(imagen);
        listaRecetas.appendChild(li);
    })
}



function filtra(categoria) {
    if (categoria == "todos") {
        //li.remove();
        crearRecetas(recetas);
    } else if (categoria == "criolla") {
        //li.remove();
        let cocinaCriolla = recetas.filter((item) => item.tipo == "Criolla");
        console.log(cocinaCriolla);
        crearRecetas(cocinaCriolla);
    } else if (categoria == "internacional") {
        let cocinaInternacional = recetas.filter((item) => item.tipo == "Internacional");
        console.log(cocinaInternacional);
        crearRecetas(cocinaInternacional);
    } else if (categoria == "ricaCal") {
        let ricaCalorias = recetas.filter((item) => item.dieta == "Rica en calorías");
        console.log(ricaCalorias);
        crearRecetas(ricaCalorias);
    } else if (categoria == "moderadaCal") {
        let moderadaCalorias = recetas.filter((item) => item.dieta == "Moderada en calorías");
        console.log(moderadaCalorias);
        crearRecetas(moderadaCalorias);
    } else if (categoria == "bajaCal") {
        let bajaCalorias = recetas.filter((item) => item.dieta == "Baja en calorías");
        console.log(bajaCalorias);
        crearRecetas(bajaCalorias);
    } else if (categoria == "menos500Cal") {
        let menor500Calorias = recetas.filter((item) => item.calorias <=500);
        console.log(menor500Calorias);
        crearRecetas(menor500Calorias);
    } else if (categoria == "menos1000Cal") {
        let menor1000Calorias = recetas.filter((item) => item.calorias <=1000);
        console.log(menor1000Calorias);
        crearRecetas(menor1000Calorias);
    }

}