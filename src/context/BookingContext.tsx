import { createContext, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";


type BookingContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const BookingContext = createContext<BookingContextType>({
    open: false,
    setOpen: () => { }
})

type Props = {
    children: ReactNode;
};

export const BookingContextProvider = ({ children }: Props) => {

    const [open, setOpen] = useState(false)

    const value = { open, setOpen };

    return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
}