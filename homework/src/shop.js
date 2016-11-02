const apple = { name:'apple', cost: 50 };
var orderSumm = 0;

export function takeApple(money, isIInside, askedApple) {
    if(isIInside && money != null){
        return askedApple;
    }
    return null;
}

export function getChange(money, isIInside, product, productsQty = 1){
    if(isIInside && money != null){
        let cost = getProductCost(product);
        orderSumm += cost;
        return money - (cost * productsQty);
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
    }
}