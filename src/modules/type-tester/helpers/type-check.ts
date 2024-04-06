export type TestLetter = string | undefined;
export type TestResult = boolean | null;

export const typeCheck = (a: TestLetter, b: TestLetter): TestResult => {
    if (a === undefined || b === undefined) return null;
    return a === b;
};
