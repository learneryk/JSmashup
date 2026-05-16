const content = document.getElementById("content");
let total = 0
let product, price;
content.innerText = "Welcome"
let i = 0;
while (i < 5) {
    const productCode = parseInt(prompt("Enter code (1-3)"));
    const quantity = parseInt(prompt(`Enter quantity for the code ${productCode}`))
    switch(productCode) {
        case 1:
            product = "Apple";
            price = 30
            break;
        case 2:
            product = "Banana";
            price = 10;
            break;
        case 3: 
            product = "Mango";
            price = 50;
            break;
        default:
            continue;
    }
    total += price * quantity; 
    i++;
}
if (total > 100) {
    content.innerText = `${total}/- High Purchase`
}
else {
    content.innerText = `${total}/- Normal Purchase`
}