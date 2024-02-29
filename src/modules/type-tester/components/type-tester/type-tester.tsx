'use client';

import React from 'react';
import styles from './type-tester.module.css';
import useTimeStore from '../../hooks/useTimeStore';
import useTypeContext, { TypeContextProvider } from '../type-context/type-context';
import { TestResult, typeCheck } from '../../helpers/type-check';

type TypeTesterLetterProps = {
    letter: string;
    test: TestResult;
    active: boolean;
};

function TypeTesterWrapper() {
    return (
        <TypeContextProvider>
            <TypeTesterMain />
        </TypeContextProvider>
    );
}

const TypeTesterLetter = React.memo(({ letter, test, active }: TypeTesterLetterProps) => {
    return (
        <span type-test={test} type-active={active ? '' : null}>
            {letter}
        </span>
    );
});

function TypeTesterMain() {
    const { text, input, setInput, position, setPosition } = useTypeContext();
    const { getTime, clearTime } = useTimeStore();

    const secondsPassed = getTime();
    const symbolsPerMin = Math.floor((text.length / secondsPassed) * 60);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (value.length > text.length) return;

        setInput(value);
        setPosition(event.target.selectionStart);

        if (value.length === 1) clearTime();
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
                    <span>{input.length > 3 ? symbolsPerMin : 0}</span>
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

export default TypeTesterWrapper;
