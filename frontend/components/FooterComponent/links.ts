export interface LinkType {
  id: number;
  title: string;
  url: string;
}

export const learnMoreLinks: LinkType[] = [
  { id: 1, title: 'contactUs', url: 'https://www.knowit.no/kontakt/' },
  { id: 2, title: 'blogg', url: 'https://blogg.knowit.no/' },
  { id: 3, title: 'services', url: 'https://www.knowit.no/tjenester/solutions/' },
];

export const otherLanguages: LinkType[] = [
  { id: 1, title: 'no', url: 'https://www.knowit.no/' },
  { id: 2, title: 'en', url: 'https://www.knowit.eu/' },
  { id: 3, title: 'fi', url: 'https://www.knowit.fi/' },
  { id: 4, title: 'se', url: 'https://www.knowit.se/' },
];
