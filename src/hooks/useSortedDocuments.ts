import { useMemo } from 'react';
import { useBookingContextProvider } from '../context/BookingContext';
import type { Arrangement } from '../types';

export const useSortedDocuments = (documents: Arrangement[]) => {
  const { sortPhrase } = useBookingContextProvider();

  const sortedDocuments = useMemo(() => {
    if (sortPhrase === 'rastuća cena') {
      return [...documents].sort(
        (a, b) => Number(a.pricePerDay) - Number(b.pricePerDay),
      );
    } else if (sortPhrase === 'opadajuća cena') {
      return [...documents].sort(
        (a, b) => Number(b.pricePerDay) - Number(a.pricePerDay),
      );
    } else {
      return documents;
    }
  }, [documents, sortPhrase]);

  return sortedDocuments;
};
