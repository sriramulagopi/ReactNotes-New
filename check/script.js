// function add(a){
//     let count = 1;
//     return function(b){
//         if(b!==undefined){
//             return add(a*b);
//         }
//         return a;
//     }
// }
// console.log(add(1)(5)(2)(3)());
let arr = [[1,2,3],[1,2,3],[1,2,3]];
function flatten(arr){
    let arr1 = [];
    for (let i=0;i<arr.length;i++){
        arr1.push(...arr[i]);
    }
    return arr1;
}
console.log(flatten(arr));

// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }
// Object.freeze(obj);
// let obj2 = obj;
// obj2.a=100;
// console.log(obj2)
// console.log(obj)

// let one = false || {} || null;
// let two = null || true || "";
// const three = false || 0 || [];
// console.log(one,typeof two,three);
console.log(typeof null);
console.log(typeof undefined)

let str = "gopi".slice(0,3);
console.log(str)