let tshirtPrice = 400
let capPrice = 300

let tshirtSold = 5
let capSold = 3

const totalPrice = (tshirtPrice * tshirtSold) + (capPrice * capSold)

document.getElementById('sales').innerText = `Total Sales: ${totalPrice}`