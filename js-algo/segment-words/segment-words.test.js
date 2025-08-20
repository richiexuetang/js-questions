const segmentWords = require('./segment-words');
const testCases = require('./segment-words.testcases.json');

describe('segmentWords', () => {
    testCases.forEach((example) => {
        test(`str = [${example.input[0]}] dict = ${example.input[1]}`, () => {
            expect(
                segmentWords(example.input[0], example.input[1]),
            ).toStrictEqual(example.output);
        });
    });
});