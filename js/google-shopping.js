
var data = require('../products.json');

//Write your solutions below

// Exercise 1 below
let count = 0;
for (i in data.items) {
	data.items[i].kind === "shopping#product" ?
	count++ :
	null
}
console.log(count)

//Exercise 2 below
for (i in data.items) {
	data.items[i].product.inventories[0].availability === "backorder" ?
	console.log(data.items[i].product.title + "\n") :
	null
}

//Exercise 3 below
for (i in data.items) {
	data.items[i].product.images.length > 1 ?
	console.log(data.items[i].product.title + "\n") :
	null
}

// Exercise 4 below
for (i in data.items) {
	data.items[i].product.brand === "Canon" ?
	console.log(data.items[i].product.title + "\n") :
	null
}

//Exercise 5 below
for (i in data.items) {
	data.items[i].product.brand === "Canon" && 
	data.items[i].product.author.name === "eBay" ? //does not include authors that do not match this exactly
	console.log(data.items[i].product.title + "\n") :
	null
}

// Exercise 6 below
for (i in data.items) {
	itemNo = i * 1 + 1;
	console.log("Item "+ itemNo + " has the brand " + data.items[i].product.brand
		+" and a price of " + data.items[i].product.inventories[0].price 
		+". Image link: " + data.items[i].product.images[0].link + "\n")
}
