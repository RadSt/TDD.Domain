const apple = { name:'apple', cost: 50 };

export function takeApple(money, isIInside, askedApple) {
    if(isIInside && money != null){
        return askedApple;
    }
    return null;
}

export function getChange(money, isIInside, product){
    if(isIInside && money != null){
        let cost = getProductCost(product);
        return money - cost;
    }
    return 0;
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