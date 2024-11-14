import solana_classic from '@/public/images/solana_classic.png';
import bonk from '@/public/images/bonk.png';
import book_of_memes from '@/public/images/book_of_memes.png';
import mother from '@/public/images/mother.png';
import daddy from '@/public/images/daddy.png';
import drift from '@/public/images/drift.png';

export const cards = [
  {
    title: 'Top rated projects',
    iconType: 'fireIcon',
    projects: [
      {
        icons: solana_classic,
        tile: 'Solana Classic',
        value_up: '64',
      },
      {
        icons: bonk,
        tile: 'Bonk',
        value_up: '12',
      },
      {
        icons: book_of_memes,
        tile: 'Book of Memes',
        value_up: '9',
      },
    ],
  },
  {
    title: 'New Listings',
    iconType: 'listingIcon',
    projects: [
      {
        icons: mother,
        tile: 'MOTHER',
        value_up: '2',
      },
      {
        icons: daddy,
        tile: 'DADDY',
        value_up: '7',
      },
      {
        icons: drift,
        tile: 'Drift',
        value_up: '1',
      },
    ],
  },
];
