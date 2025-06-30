import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";


type BookingContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const BookingContext = createContext<BookingContextType>({
    open: false,
    setOpen: () => { }
})

type BookingContextProviderProps = {
    children: ReactNode;
};

export const BookingContextProvider = ({ children }: BookingContextProviderProps) => {
    const [open, setOpen] = useState(false)
    const value = { open, setOpen };

    return (
    <BookingContext.Provider value={value}>
        {children}
    </BookingContext.Provider>
    );
}

export const useBookingContextProvider = () => useContext(BookingContext);