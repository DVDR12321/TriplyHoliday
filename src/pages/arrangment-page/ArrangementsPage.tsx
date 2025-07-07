import { Grid, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getAllCollectionDocuments,
  setNewDocument,
} from '../../firebase/firebase';
import { useSortedDocuments } from '../../hooks/useSortedDocuments';

import type { Arrangement } from '../../types';
import { ArrangementsCard } from './ArrangementsCard';
import SortBy from './SortBy';

import { Link, useLocation } from 'react-router-dom';

import coverImage from '../../assets/arrrangements_page_header.jpg';

import img1 from '../../assets/apartments/apartment_image1.jpg';
import img2 from '../../assets/apartments/apartment_image2.jpg';
import img3 from '../../assets/apartments/apartment_image3.jpg';
import img4 from '../../assets/apartments/apartment_image4.jpg';
import { ArrangementsTag } from './ArrangementsTag';

const imageMap: { [key: string]: string } = {
  0: img1,
  1: img2,
  2: img3,
  3: img4,
};

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

  setNewDocument();

  useEffect(() => {
    loadDocuments();
  }, []);

  const sortedDocuments = useSortedDocuments(documents);

  return (
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
                image={imageMap[id]}
              />
            </Grid>
            <Grid size={4} />
            <Grid size={1} sx={{ my: '5vh' }} />
          </>
        );
      })}
    </Grid>
  );
};
