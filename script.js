//Método forEach --------
const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazio = [];
//nossa callback
function callbackForEach(element, index, array) {
  return arrayVazio.push(element * 2);
}

function forEach(callbackFn, thisArg) {
  for(let i = 0; i < thisArg.length; i++) {
    callbackFn(thisArg[i], i, thisArg);
  }
  return undefined;
}

console.log(forEach(callbackForEach, arrayForEach));
console.log(arrayVazio);

//Método Find --------

const arrayFind = [12, true, "alfafa", 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element, index, array) {
  if (element > 2 && element < 12) {
    return true;
  }
}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element, index, array) {
  if (element > 15) {
    return true;
  }
}

function find(callbackFn, thisArg) {
  for(let i = 0; i < thisArg.length; i++) {
    if(callbackFn(thisArg[i], i, thisArg)) {
      return thisArg[i];
    }
  }
  return undefined;
}
console.log(find(callbackFind, arrayFind));
console.log(find(callbackFindTwo, arrayFind));

//Método IndexOf --------

const arrayFindIndex = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackFindIndex(element, index, array) {
  return typeof element === "string" ? true : false;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackFindIndexTwo(element, index, array) {
  return element == 3 ? true : false;
}

function FindIndex(callbackFn, thisArg) {
  for(let i = 0; i < thisArg.length; i++) {
    if(callbackFn(thisArg[i], i, thisArg)) {
      return i;
    }
  }
  return -1;
  //sua lógica aqui
}
console.log(FindIndex(callbackFindIndex, arrayFindIndex));
console.log(FindIndex(callbackFindIndexTwo, arrayFindIndex));

//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método

function includes(array, searchElement, fromIndex = 0) {
  for(let i = fromIndex; i < array.length; i++) {
    if(array[i] === searchElement) {
      return true;
    }
  }
  return false;
}
console.log(includes(arrayIncludes, "duck"));
console.log(includes(arrayIncludes, 500));
//Método some --------
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
const callbackSome = (element, index, array) => {
  return element > 82 ? true : false;
};

const callbackSome2 = (element, index, array) => {
  if (element) {
    return true;
  }
};

function some(callbackFn, thisArg) {
  for(let i = 0; i < thisArg.length; i++) {
    if(callbackFn(thisArg[i], i, thisArg)) {
      return true;
    }
  }
  return false;
}

console.log(some(callbackSome, arrySome));
console.log(some(callbackSome2, arrySome));

//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método

function join(array, value) {
  let string = "";
  for(let i = 0; i < array.length; i++) {
    string += array[i];
    if(i < array.length - 1) {
      string += value;
    }
  }
  return string;
}
console.log(join(arrayJoin, " "));
console.log(join(arrayJoin, ""));
console.log(join(arrayJoin, "-"));
