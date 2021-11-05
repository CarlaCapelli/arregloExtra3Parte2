function sumaArreglos() {
  let letra: string[] = new Array(3);
  let numero: number[] = new Array(3);
  let suma: any[] = new Array(6);
  for (let i: number = 0; i < 3; i++) {
    letra[i] = String(prompt("ingrese una letra"));
    numero[i] = Number(prompt("ingrese un numero"));
  }
  let i: number;
  for (i = 0; i < 3; i++) {
    suma[i] = letra[i];
  }
  for (let indice = 0; indice < 3; indice++) {
    suma[i] = numero[indice];

    i++;
  }
  i = Number(prompt("ingrese la posicion que desea averiguar"));
  console.log(suma[i]);
}

sumaArreglos();
