let fruits = ['mango','grapes'];
let groc = ['corn flakes','milk']
let shopList = fruits.concat(groc);
let others = ['apple','coffee'];
console.log(shopList); // ['mango','grapes','corn flakes','milk']
shopList = fruits.concat(groc,others);
console.log(shopList);