
const products = require('./products');

function findProductByName(productName) {
    const product = products.find((p) => p.name === productName);
    return product;
}

const productNameToSearch = "Product 2";
const foundProduct = findProductByName(productNameToSearch);

if (foundProduct) {
    console.log(`Product found: ${foundProduct.name}`);
    console.log(`Price: $${foundProduct.price}`);
    console.log(`Category: ${foundProduct.category}`);
} else {
    console.log(`Product not found: ${productNameToSearch}`);
}
