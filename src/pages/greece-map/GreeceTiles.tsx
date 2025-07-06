import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { regionNameMap, type SvgPath } from './types';

type GreeceListProps = {
    paths: SvgPath[];
    hoveredId: string | null;
    setHoveredId: (id: string | null) => void;
};

const WrapperGrid = styled(Grid)`
    width: 600px;
`

const CustomGrid = styled(Grid) <{ isHovered: boolean }>`
  user-select: none;
  border-radius: 6px;
  font-size: 1.1rem;
  background-color: ${({ isHovered }) =>
        isHovered ? '#1976d2' : 'transparent'};
  color: ${({ isHovered }) => (isHovered ? '#white ' : '#adadad')};
  transition: background 0.2s ease;

  &:hover {
    background-color: #1976d2;
    color: #white ;
  }
`;

export const GreeceTiles = ({
    paths,
    hoveredId,
    setHoveredId,
}: GreeceListProps) => {
    const handleRegionClick = () => {
        const section = document.getElementById('recommennded-destinations');
        if (section) {
            const yOffset = -70;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }

    };

    return (
        <WrapperGrid container direction="row" spacing={2} justifyContent='space-between'>
            {paths.map(({ id, title }) => {
                const translatedTitle = regionNameMap[title] || title || id;
                const isHovered = hoveredId === id;

                return (
                    <CustomGrid
                        size={6}
                        key={id}
                        isHovered={isHovered}
                        onMouseEnter={() => setHoveredId(id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleRegionClick()}
                        sx={{ padding: '2ch 1ch' }}
                    >
                        <Typography fontWeight='bold'>
                            {translatedTitle}
                        </Typography>
                    </CustomGrid>
                );
            })}
        </WrapperGrid>
    );
};