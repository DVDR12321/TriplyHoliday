import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getAllCollectionDocuments,
  setNewDocument,
} from '../../firebase/firebase';

import type { Arrangement } from '../../types';
import { ArrangementsCard } from './ArrangementsCard';
import ArrangementsTag from './ArrangementsTag';

import image from '../../assets/arrrangements_page_header.jpg';
import { BookingContextProvider } from '../../context/BookingContext';

export const ArrangementsPage = () => {
  const [documents, setDocuments] = useState<Arrangement[]>([]);

  const loadDocuments = async () => {
    const documents = await getAllCollectionDocuments('arrangements');
    setDocuments(documents);
  };

  setNewDocument();
  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <Grid container spacing={2} sx={{ width: '100vw' }}>
      <Grid size={12}>
        <img
          src={image}
          alt="header image"
          style={{ height: '80vh', width: '100vw' }}
        />
      </Grid>
      <Grid size={1} />

      {documents.map((document, id) => {
        if (!document.available) return null;

        return (
          <BookingContextProvider>
            <ArrangementsTag />
            <Grid size={6} key={id}>
              <ArrangementsCard {...document} />
            </Grid>
            <Grid size={5} />
            <Grid size={1} />
          </BookingContextProvider>
        );
      })}
    </Grid>
  );
};
