import assert from 'assert';
import { takeApple, isClientInside, buy, getDiscountIfOrderMore200 } from './src/shop';

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


            let change = buy(money, isIInside, askedApple);

            assert.equal(change, 50)
        })
    });

    suite('if I pay 250 for apple', function () {
        test('I receive discount', function () {
            let money = 250;
            let isIInside = isClientInside();
            let askedApple = 'apple';
            let appleQty = 5;


            buy(money, isIInside, askedApple, 5);
            let discount = getDiscountIfOrderMore200();

            assert.equal(discount, true)
        })
    });

    suite('if buy bread', function () {
        test('seller say "Sorry we havent bread"', function () {
            let money = 250;
            let isIInside = isClientInside();
            let askedBread = 'bread';

            assert.throws(function () {
                buy(money, isIInside, askedBread);
            }, /Sorry we havent bread/);
        })
    });

});