// ============================================================================
// RATES & PRICING — EDIT THIS FILE
// ----------------------------------------------------------------------------
// This data drives the pricing table in the Reservation section
// (src/components/Reservation.tsx). To update prices, edit the array below —
// no component code changes needed.
//
//   season: display name of the rate period
//   dates:  the date range / months the rate applies to
//   price:  nightly price, formatted exactly as you want it shown
//
// Owner-confirmed Summer 2026 seasonal rates (10 periods).
// ============================================================================
export interface Rate {
  season: string;
  dates: string;
  price: string;
}
export const rates: Rate[] = [
  {
    season: "Start of Season",
    dates: "07 May – 31 May",
    price: "€118 / night",
  },
  {
    season: "Early June",
    dates: "01 Jun – 15 Jun",
    price: "€160 / night",
  },
  {
    season: "Late June",
    dates: "15 Jun – 30 Jun",
    price: "€180 / night",
  },
  {
    season: "Early July",
    dates: "01 Jul – 11 Jul",
    price: "€240 / night",
  },
  {
    season: "Mid July",
    dates: "11 Jul – 18 Jul",
    price: "€260 / night",
  },
  {
    season: "Late July",
    dates: "19 Jul – 31 Jul",
    price: "€280 / night",
  },
  {
    season: "Peak Season",
    dates: "01 Aug – 27 Aug",
    price: "€318 / night",
  },
  {
    season: "Late August",
    dates: "27 Aug – 08 Sep",
    price: "€260 / night",
  },
  {
    season: "Early September",
    dates: "09 Sep – 20 Sep",
    price: "€180 / night",
  },
  {
    season: "Late September",
    dates: "20 Sep – 30 Sep",
    price: "€140 / night",
  },
];
