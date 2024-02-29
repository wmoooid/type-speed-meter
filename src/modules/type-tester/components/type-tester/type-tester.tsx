'use client';

import styles from './type-tester.module.css';
import useTypeContext, { TypeContextProvider } from '../type-context/type-context';

type TestLetter = string | undefined;

type TestResult = 'right' | 'wrong' | null;

type TypeTesterLetterProps = {
    letter: string;
    test: TestResult;
};

export default function TypeTesterWrapper() {
    return (
        <TypeContextProvider>
            <TypeTesterMain />
        </TypeContextProvider>
    );
}

const typeCheck = (a: TestLetter, b: TestLetter): TestResult => {
    if (a === undefined || b === undefined) return null;
    if (a === b) return 'right';
    if (a !== b) return 'wrong';
    return null;
};

export function TypeTesterMain() {
    const { text, input, setInput, position } = useTypeContext();

    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <p className={styles.text_block}>
                        {text.split('').map((letter, i) => (
                            <TypeTesterLetter key={letter + i} letter={letter} test={typeCheck(letter, input[i])} />
                        ))}
                    </p>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type='text' className={styles.input_hidden} />
                </div>
            </div>
        </section>
    );
}

function TypeTesterLetter({ letter, test }: TypeTesterLetterProps) {
    return <span type-test={test}>{letter}</span>;
}
