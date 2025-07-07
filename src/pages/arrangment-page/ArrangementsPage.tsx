import { Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllCollectionDocuments } from '../../firebase/firebase';

import type { Arrangement } from '../../types';
import { ArrangementsCard } from './ArrangementsCard';
import ArrangementsTag from './ArrangementsTag';
import SortBy from './SortBy';

import image from '../../assets/arrrangements_page_header.jpg';
import { useBookingContextProvider } from '../../context/BookingContext';

import { Link, useLocation } from 'react-router-dom';

export const ArrangementsPage = () => {
  const { sortPhrase } = useBookingContextProvider();
  const [documents, setDocuments] = useState<Arrangement[]>([]);

  const location = useLocation();

  const loadDocuments = async () => {
    const documents = await getAllCollectionDocuments('arrangements');
    setDocuments(documents);
  };

  //setNewDocument();
  useEffect(() => {
    loadDocuments();
  }, []);

  const sortDocuments = () => {
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
  };

  const sortedDocuments = sortDocuments();

  return (
    <>
      <Grid container rowSpacing={8} sx={{ width: '100vw' }}>
        <Grid size={12}>
          <img
            src={image}
            alt="header image"
            style={{ height: '75vh', width: '100vw' }}
          />
        </Grid>

        <Grid size={1} sx={{ height: '5' }} />
        <Grid
          size={2}
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2">
            <Link to="/">TriplyHoliday {'> '}</Link>
            <span style={{ fontWeight: 'bold' }}>
              {location.pathname.toString().replace('/', '')}
            </span>
          </Typography>
        </Grid>
        <Grid
          size={5}
          sx={{ display: 'flex', justifyContent: 'end', alignItems: 'bottom' }}
        >
          <SortBy />
        </Grid>
        <Grid size={3} />
        <Grid size={1} sx={{ position: 'sticky', top: '15vh' }}>
          <ArrangementsTag />
        </Grid>

        <Grid size={1} />

        {sortedDocuments.map((document, id) => {
          if (!document.available) return null;

          return (
            <>
              <Grid size={7} key={id}>
                <ArrangementsCard {...document} />
              </Grid>
              <Grid size={4} />
              <Grid size={1} sx={{ my: '5vh' }} />
            </>
          );
        })}
      </Grid>
    </>
  );
};
