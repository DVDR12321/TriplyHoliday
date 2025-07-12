import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { GreeceList } from './GreeceList';
import { GreeceMap } from './GreeceMap';
import { useGetGreecePaths } from './hooks/use-get-greece-paths';

const OuterContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 20px',
  backgroundColor: '#2f2f2f',
  color: '#f5f5f5',
}));

const Container = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(3),
  alignItems: 'flex-start',
  maxWidth: 950,
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch', // allow full width stacking
  },
}));

export const GreeceMapSection = () => {
  const { paths } = useGetGreecePaths();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <OuterContainer id="greece-map-section">
      <Container>
        <GreeceMap
          paths={paths}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />

        <GreeceList
          paths={paths}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </Container>
    </OuterContainer>
  );
};
