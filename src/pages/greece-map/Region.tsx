import styled from 'styled-components';
import type { SvgPath } from './types';

const RegionPath = styled.path<RegionPathProps>`
  fill: ${({ isHovered }) =>
    isHovered ? '#1976d2' : '#adadad'}; /* Svetlija siva za nehover */
  stroke:rgb(255, 255, 255);
  stroke-width: 2;
  cursor: pointer;
  transition: fill 0.2s ease;
`;

interface RegionProps extends SvgPath {
  isHovered: boolean;
  onHover: (id: string | null) => void;
  onClick?: (id: string, name: string) => void;
}

type RegionPathProps = {
  isHovered: boolean;
};

export const Region = ({
  id,
  d,
  title,
  isHovered,
  onHover,
  onClick,
}: RegionProps) => (
  <RegionPath
    id={id}
    d={d}
    data-name={title}
    isHovered={isHovered}
    onClick={() => onClick?.(id, title)}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  />
);
