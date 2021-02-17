var colors = ["red", "green", "blue"];
console.log(colors);

console.log("Длина после добавления элемента:",colors.unshift("yellow")); 
console.log(colors);

console.log("Элемент,который удалили:",colors.shift());
console.log(colors);

console.log("Длина после добавления элемента:",colors.push("pink")); 
console.log(colors);

console.log(colors.splice(2, 0, "black"));
console.log(colors);

console.log("Элемент, который удалили:", colors.splice(1, 1));
console.log(colors);

console.log("Элемент, который заменили:", colors.splice(3, 1, "violet")); 
//1 - кол-во элементов, которые удалили
console.log(colors);

console.log("Элемент, который заменили:", colors.splice(2, 2, "violet","purple")); 
// удалили два элемента и потом добавили 2 элемента
console.log(colors);

console.log(colors.join("/"));
