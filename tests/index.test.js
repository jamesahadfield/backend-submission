"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const variableMap = new Map();
variableMap.set('$testVariable1', 'James');
variableMap.set('$testVariable2', 'Anne');
variableMap.set('$testVariable3', 3);
variableMap.set('$testVariable4', new Date('2022-06-04').toISOString().split('T')[0]);
const testStr = 'Hey there, $testVariable1 & $testVariable2';
const testObj = {
    testHeader: 'Hey there, $testVariable1'
};
const testArr = ['Hey there, $testVariable1', 'Hey there, $testVariable2!'];
const testObj2 = {
    $header: "Hey there, $testVariable1",
    subheader: "We've got $testVariable3 goodies for $testVariable2!",
    content: {
        someOtherNestedFields: {
            moreData: "I've got $testVariable3 more variables",
            nullData: null
        },
        testNumber: 4
    }
};
const testObj3 = {
    $header: "Hey there, $testVariable1",
    subheader: "We've got $testVariable3 goodies for $testVariable2!",
    content: {
        someOtherNestedFields: {
            moreData: "I've got $testVariable3 more variables",
            arrData: ["More array tests for $testVariable1", "and $testVariable2"]
        },
        testNumber: 4
    }
};
const testDate = ['Today is $testVariable4'];
describe('testing GenericStringInterpolate', () => {
    test('string with multiple variables should be converted', () => {
        expect((0, index_1.GenericStringInterpolate)(testStr, variableMap)).toBe('Hey there, James & Anne');
    }),
        test('testing simple object of TestInterface type should replace the variables in the property', () => {
            expect((0, index_1.GenericStringInterpolate)(testObj, variableMap)).toStrictEqual({ 'testHeader': 'Hey there, James' });
        }),
        test('testing boolean false', () => {
            expect((0, index_1.GenericStringInterpolate)(true, variableMap)).toStrictEqual(true);
        }),
        test('testing boolean false', () => {
            expect((0, index_1.GenericStringInterpolate)(false, variableMap)).toStrictEqual(false);
        }),
        test('testing array', () => {
            expect((0, index_1.GenericStringInterpolate)(testArr, variableMap)).toStrictEqual(['Hey there, James', 'Hey there, Anne!']);
        }),
        test('testing object with nested object', () => {
            expect((0, index_1.GenericStringInterpolate)(testObj2, variableMap)).toStrictEqual({
                '$header': 'Hey there, James',
                'subheader': 'We\'ve got 3 goodies for Anne!',
                'content': {
                    'someOtherNestedFields': {
                        'moreData': 'I\'ve got 3 more variables',
                        'nullData': null
                    },
                    'testNumber': 4
                }
            });
        }),
        test('testing a number', () => {
            expect((0, index_1.GenericStringInterpolate)(4, variableMap)).toStrictEqual(4);
        }),
        test('testing a number', () => {
            expect((0, index_1.GenericStringInterpolate)([], variableMap)).toStrictEqual([]);
        }),
        test('testing a date', () => {
            expect((0, index_1.GenericStringInterpolate)(testDate, variableMap)).toStrictEqual(['Today is 2022-06-04']);
        }),
        test('testing object with nested object with array', () => {
            expect((0, index_1.GenericStringInterpolate)(testObj3, variableMap)).toStrictEqual({
                '$header': 'Hey there, James',
                'subheader': 'We\'ve got 3 goodies for Anne!',
                'content': {
                    'someOtherNestedFields': {
                        'moreData': 'I\'ve got 3 more variables',
                        arrData: ["More array tests for James", "and Anne"]
                    },
                    'testNumber': 4
                }
            });
        }),
        test('testing null', () => {
            expect((0, index_1.GenericStringInterpolate)(null, variableMap)).toStrictEqual(null);
        });
});
//# sourceMappingURL=index.test.js.map