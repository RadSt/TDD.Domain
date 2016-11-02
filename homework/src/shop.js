const apple = 'apple';

export function buyApple(money, isIInside) {
    if(isIInside){
        return apple;
    }
    return null;
}

export function isClientInside() {
    return true;
}