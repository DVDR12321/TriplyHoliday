import { Grid, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllCollectionDocuments } from '../../firebase/firebase';
import { useSortedDocuments } from '../../hooks/useSortedDocuments';

import type { Arrangement } from '../../types';
import { ArrangementsCard } from './ArrangementsCard';
import SortBy from './SortBy';

import app3 from '../../assets/apartments/apartment_image1.jpg';
import app1 from '../../assets/apartments/apartment_image2.jpg';
import app2 from '../../assets/apartments/apartment_image3.jpg';
import coverImage from '../../assets/arrrangements_page_header.jpg';

import { Link, useLocation } from 'react-router-dom';
import { ArrangementsTag } from './ArrangementsTag';

// TODO move this to firebase
export const APPARTMENT_IMAGES = [app2, app1, app3];

export const HeaderGrid = styled(Grid)`
  background-attachment: fixed;
  width: 100%;
  height: 65vh;
  background-image: url(${coverImage});
  background-repeat: 'no-repeat';
`;

export const ArrangementsPage = () => {
  const [documents, setDocuments] = useState<Arrangement[]>([]);

  const location = useLocation();

  const loadDocuments = async () => {
    const documents = await getAllCollectionDocuments('arrangements');
    setDocuments(documents);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const sortedDocuments = useSortedDocuments(documents);

  return (
    <>
      <Grid container rowSpacing={8} sx={{ width: '100%' }}>
        <HeaderGrid size={12}></HeaderGrid>

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
                <ArrangementsCard
                  arrangementData={{ ...document }}
                  image={APPARTMENT_IMAGES[id]}
                />
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
