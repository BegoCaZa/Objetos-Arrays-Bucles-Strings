const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
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

const validatePassword = data => {
  //defino el contenido de data hasta que lo llamo

  const result = {
    isValid: false,
    errors: []
  };

  //condiciones del objeto de salida
  if (data.password.length < 8) {
    //lee la data que entro
    result.errors.push('Password must be al least 8 characters long');
  }

  //VERSION CORTA
  if (!/[A-Z]/.test(data.password)) {
    //siempre plantear la comparativa en negativo
    result.errors.push('Password must contain at least one uppercase letter.');
  }

  if (!/[a-z]/.test(data.password)) {
    result.errors.push('Password must contain at least one lowercase letter.');
  }

  if (!/[0-9]/.test(data.password)) {
    result.errors.push('Password must contain at least one number.');
  }

  result.isValid = result.errors.length === 0; //no te tuviste que meter con isValid hasta lo ultimo

  console.log(result);
};
validatePassword({ password: 'aAbEo123' });
validatePassword({ password: 'aAbEo1' });
validatePassword({ password: 'aabeo1345' });

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

const evaluateStudents = ({ subjectName, teacher, students }) => {
  let approvedStudents = {}; //voy a almacenar aqui los que si pasaron

  // for (const student of  ) { //considerar que students es un array
  //     if (student>=5){
  //         approvedStudents.push(students[student]);
  //     }
  // }

  for (let i = 0; i < students.length; i++) {
    if (students[''] >= 5) approvedStudents.push(students['']);
  } //perdida perdida perdida

  console.log({ approvedStudents });

  const result = {
    subjectName: subjectName, //mismo nombre que recibió
    teacher: teacher,
    approvedStudents: approvedStudents
  };

  console.log({ result });
};
evaluateStudents({
  subjectName: 'Web Development',
  teacher: 'Mr. Dios',
  students: {
    Macarena: 8,
    Bego: 4,
    Abby: 6,
    Camila: 3,
    Sabrina: 5
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

const translateWords = data => {
  //{projectName,translator,words,dictionary}
  let translated = [];

  for (const word of data.words) {
    data.dictionary[word]; // acceso indexado
    //analiza el primer word "hello", luego le digo lo cambie por el string asignado a esa misma palabra=>hello:hola
    //esto funciona por que se llaman igual, sino no lo podria leer
    translated.push(data.dictionary[word]); //le pido que imprima ese cambio
  }

  //objeto de salida
  const result = {
    projectName: data.projectName,
    translator: data.translator,
    translated: translated
  };

  console.log(result);
};

translateWords({
  projectName: 'Basic Translator',
  translator: 'Abby',
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

// const classifyNumbers=({taskName,analyst,numbers})=>{ //COMO ES QUE SABE LOS PARAMETROS DE CADA UNO SI NUNCA LO DEFINO?

//     // //objeto de entrada por partes
//     // const numberAnalysis={
//     //     taskName:"",
//     //     analyst:"",
//     //     numbers:[]
//     // }
//     let evenNumbers=[];
//     let oddNumbers=[];

//     for (const number of numbers) {
//         if (number%2===0){
//             evenNumbers.push(number);
//         }else{
//             oddNumbers.push(number);
//         }

//     }

//     //objeto de salida
//     const numberClassicifation={
//         taskName: taskName, //el mismo que recibio de entrada
//         analyst: analyst,//el mismo que recibio de entrada
//         result: {
//             even: evenNumbers,
//             odd: oddNumbers
//         }
//     }

//     console.log(numberClassicifation);

// }
// classifyNumbers({
//     taskName: "Number Classification",
//     analyst: "Macarena",
//     numbers: [1, 2, 3, 4, 5, 6]
//     })

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

const generateProfiles = ({ taskName, creator, count }) => {
  //array de objetos
  const profiles = []; //array donde guardare user name random
  for (let i = 0; i <= count; i++) {
    const id = Math.floor(Math.random() * (9999 - 1000) + 1000);
    const randomConsonant =
      consonants[Math.floor(Math.random() * consonants.length)];
    const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
    const username = `${randomConsonant}${randomVowel}${
      Math.floor(Math.random() * 99) + 1
    }`;
    profiles.push({ id, username });
  }

  //objeto de salida
  const generatedProfiles = {
    taskName: taskName,
    creator: creator,
    profiles: profiles
  };
  console.log(generatedProfiles);
};
generateProfiles({
  taskName: 'Profile Generation',
  creator: 'Macarena',
  count: 5
});

/////////////SEGUNDA VUELTA //////////

//1️⃣ Saludar a través un objeto con nombre y ciudad; luego mostrar un mensaje de bienvenida en español.

const sayHello = user => {
  console.log(`Hola ${user.name}, has llegado a ${user.city}`);
};
sayHello({
  name: 'Camila',
  city: 'San Francisco'
});

//2️⃣ Verificar la mayoría de edad.

const verifyAge = user => {
  if (user.age >= 18) {
    console.log(`${user.name} es mayor de edad`);
  } else {
    console.log(`${user.name} es menor de edad`);
  }
};
verifyAge({
  name: 'Abby',
  age: 17
});

//3️⃣ Macarena y los promedios:
// Array de objetos student con name y grades (array de números). Calcular y mostrar el promedio.

const calculateStudentAverage = users => {
  const studentAvarage = users.map(user => {
    //entro en el objeto
    const sum = user.grades.reduce((acc, grade) => {
      //por cada USUARIO, suma su GRADE y lo acumula
      return acc + grade;
    });
    return sum / user.grades.length; //es entre .length por que detecta cuantos grades hay en el array; saca el indice
  });

  console.log(studentAvarage);
};
calculateStudentAverage([
  {
    name: 'Bego',
    grades: [8, 9, 10]
  },
  {
    name: 'Abby',
    grades: [8, 9, 10]
  }
]);

//4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto con:

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con dos arrays: números pares e impares.

// Ejemplo de entrada: classifyNumbers({numbers: [1, 2, 3, 4, 5, 6]});

// Ejemplo de salida: {result: { even: [2, 4, 6], odd: [1, 3, 5] }}

const classifyNumbers = info => {
  //objeto de salida
  const numberClassification = {
    even: [],
    odd: []
  };

  info.numbers.forEach(number => {
    //tenia que entrar al objeto INFO luego a NUMBERS
    if (number % 2 === 0) {
      numberClassification.even.push(number);
    } else {
      numberClassification.odd.push(number);
    }
  });
  console.log(
    `Result: even:${numberClassification.even}, odd:${numberClassification.odd}`
  );
};

classifyNumbers({ numbers: [1, 2, 3, 4, 5, 6] });

//5️⃣ Camila y la clasificación de edades:

// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.

// Ejemplo de entrada: classifyAges({ages: [5, 12, 15, 19, 32, 7, 17]});

// Ejemplo de salida:{ result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }}

const classifyAges = info => {
  //objeto de salida
  const ageClassification = {
    children: [],
    teens: [],
    adults: []
  };

  info.ages.forEach(age => {
    if (age < 15) {
      ageClassification.children.push(age);
    } else if (age >= 15 && age < 18) {
      ageClassification.teens.push(age);
    } else {
      ageClassification.adults.push(age);
    }
  });
  console.log(
    `Result: children: ${ageClassification.children}, teens: ${ageClassification.teens}, adults: ${ageClassification.adults}`
  );
};
classifyAges({ ages: [5, 12, 15, 19, 32, 7, 17] });
