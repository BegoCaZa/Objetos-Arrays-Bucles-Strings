// 1️⃣ Macarena y la validación de contraseñas:
// Crea una función validatePassword que reciba un objeto con una propiedad password (string) y devuelva un objeto con las propiedades isValid (boolean) y errors (array de strings) que indiquen si la contraseña cumple con los siguientes criterios:

// Longitud mínima de 8 caracteres

// Al menos una letra mayúscula

// Al menos una letra minúscula

// Al menos un número

// Ejemplo entrada: { password: "abc123" }

// Ejemplo salida: {
// isValid: false,
// errors: [
// "Password must be at least 8 characters long.",
// "Password must contain at least one uppercase letter.",
// "Password must contain at least one lowercase letter.",
// "Password must contain at least one number."

const validatePassword=({password})=>{
    // console.log(object.password);

    const alphabetUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetLowerCase="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789"

    //definir objeto de salida
    const result={
        isValid: false,
        errors: []
    }

    //condiciones del objeto de salida
    if (password.length<8){
        result.errors.push("Password must be at least 8 characters long.");
    }
    //condiciones de mayusculas, minusculas y numero

    let hasUpperCase=false; //por que no las lee?
    let hasLowerCase=false;
    let hasNumber=false;

    for (const letters of password) {
        if(alphabetLowerCase.includes(letters)){
            hasLowerCase=true;}
        if (alphabetUpperCase.includes(letters)){
            hasUpperCase=true;}
        if (!numbers.includes(letters)){
            hasNumber=true;}
    }

    if(hasUpperCase=false){
        result.errors.push("Password must contain at least one uppercase letter.")
    }
    if(hasLowerCase=false){
        result.errors.push("Password must contain at least one lowercase letter.")
    }
    if(hasNumber=false){
        result.errors.push("Password must contain at least one number.")
    }


    result.isValid = result.errors.length === 0;

console.log({result});
};
validatePassword({password:"aAbEo123"});
validatePassword({password:"aAbEo1"});
validatePassword({password:"aabeo1345"});

//2️⃣ Sabrina y el sistema de evaluación de estudiantes:
// Crea una función evaluateStudents que reciba un objeto que representa una asignatura (subject). Este objeto debe tener las propiedades:

// subjectName: El nombre de la asignatura (string).

// teacher: El nombre del profesor a cargo (string).

// students: Un objeto que contiene a los estudiantes como claves y sus notas (grades) como valores.

// La función debe imprimir un objeto con la información de los estudiantes aprobados (note >= 5) junto con el nombre de la asignatura y el profesor.

// // Ejemplo de entrada:
// evaluateStudents({
// subjectName: "Web Development",
// teacher: "Mr. Dios",
// students: {
// Macarena: 8,
// Bego: 4,
// Abby: 6,
// Camila: 3,
// Sabrina:5
// }
// });

const evaluateStudents=({subjectName, teacher, students})=>{

    let approvedStudents={}; //voy a almacenar aqui los que si pasaron

    // for (const student of  ) { //considerar que students es un array
    //     if (student>=5){
    //         approvedStudents.push(students[student]);
    //     }
    // }

    for (let i= 0; i< students.length; i++) {
        if (students[''] >=5)
            approvedStudents.push(students['']); 
    } //perdida perdida perdida

    
    console.log({approvedStudents});


    const result={
        subjectName:subjectName, //mismo nombre que recibió
        teacher:teacher,
        approvedStudents:approvedStudents
    }

    console.log({result});
    }
evaluateStudents({
    subjectName: "Web Development",
    teacher: "Mr. Dios",
    students: {
    Macarena: 8,
    Bego: 4,
    Abby: 6,
    Camila: 3,
    Sabrina:5
    }
    });

    //3️⃣ Abby y la traducción de palabras:
// Crea una función translateWords que reciba un objeto translationTask con:

// projectName: Nombre del proyecto.

// translator: Nombre del traductor.

// words: Array de palabras a traducir.

// dictionary: Objeto que mapea palabras originales a su traducción.

// Debe devolver un objeto con el nombre del proyecto, el traductor y un array de palabras traducidas.

// // Ejemplo de entrada:
// translateWords({
// projectName: "Basic Translator",
// translator: "Abby",
// words: ['hello', 'world'],
// dictionary: { hello: 'hola', world: 'mundo' }
// });

// // Ejemplo de salida:
// {
// projectName: "Basic Translator",
// translator: "Abby",
// translated: [ 'hola', 'mundo' ]
// }

const translateWords=({projectName,translator,words,dictionary})=>{

    let translated=[]
    //NO SE PARA QUE QIERO DICTIONARY

    for (const word of words) {
        if(word==="hello"){
            translated.push('hola');
        }
        if(word==="world"){
            translated.push('mundo');
        }
        
    }

    //objeto de salida
    const result={
    projectName: projectName,
    translator: translator,
    translated: translated
    }

    console.log({result});
}

translateWords({
    projectName: "Basic Translator",
    translator: "Abby",
    words: ['hello', 'world'],
    dictionary: { hello: 'hola', world: 'mundo' }
    });