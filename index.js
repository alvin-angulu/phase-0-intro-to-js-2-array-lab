// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function  destructivelyAppendCat(name){
    return cats.push(name);
}

function  destructivelyPrependCat(name){
    return cats.unshift(name);
}

function  destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const catss = [...cats, name];
    return catss;
}

function prependCat(name){
    const catss = [name,...cats,];
    return catss;
}

function removeLastCat(){
   const catss = cats.slice(0,cats.length-1);
   return catss;

}

function removeFirstCat(){
    const catss = cats.slice(1,cats.length);
    return catss;
}

console.log(cats);
console.log(removeFirstCat());



