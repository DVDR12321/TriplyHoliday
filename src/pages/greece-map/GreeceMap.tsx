import styled from 'styled-components';
import { Region } from './Region';
import { regionNameMap, type SvgPath } from './types';

const Svg = styled.svg`
  width: 700px;
  height: auto;
`;

type GreeceMapProps = {
  paths: SvgPath[];
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
};

export const GreeceMap = ({
  paths,
  hoveredId,
  setHoveredId,
}: GreeceMapProps) => {
  const handleRegionClick = (id: string, name: string) => {
    const translated = regionNameMap[name] || name;
    //alert(`Kliknuto: ${translated} (ID: ${id})`);

    const section = document.getElementById('recommennded-destinations');
    if (section) {
      const yOffset = -70;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

  };

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 918.78973 792.42786">
      {paths.map(({ id, d, title }) => {
        const translatedTitle = regionNameMap[title] || title || id;
        return (
          <Region
            key={id}
            id={id}
            d={d}
            title={translatedTitle}
            isHovered={hoveredId === id}
            onHover={setHoveredId}
            onClick={handleRegionClick}
          />
        );
      })}
    </Svg>
  );
};
