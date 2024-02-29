import { TEST_RESULT_RIGHT, TEST_RESULT_WRONG } from '../consts/consts';

export type TestLetter = string | undefined;
export type TestResult = typeof TEST_RESULT_RIGHT | typeof TEST_RESULT_WRONG | null;

export const typeCheck = (a: TestLetter, b: TestLetter): TestResult => {
    if (a === undefined || b === undefined) return null;
    if (a === b) return TEST_RESULT_RIGHT;
    if (a !== b) return TEST_RESULT_WRONG;
    return null;
};
