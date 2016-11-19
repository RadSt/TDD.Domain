import assert from 'assert';
import { takeApple, isClientInside, buy, getDiscountIfOrderMore200 } from './src/shop';

suite('When I in the shop', function () {
    suite("if I pay money and ask apple", function () {
        test('I bought an apple', function () {
            let money = {};
            let isIInside = isClientInside();
            let askedApple = 'apple';

            let order = takeApple(money, isIInside, askedApple);

            assert.equal(order, 'apple')
        })

        test('I bought two apples', function () {
            let money = {};
            let isIInside = isClientInside();
            let askedApple = 'apple';
            let qty = 2;

            let order = buy(money, isIInside, askedApple, qty);

            assert.equal(order.qty, 2)
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

    suite('if I pay 500 for apple and order 10 apples', function () {
        test('I receive change 50 from discount 10%', function () {
            let money = 500;
            let isIInside = isClientInside();
            let askedApple = 'apple';
            let appleQty = 10;


            let order = buy(money, isIInside, askedApple, appleQty);

            assert.equal(order.change, 50)
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