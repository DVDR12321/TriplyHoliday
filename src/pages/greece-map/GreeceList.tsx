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

const StyledList = styled(List)`
  max-height: 600px;
  overflow-y: auto;
  width: 300px;
  padding: 0;
  background-color: transparent;
`;

const CustomListItemButton = styled(ListItemButton)<{ isHovered: boolean }>`
  user-select: none;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 1.1rem;
  background-color: ${({ isHovered }) =>
    isHovered ? '#555555' : 'transparent'};
  color: ${({ isHovered }) => (isHovered ? '#ffffff' : '#dddddd')};
  transition: background 0.2s ease;

  &:hover {
    background-color: #555555;
    color: #ffffff;
  }
`;

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
