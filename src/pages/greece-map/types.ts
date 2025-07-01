export type SvgPath = {
  id: string;
  d: string;
  title: string;
};

export const regionNameMap: Record<string, string> = {
  'East Macedonia and Thrace': 'Istočna Makedonija i Trakija',
  'Central Macedonia': 'Centralna Makedonija',
  'West Macedonia': 'Zapadna Makedonija',
  Epirus: 'Epir',
  Thessaly: 'Tesalija',
  'Ionian Islands': 'Jonska ostrva',
  'West Greece': 'Zapadna Grčka',
  'Central Greece': 'Centralna Grčka',
  Attica: 'Atika',
  Peloponnese: 'Peloponez',
  'North Aegean': 'Severni Egej',
  'South Aegean': 'Južni Egej',
  Crete: 'Krit',
  'Mount Athos': 'Sveta Gora',
};
