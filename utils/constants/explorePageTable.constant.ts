export interface IExplorePageData {
  avatar: string;
  username: string;
  created: string;
  mkt_cap: number;
  liq: number;
  volume: string;
  swaps: number;
  one_min: number;
  five_min: number;
  intel: {
    tag: string;
    mode: "light" | "dark";
  }[];
  quick_buy: number;
}
export const explorePageTableData: IExplorePageData[] = [
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "10s", // 10 seconds ago
    mkt_cap: 10000, // $10K
    liq: 0, // $0 liquidity
    volume: "5000", // $5K volume
    swaps: 428,
    one_min: -42.23, // -42.23%
    five_min: 482.3, // +482.3%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming a default value for now
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "11s", // 11 seconds ago
    mkt_cap: 301,
    liq: 0,
    volume: "150", // $150 volume
    swaps: 859,
    one_min: +0, // 0%
    five_min: 0, // 0%
    intel: [
      {
        tag: "MAD",
        mode: "dark",
      },
      {
        tag: "FAD",
        mode: "dark",
      },
      {
        tag: "LB",
        mode: "dark",
      },
      {
        tag: "T10",
        mode: "dark",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "12s", // 12 seconds ago
    mkt_cap: 10000, // $10K
    liq: 0,
    volume: "5000", // $5K volume
    swaps: 231,
    one_min: 12, // +12%
    five_min: -0.132, // -0.132%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "16s", // 16 seconds ago
    mkt_cap: 10000, // $10K
    liq: 0,
    volume: "5000", // $5K volume
    swaps: 1540,
    one_min: 0.392, // +0.392%
    five_min: 1.22, // +1.22%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "19s", // 19 seconds ago
    mkt_cap: 9000, // $9K
    liq: 0,
    volume: "13000", // $13K volume
    swaps: 650,
    one_min: 0, // 0%
    five_min: 0, // 0%
    intel: [
      {
        tag: "CV",
        mode: "dark",
      },
      {
        tag: "CR",
        mode: "dark",
      },
      {
        tag: "NHP",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "23s", // 23 seconds ago
    mkt_cap: 11000, // $11K
    liq: 0,
    volume: "5000", // $5K volume
    swaps: 324,
    one_min: 0, // 0%
    five_min: -1.546, // -1.546%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "42s", // 42 seconds ago
    mkt_cap: 9000, // $9K
    liq: 0,
    volume: "6000", // $6K volume
    swaps: 1822,
    one_min: -23.1, // -23.10%
    five_min: 33.91, // +33.91%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "1m", // 1 minute ago
    mkt_cap: 3000, // $3K
    liq: 0,
    volume: "17000", // $17K volume
    swaps: 653,
    one_min: 12.13, // +12.13%
    five_min: -0.0134, // -0.0134%
    intel: [
      {
        tag: "CV",
        mode: "light",
      },
      {
        tag: "CR",
        mode: "dark",
      },
      {
        tag: "NHP",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "dark",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "1m", // 1 minute ago
    mkt_cap: 9000, // $9K
    liq: 0,
    volume: "2000", // $2K volume
    swaps: 138,
    one_min: 0, // 0%
    five_min: 0, // 0%
    intel: [
      {
        tag: "CV",
        mode: "dark",
      },
      {
        tag: "CR",
        mode: "dark",
      },
      {
        tag: "NHP",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "dark",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "1m", // 1 minute ago
    mkt_cap: 23000, // $23K
    liq: 0,
    volume: "5000", // $5K volume
    swaps: 1002,
    one_min: +0.332, // +0.332%
    five_min: 2.309, // +2.309%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "1m", // 1 minute ago
    mkt_cap: 10000, // $10K
    liq: 0,
    volume: "11000", // $11K volume
    swaps: 1127,
    one_min: -0.129, // -0.129%
    five_min: -2.139, // -2.139%
    intel: [
      {
        tag: "MAD",
        mode: "light",
      },
      {
        tag: "FAD",
        mode: "light",
      },
      {
        tag: "LB",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
  {
    avatar: "solanaTokenBadge",
    username: "username",
    created: "2m",
    mkt_cap: 4000, // $4K
    liq: 0,
    volume: "4000", // $4K volume
    swaps: 400,
    one_min: -0.193, // -0.193%
    five_min: 1.388, // +1.388%
    intel: [
      {
        tag: "CV",
        mode: "dark",
      },
      {
        tag: "CR",
        mode: "dark",
      },
      {
        tag: "NHP",
        mode: "light",
      },
      {
        tag: "T10",
        mode: "light",
      },
    ],
    quick_buy: 0, // Assuming default value
  },
];
