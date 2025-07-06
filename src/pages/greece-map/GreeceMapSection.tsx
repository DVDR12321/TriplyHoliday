import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { GreeceMap } from './GreeceMap';
import { GreeceTiles } from './GreeceTiles';
import { useGetGreecePaths } from './hooks/use-get-greece-paths';

const OuterContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 20px',
  backgroundColor: 'white',
  color: '#f5f5f5',
}));

const Container = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(3),
  alignItems: 'flex-start',
  maxWidth: '70vw',
  width: '100%',
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

        <GreeceTiles
          paths={paths}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </Container>
    </OuterContainer>
  );
};
