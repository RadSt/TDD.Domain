import assert from 'assert';
import { buyApple, isClientInside } from './src/shop';

suite('When I in the shop', function () {
    suite('if I pay money', function () {
        test('I bought an apple', function () {
            let money = {};
            let isIInside = isClientInside();

            let apple = buyApple(money, isIInside);

            assert.equal('apple', apple)
        })
    });

});