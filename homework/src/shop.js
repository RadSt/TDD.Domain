var order = { productName:'apple', cost: 50, qty: 0, change:0 };
var orderSumm = 0;
var procentDiscount = 10;

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
        return money - (order.cost * productsQty);
    }
    if(isIInside && money != null && productsQty > 1){
        order.qty = productsQty;
        order.change = money - getDiscountForOrderMoreOrEqual500((order.cost * productsQty));
        return order;
    }
    return 0;
}

function getDiscountForOrderMoreOrEqual500(orderSumm){
    if(orderSumm >= 500){
        return orderSumm - (procentDiscount / 100 * orderSumm);
    }
    return orderSumm;
}

export function isClientInside() {
    return true;
}

function getProductCost(productName) {
    switch(productName){
        case 'apple':
            return order.cost;
        default:
            throw new Error('Sorry we havent bread');
    }
}