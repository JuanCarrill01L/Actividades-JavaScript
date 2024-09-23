let name = "Ilya"; 
// Se declara la variable 'name' y se le asigna el valor "Ilya".
alert( `hello ${1}` ); // hello 1
// Se inserta el número 1 en la cadena usando una plantilla literal. Resultado: "hello 1".
alert( `hello ${"name"}` ); // hello name
// Se inserta la cadena "name" (sin usar la variable) en la cadena. Resultado: "hello name".
alert( `hello ${name}` ); // hello Ilya
// Se inserta el valor de la variable 'name' (que es "Ilya") en la cadena. Resultado: "hello Ilya".
