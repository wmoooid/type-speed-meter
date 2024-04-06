'use client';

import React, { useState } from 'react';
import styles from './type-tester.module.css';
import Tooltip from '@/shared/ui/tooltip/tooltip';
import useTimeStore from '../../hooks/useTimeStore';
import { TestResult, typeCheck } from '../../helpers/type-check';

type TypeTesterLetterProps = {
    letter: string;
    test: TestResult;
    active: boolean;
};

type CaretPosition = HTMLInputElement['selectionStart'];

const TypeTesterLetter = React.memo(({ letter, test, active }: TypeTesterLetterProps) => {
    return (
        <span type-correct={test === null ? test : String(test)} type-active={active ? '' : null}>
            {letter}
        </span>
    );
});

export default function TypeTester({ text }: { text: string }) {
    const [input, setInput] = useState('');
    const [position, setPosition] = useState<CaretPosition>(0);

    const { getTime, clearTime } = useTimeStore();
    const secondsPassed = getTime();
    const symbolsPerMin = Math.floor(input.length / (secondsPassed / 60));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (value.length > text.length) {
            setInput(value.slice(0, text.length));
            return;
        }

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
        <div className={styles.content}>
            <div className={styles.text_imput_wrapper}>
                <p className={styles.text_block}>
                    {text.split('').map((letter, i) => (
                        <TypeTesterLetter key={letter + i} letter={letter} test={typeCheck(letter, input[i])} active={position === i} />
                    ))}
                </p>
                <input value={input} onChange={handleChange} onKeyUp={handleKeyup} type='text' className={styles.input_hidden} autoFocus />
            </div>

            <ul className={styles.tooltips_list}>
                <li className={styles.tooltip_item}>
                    <Tooltip name='Скорость печати:' value={`${input.length > 3 ? symbolsPerMin : 0} с/м`} />
                </li>
            </ul>
        </div>
    );
}
