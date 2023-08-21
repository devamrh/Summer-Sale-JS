
let cart = [];


function addItemToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('resultList');
    cartList.innerHTML = ''; 
    let totalAmount = 0;
    
 
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item.itemName} - ${item.price.toFixed(2)} TK`;
        cartList.appendChild(listItem);
        totalAmount += parseFloat(item.price);
    });

    

    let discount = 0;
    let discountedTotal = totalAmount;

    if (totalAmount > 200) {
        discount = totalAmount * 0.2;
        discountedTotal = totalAmount - discount;
    }

    
    
  
    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = `Total Price: ${totalAmount.toFixed(2)} TK`;
    
    
    const discountElement = document.getElementById('discountAmount');
    discountElement.textContent = `Discount: ${discount.toFixed(2)} TK`;

    const discountedTotalElement = document.getElementById('discountedTotal');
    discountedTotalElement.textContent = `Total: ${discountedTotal.toFixed(2)} TK`;
}




const productCards = document.querySelectorAll('.card');
productCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const itemName = card.querySelector('.text-base').textContent;
        const priceString = card.querySelector('#itemPrice').textContent;
        const price = parseFloat(priceString.split(' ')[0]); 
        addItemToCart(itemName, price);
    });
});
