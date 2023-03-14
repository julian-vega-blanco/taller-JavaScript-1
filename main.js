/*1.
a. Declarar variables llamadas 'continente', 'país',
'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
valores de cantidad de habitantes, de acuerdo con su contexto
real en su propio país.
b. Registre sus valores en la consola.*/

let continente = prompt("Nombre de tu continente"); 
let pais = prompt("Nombre de tu pais");
let departamento = prompt("Nombre de tu departamento");
let ciudad = prompt("Nombre de tu ciudad");
let barrio = prompt("Nombre de tu barrio");
let direccion = prompt("Numero de direccion");
let cantidadHabitantes 


console.log("Continente:" + continente);

console.log("Pais:" + pais);

console.log("Departamento:" + departamento);

console.log("Ciudad:" + ciudad);

console.log("Barrio:" + barrio);

console.log("Direccion:" + direccion);

cantidadHabitantes = "163,362 Habitantes";
console.log("Cantidad de habitantes:" + cantidadHabitantes);


/*2.
a. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía.
b. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma'*/

let esTercerMundista; 
let idioma;


esTercerMundista = true;
continente = "America del sur";
pais = "Colombia";
idioma = "Español";

console.log("Tu continente es:" + (" ") + continente + (" ") + "\nTu pais es:"+ (" ")  + pais +  (" ") + "\nTu idioma es:"+ (" ")  + idioma + "\nTu pais es tercermundista?" + (" ") + esTercerMundista);

/*3.
a. Establezca el valor de 'idioma' en el idioma que se
habla donde vive.
b. Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const.
c. observe lo que sucede.*/

const idiomas = "español";

const miNombre = "julian";
const misDedos = 10;

console.log(idiomas);
console.log(miNombre);
console.log(misDedos);

/*4.
a. Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad?*/

let cantHabitantes = (parseFloat("51.520.000"));
let unMillon = (parseFloat("1.000.000"));
let finlandia = (parseFloat("6.000.000"));
let paisProm = (parseFloat("33.000.000"));

console.log("La cantidad de habitantes de nuestro pais es de" + (" ") + cantHabitantes + "Millones de habitantes" + "." + (" ") + "Si la cantidad de habitantes de nuestro pais se dividiera en dos seria de" + (" ") + (cantHabitantes / 2) + "Millones de habitantes");

/*b. Aumente la población de su país en 1M y registre el resultado
en la consola*/

console.log("Si la cantidad de habitantes de nuestros pais incrementara un millon seria igual a" + (" ") + (cantHabitantes + unMillon) + "Millones de habitantes.");


/*c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia?*/
console.log("Nuestro pais tiene una cantidad de habitantes de" + (" ") + cantHabitantes + "Millones de habitantes" + (" ") + "y Finlandia tiene una cantidad de habitantes de" + (" ") + finlandia + "Millones de habitantes" + (" ") + "¿Nuestro pais tiene mas habitantes de Finlandia?")

if (cantHabitantes > finlandia){
    console.log("Respuesta: Nuestro pais tiene mas habitantes que Finlandia");
}else{
    console.log("Respuesta: Finlandia tiene mas habitantes de su pais");
}

/*d. La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio?*/
console.log("Nuestro pais tiene una cantidad de habitantes de" + (" ") + cantHabitantes + "Millones de habitantes" + (" ") + "el pais promedio tiene una cantidad de" + (" ") + paisProm + "Millones de habitantes" + (" ") + "¿Nuestro pais tiene una cantidad promedio de habitantes?")

if (cantHabitantes > paisProm){
    console.log("Respuesta: Nuestro pais no es un pais promedio");
}
else {
    console.log("Respuesta: Nuestro pais es un pais promedio");
}


/*e. Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés.*/

pais = "Colombia"
continente = "America"
ciudad = "Bucaramanga" 
departamento = "Santander" 
barrio = "Prado" 
habitantes = 3000
idioma = "Inglés"

const descripcion = pais + (" ") + ("esta en") + (" ") + continente + (" ") + ("y") + (" ") + ciudad + (" ") + ("que esta en el departamento de") + (" ") + departamento + (" ") + ("tiene un barrio llamado") + (" ") + barrio + (" ")  + ("y sus") + (" ") + habitantes + (" ") + ("personas hablan") + (" ") + idioma;

/*console.log(descripcion);

5. Repita el ejercicio usando Template strings
Métodos en cadenas
Cree 10 variables de tipo cadena donde almacene valores string en
Ingles y aplique cada una de los siguientes métodos de cadena
1. length
2. includes()
3. back ticks o templatre strings
4. trimStart()
5. trimEnd()
6. replace
7. slice
8. split
9. ToUpperCase
10. ToLowerCase*/


let linea1 = "julian, vega";
let linea2 = "hola mundo XD";
let linea3 = "   no se que escribir ayuda   ";
let linea4 = "hola hola hola hola ";
let linea5 = "cada dia antes de venir me hago un sandwich";
let linea6 = "textto texo texto";
let linea7 = "porque la gallina cruso la calle";
let linea8 = "   \n mi mamá me mima mi mamá me ama  \n   ";
let linea9 = "HOLAAAAAAAAA";
let linea10 = "holassssssssss";

console.log(linea1.length); 
console.log(linea2.includes("un perro atravesado")); 
console.log(`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: ${linea3}`); 
console.log(linea3.trimStart()); 
console.log(linea3.trimEnd());
console.log(linea4.replace("hola", "mundo"));
console.log(linea5.slice(16, 19)); 
console.log(linea7.split(", ")); 
console.log(linea9.toLowerCase()); 
console.log(linea10.toUpperCase()); 




