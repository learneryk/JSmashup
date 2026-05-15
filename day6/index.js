const content = document.getElementById("content");

const products = ["apple", "orange", "banana", "mango", "strawberry"];
const price = [15, 20, 15, 23, 18]


const result = products.map(
    (product, index) => {
       return `product: ${product} - price: ${price[index]}\n`
    }
)

content.innerText = result