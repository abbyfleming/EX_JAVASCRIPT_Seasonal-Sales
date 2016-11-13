
var StoreProducts = (function() {

	var products = [];


	return {

		loadProducts: function(callbackToInvoke) {
			var productLoader = new XMLHttpRequest();
			productLoader.open("GET", "javascripts/products.json");
			productLoader.send();

			productLoader.addEventListener("load", function () {
			var productData = JSON.parse(this.responseText).products;
			products.push(productData);

			callbackToInvoke(productData);	

			//console.log("productData", productData); 

			});
		},

		returnProducts: function() {
			console.log(products);
			return products;
  		}

	}

})();