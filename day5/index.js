const content = document.getElementById("content");

const order = {
    itemName: "potato",
    isDelivered: true,
    daysSinceDelivery: 3,
}


function buttonClicked() {
    if (order.isDelivered && order.daysSinceDelivery < 7) {
        content.innerText = "Eligible For Return\n"
    }

    const value = "itemName" in order
    content.innerText += value + "\n"
    delete order["itemName"];
    content.innerText += order.itemName
}