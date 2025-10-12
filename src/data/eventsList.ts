export interface Event {
  date: string;
  title: string;
  url: string;
}

export const eventsList: Event[] = [
  {
    date: 'Oct 2025',
    title: 'Paper accepted at HiPC 2025',
    url: 'https://hipc.org/',
  },
  {
    date: 'Sept 2025',
    title: 'Paper presented at SCC 2025',
    url: 'https://www.servicessociety.org/scc',
  },
];
