import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";


type BookingContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    sortPhrase: string;
    setSortPhrase: Dispatch<SetStateAction<string>>;
};

type BookingContextProviderProps = {
    children: ReactNode;
};

export const BookingContext = createContext<BookingContextType>({
    open: false,
    setOpen: () => { },
    name: '',
    setName: () => { },
    sortPhrase: '',
    setSortPhrase: () => { },
})

export const BookingContextProvider = ({ children }: BookingContextProviderProps) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [sortPhrase, setSortPhrase] = useState('rastuća cena');
    const value = { open, setOpen, name, setName, sortPhrase, setSortPhrase };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
}

export const useBookingContextProvider = () => useContext(BookingContext);