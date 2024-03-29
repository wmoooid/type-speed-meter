'use client';

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type CarretPosition = HTMLInputElement['selectionStart'];

type TypeContext = {
    text: string;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
    position: CarretPosition;
    setPosition: Dispatch<SetStateAction<CarretPosition>>;
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
    const [position, setPosition] = useState<CarretPosition>(0);

    return <TypeContext.Provider value={{ text, input, setInput, position, setPosition }}>{children}</TypeContext.Provider>;
}

export default function useTypeContext() {
    const context = useContext(TypeContext);

    if (!context) {
        throw new Error('useTypeContext must be used within a TypeContextProvider');
    }

    return context;
}
