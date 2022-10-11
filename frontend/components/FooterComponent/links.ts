export interface LinkType {
  id: number;
  title: string;
  url: string;
}

export const learnMoreLinks: LinkType[] = [
  { id: 1, title: 'contactUs', url: 'https://www.knowit.no/kontakt/' },
  { id: 2, title: 'blog', url: 'https://blogg.knowit.no/' },
  { id: 3, title: 'services', url: 'https://www.knowit.no/tjenester/solutions/' },
];

export const otherLanguages: LinkType[] = [
  { id: 1, title: 'nb', url: 'https://www.knowit.no/' },
  { id: 2, title: 'en', url: 'https://www.knowit.eu/' },
];
