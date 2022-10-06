export interface LinkType {
  id: number;
  title: string;
  url: string;
}

export const learnMoreLinks: LinkType[] = [
  { id: 1, title: 'Kontakt oss', url: 'https://www.knowit.no/kontakt/' },
  { id: 2, title: 'Knowit blogg', url: 'https://blogg.knowit.no/' },
  { id: 3, title: 'Våre tjenester', url: '' },
];

export const otherLanguages: LinkType[] = [
  { id: 1, title: 'NO - Norge', url: 'https://www.knowit.no/' },
  { id: 2, title: 'EN - English', url: 'https://www.knowit.eu/' },
  { id: 3, title: 'FI - Soumi', url: 'https://www.knowit.fi/' },
  { id: 4, title: 'SE - Sverige', url: 'https://www.knowit.se/' },
];
