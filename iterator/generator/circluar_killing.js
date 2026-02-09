const people = Array.from({ length: 100 }, (_, i) => ++i)
console.log(people,people.length);

const arr = []
for(let index =0; index< people.length;index++){
if(index %2 === 0){
arr.push(people[index])
  }
}

console.log("2nd:",arr.length, arr)


const arr2 = []
for(let index =0; index< arr.length;index++){
if(index %2 === 0){
arr2.push(arr[index])
  }
}
console.log("3:",arr2.length, arr2)

const arr3 = []
for(let index =0; index< arr2.length;index++){
if(index %2 === 0){
arr3.push(arr2[index])
  }
}
console.log("4:",arr3.length, arr3)

let arra4 = []
for(let index =0; index< arr3.length;index++){
if(index %2 !== 0){
arra4.push(arr3[index])
  }
}
console.log("5:",arra4.length, arra4)

let arra5 = []
for(let index =0; index< arra4.length;index++){
if(index %2 === 0){
arra5.push(arra4[index])
  }
}
console.log("6:", arra5.length,arra5)

let arra6 = []
for(let index =0; index< arra5.length;index++){
if(index %2 === 0){
arra6.push(arra5[index])
  }
}
console.log("7:", arra6.length,arra6)

let arra7 = []
for(let index =0; index< arra6.length;index++){
if(index %2 !== 0){
arra7.push(arra6[index])
}}
console.log("8:",arra7.length, arra7)
