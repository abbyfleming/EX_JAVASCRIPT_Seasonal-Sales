

function showProducts(productData) {
	
	var output = document.getElementById("output");

	for (var i = 0; i < 10; i++) {
	
		var newDiv = document.createElement("div");
		
		//sort through the array
		getinfo = productData[i];

		//display in the dom
		newDiv.classList = "products";	
		newDiv.innerHTML = getinfo.name + " $" + getinfo.price;
		
		output.appendChild(newDiv);	
	};
}


StoreProducts.loadProducts(showProducts);
