var products = {
	"Jacket" : 140
	,"Bag" : 105
	,"Jeans" : 120
	,"Wallet" : 90
}
;
console.log("Товары и цены:", products);
products["Bag"] = 115;
console.log("Обновленная цена на сумку:", products["Bag"]);
console.log("Обновленные цены", products);
products["Socks"] = 55;
console.log("Новый товар", products);