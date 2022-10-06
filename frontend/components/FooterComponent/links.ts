export interface LinkType {
  id: number;
  title: string;
  url: string;
}

export const learnMoreLinks: LinkType[] = [
  { id: 1, title: 'Kontakt oss', url: '' },
  { id: 2, title: 'Knowit blogg', url: '' },
  { id: 3, title: 'Våre tjenester', url: '' },
];

export const otherLanguages: LinkType[] = [
  { id: 1, title: 'NO - Norge', url: '' },
  { id: 2, title: 'EN - English', url: '' },
  { id: 3, title: 'FI - Soumi', url: '' },
  { id: 4, title: 'SE - Sverige', url: '' },
];
