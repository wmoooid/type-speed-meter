'use client';

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type TypeContext = {
    text: string;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    position: number;
};

type TypeProviderProps = {
    children: React.ReactNode;
};

const TEXT_LINE =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, reprehenderit quod, distinctio voluptatibus culpa non sit, placeat quam quisquam quos nemo temporibus aliquam dolore earum est molestiae mollitia tenetur hic!';

const TypeContext = createContext<TypeContext | null>(null);

export function TypeContextProvider({ children }: TypeProviderProps) {
    const [text, setText] = useState(TEXT_LINE);
    const [input, setInput] = useState('');
    const position = input.length;

    return <TypeContext.Provider value={{ text, input, setInput, position }}>{children}</TypeContext.Provider>;
}

export default function useTypeContext() {
    const context = useContext(TypeContext);

    if (!context) {
        throw new Error('useTypeContext must be used within a TypeContextProvider');
    }

    return context;
}
