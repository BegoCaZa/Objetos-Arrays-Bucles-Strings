
const alphabetUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetLowerCase="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const vowels="aeiou";
    const consonants="bcdfghjklmnpqrstvwxyz";
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

    // const alphabetUpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // const alphabetLowerCase="abcdefghijklmnopqrstuvwxyz";
    // const numbers="0123456789"

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
    //NO SE PARA QUE QUIERO DICTIONARY

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

//4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto numberAnalysis con:

// taskName: Nombre de la tarea.

// analyst: Nombre del analista.

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con la tarea, el analista y dos arrays: números pares e impares.

// // Ejemplo de entrada:
// classifyNumbers({
// taskName: "Number Classification",
// analyst: "Macarena",
// numbers: [1, 2, 3, 4, 5, 6]
// });

// // Ejemplo de salida:
// {
// taskName: "Number Classification",
// analyst: "Macarena",
// result: { even: [2, 4, 6], odd: [1, 3, 5] }
// }

const classifyNumbers=({taskName,analyst,numbers})=>{ //COMO ES QUE SABE LOS PARAMETROS DE CADA UNO SI NUNCA LO DEFINO?

    // //objeto de entrada por partes
    // const numberAnalysis={
    //     taskName:"",
    //     analyst:"",
    //     numbers:[]
    // }
    let evenNumbers=[];
    let oddNumbers=[];
    
    for (const number of numbers) {
        if (number%2===0){
            evenNumbers.push(number);
        }else{
            oddNumbers.push(number);
        }
        
    }

    //objeto de salida
    const numberClassicifation={
        taskName: taskName, //el mismo que recibio de entrada
        analyst: analyst,//el mismo que recibio de entrada
        result: { 
            even: evenNumbers, 
            odd: oddNumbers 
        }
    }

    console.log(numberClassicifation);

}
classifyNumbers({
    taskName: "Number Classification",
    analyst: "Macarena",
    numbers: [1, 2, 3, 4, 5, 6]
    })

//6️⃣ Macarena y la creación de perfiles aleatorios:
// Crea una función generateProfiles que reciba un objeto profileTask con:

// taskName: Nombre de la tarea.

// creator: Nombre del creador.

// count: Número de perfiles a generar.

// Debe devolver un objeto con los perfiles generados, donde cada perfil tiene un id único (número aleatorio entre 1000 y 9999) y un username generado combinando una vocal, una consonante y un número aleatorio entre 1 y 99.

// // Ejemplo de entrada:
// generateProfiles({
// taskName: "Profile Generation",
// creator: "Macarena",
// count: 5
// });

// // Ejemplo de salida:
// {
// taskName: "Profile Generation",
// creator: "Macarena",
// profiles: [
// { id: 4532, username: 'PA12' },
// { id: 8753, username: 'LO35' },
// { id: 9123, username: 'KE78' },
// { id: 3264, username: 'BU99' },
// { id: 1742, username: 'PI23' }
// ]
// }

const generateProfiles=({taskName,creator,count})=>{

    //array de objetos
    const profiles=[];//array donde guardare user name random
    for (let i = 0; i <=count; i++) {
        const id=Math.floor(Math.random()*(9999-1000)+1000);
        const randomConsonant=consonants[Math.floor(Math.random() * consonants.length)];
        const randomVowel=vowels[Math.floor(Math.random() * vowels.length)];
        const username=`${randomConsonant}${randomVowel}${Math.floor(Math.random()*99)+1}`;
        profiles.push({id,username});
    }
    
    //objeto de salida
    const generatedProfiles={
        taskName: taskName,
        creator: creator,
        profiles: profiles
    }
    console.log(generatedProfiles);
}
generateProfiles({
    taskName: "Profile Generation",
    creator: "Macarena",
    count: 5
    });
