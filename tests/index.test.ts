import { GenericStringInterpolate } from '../src/index';
const variableMap = new Map<string, any>();
variableMap.set('$testVariable1', 'James');
variableMap.set('$testVariable2', 'Anne');
variableMap.set('$testVariable3', 3);
variableMap.set('$testVariable4', new Date('2022-06-04').toISOString().split('T')[0]);


interface TestInterface {
    testHeader: string
}

const testStr: string = 'Hey there, $testVariable1 & $testVariable2';

const testObj: TestInterface = {
    testHeader: 'Hey there, $testVariable1'
};

const testArr: string[] = ['Hey there, $testVariable1', 'Hey there, $testVariable2!']

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
            expect(GenericStringInterpolate(testStr, variableMap)).toBe('Hey there, James & Anne');
        }),
        test('testing simple object of TestInterface type should replace the variables in the property', () => {
            expect(GenericStringInterpolate(testObj, variableMap)).toStrictEqual({ 'testHeader': 'Hey there, James' })
        }),
        test('testing boolean false', () => {
            expect(GenericStringInterpolate(true, variableMap)).toStrictEqual(true)
        }),
        test('testing boolean false', () => {
            expect(GenericStringInterpolate(false, variableMap)).toStrictEqual(false)
        }),
        test('testing array', () => {
            expect(GenericStringInterpolate(testArr, variableMap)).toStrictEqual(['Hey there, James', 'Hey there, Anne!'])
        }),
        test('testing object with nested object', () => {
            expect(GenericStringInterpolate(testObj2, variableMap)).toStrictEqual({
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
            expect(GenericStringInterpolate(4, variableMap)).toStrictEqual(4)
        }),
        test('testing a number', () => {
            expect(GenericStringInterpolate([], variableMap)).toStrictEqual([])
        }),
        test('testing a date', () => {
            expect(GenericStringInterpolate(testDate, variableMap)).toStrictEqual(['Today is 2022-06-04'])
        }),
        test('testing object with nested object with array', () => {
            expect(GenericStringInterpolate(testObj3, variableMap)).toStrictEqual({
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
            expect(GenericStringInterpolate(null, variableMap)).toStrictEqual(null)
        })
});