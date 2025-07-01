import { useEffect, useState } from 'react';
import type { SvgPath } from '../types';

export const useGetGreecePaths = () => {
  const [paths, setPaths] = useState<SvgPath[]>([]);

  useEffect(() => {
    fetch('assets/greece.svg')
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgPaths = Array.from(doc.querySelectorAll('path')).map(
          (path) => ({
            id: path.id,
            d: path.getAttribute('d') || '',
            title: path.getAttribute('title') || '',
          }),
        );
        setPaths(svgPaths);
      });
  }, []);

  return {
    paths,
  };
};
