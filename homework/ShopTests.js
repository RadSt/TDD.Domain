import assert from 'assert';
import { takeApple, isClientInside, getChange } from './src/shop';

suite('When I in the shop', function () {
    suite("if I pay money and ask apple", function () {
        test('I bought an apple', function () {
            let money = {};
            let isIInside = isClientInside();
            let askedApple = 'apple';

            let apple = takeApple(money, isIInside, askedApple);

            assert.equal(apple, 'apple')
        })
    });

    suite('if I pay 100 for apple', function () {
        test('I receive change 50', function () {
            let money = 100;
            let isIInside = isClientInside();
            let askedApple = 'apple';


            let change = getChange(money, isIInside, askedApple);

            assert.equal(50, change)
        })
    });

});