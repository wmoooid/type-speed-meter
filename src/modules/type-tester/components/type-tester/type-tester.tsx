'use client';

import React from 'react';
import styles from './type-tester.module.css';
import useTypeContext, { TypeContextProvider } from '../type-context/type-context';
import { TEST_RESULT_RIGHT, TEST_RESULT_WRONG } from '../../consts/consts';

type TestLetter = string | undefined;
type TestResult = typeof TEST_RESULT_RIGHT | typeof TEST_RESULT_WRONG | null;

type TypeTesterLetterProps = {
    letter: string;
    test: TestResult;
    active: boolean;
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
    if (a === b) return TEST_RESULT_RIGHT;
    if (a !== b) return TEST_RESULT_WRONG;
    return null;
};

const TypeTesterLetter = React.memo(({ letter, test, active }: TypeTesterLetterProps) => {
    return (
        <span type-test={test} type-active={active ? '' : null}>
            {letter}
        </span>
    );
});

export function TypeTesterMain() {
    const { text, input, setInput, position, setPosition } = useTypeContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        setPosition(event.target.selectionStart);
    };

    const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.target instanceof HTMLInputElement) {
            event.target.selectionStart = input.length;
        }
    };

    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <p className={styles.text_block}>
                        {text.split('').map((letter, i) => (
                            <TypeTesterLetter key={letter + i} letter={letter} test={typeCheck(letter, input[i])} active={position === i} />
                        ))}
                    </p>
                    <input value={input} onChange={handleChange} onKeyUp={handleKeyup} type='text' className={styles.input_hidden} />
                </div>
            </div>
        </section>
    );
}
