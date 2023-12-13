function addProductToLocalStorage(product) {
    // Get existing products from Local Storage or initialize an empty array
    var existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Add the new product to the array
    existingProducts.push(product);

    // Save the updated array back to Local Storage
    localStorage.setItem("products", JSON.stringify(existingProducts));
}

// Function to display products on the homepage
function displayProductsOnHomePage() {
    // Get products from Local Storage
    var products = JSON.parse(localStorage.getItem("products")) || [];

    // Get the container where products will be displayed
    var productContainer = document.getElementById("productContainer");

    // Clear existing content
    productContainer.innerHTML = "";

    // Loop through products and display them
    products.forEach(function (product) {
        var productElement = document.createElement("div");
        productElement.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" />
                <h3>${product.name}</h3>
                <p>Type: ${product.type}</p>
                <p>Price: ${product.price}</p>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have a form with id "addProductForm" in your HTML
    var addProductForm = document.getElementById("addProductForm");

    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        var id = document.getElementById("productId").value;
        var name = document.getElementById("productName").value;
        var type = document.getElementById("productType").value;
        var price = document.getElementById("productPrice").value;
        var image = document.getElementById("productImage").value;

        // Create a product object
        var newProduct = {
            id: id,
            name: name,
            type: type,
            price: price,
            image: image,
        };

        // Add the product to Local Storage
        addProductToLocalStorage(newProduct);

        // Display products on the homepage
        displayProductsOnHomePage();

        // Reset the form
        addProductForm.reset();
    });

    // Display products on the homepage when the page loads
    displayProductsOnHomePage();
});