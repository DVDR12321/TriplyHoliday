import styled from 'styled-components';
import type { SvgPath } from './types';

const RegionPath = styled.path<RegionPathProps>`
  fill: ${({ isHovered }) =>
    isHovered ? '#ffffff' : '#888888'}; /* Svetlija siva za nehover */
  stroke: #bbbbbb;
  stroke-width: 1;
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
