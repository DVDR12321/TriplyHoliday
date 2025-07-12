import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { regionNameMap, type SvgPath } from './types';

type GreeceListProps = {
  paths: SvgPath[];
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

const StyledList = styled(List)(({ theme }) => ({
  maxHeight: 600,
  overflowY: 'auto',
  width: 300,
  padding: 0,
  backgroundColor: 'transparent',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(1),
    maxHeight: 'none',
  },
}));

const CustomListItemButton = styled(ListItemButton)<{ isHovered: boolean }>(
  ({ isHovered, theme }) => ({
    userSelect: 'none',
    borderRadius: 6,
    marginBottom: 6,
    fontSize: '1.1rem',
    backgroundColor: isHovered ? '#555555' : 'transparent',
    color: isHovered ? '#ffffff' : '#dddddd',
    transition: 'background 0.2s ease',

    '&:hover': {
      backgroundColor: '#555555',
      color: '#ffffff',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginBottom: 0,
      padding: theme.spacing(1),
    },
  }),
);

export const GreeceList = ({
  paths,
  hoveredId,
  setHoveredId,
}: GreeceListProps) => {
  return (
    <StyledList>
      {paths.map(({ id, title }) => {
        const translatedTitle = regionNameMap[title] || title || id;
        const isHovered = hoveredId === id;

        return (
          <CustomListItemButton
            key={id}
            isHovered={isHovered}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => alert(`Kliknuto: ${translatedTitle} (ID: ${id})`)}
          >
            <ListItemText primary={translatedTitle} />
          </CustomListItemButton>
        );
      })}
    </StyledList>
  );
};
