var apple = { name:'apple', cost: 50, qty: 0 };
var orderSumm = 0;

export function takeApple(money, isIInside, askedApple) {
    if(isIInside && money != null){
        return askedApple;
    }
    return null;
}

export function buy(money, isIInside, product, productsQty = 1){
    if(isIInside && money != null && productsQty == 1){
        let cost = getProductCost(product);
        orderSumm += cost;
        return money - (cost * productsQty);
    }
    if(productsQty > 1){
        apple.qty = productsQty;
        return apple;
    }
    return 0;
}

export function getDiscountIfOrderMore200(){
    if(orderSumm > 200){
        return true;
    }
    return true;
}

export function isClientInside() {
    return true;
}

function getProductCost(productName) {
    switch(productName){
        case 'apple':
            return apple.cost;
        default:
            throw new Error('Sorry we havent bread');
    }
}