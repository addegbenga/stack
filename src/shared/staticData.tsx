import { HomeIcon, AnalyticsIcon, RevenueIcon, CrmIco, AppIcon } from "./icons";

export const navLinks = [
  {
    text: "Home",
    icon: <HomeIcon className="fill-primary" />,
  },
  {
    text: "Analytics",
    icon: <AnalyticsIcon className="fill-primary" />,
  },
  {
    text: "Revenue",
    icon: <RevenueIcon className="fill-primary" />,
  },
  {
    text: "CRM",
    icon: <CrmIco className="fill-primary" />,
  },
  {
    text: "Apps",
    icon: <AppIcon className="fill-primary" />,
  },
];

export const metricData = [
  {
    text: "Ledger Balance",
    price: "55,080.00",
  },
  {
    text: "Total Payout",
    price: "55,080.00",
  },
  {
    text: "Total Revenue",
    price: "175,580.00",
  },
  {
    text: "Pending Payout",
    price: "0.00",
  },
];

export const txdata = [
  {
    name: "Transaction",
    income: true,
  },
  {
    name: "Transaction",
    income: false,
  },
  {
    name: "Transaction",
    income: false,
  },
  {
    name: "Transaction",
    income: false,
  },
  {
    name: "Transaction",
    income: false,
  },
  {
    name: "Transaction",
    income: false,
  },
];

export const txTypeData = [
  "Store Transactions",
  "Get Tipped",
  "Withdrawals",
  "Chargebacks",
  "Cashbacks",
  "Refer & Earn",
];
export const txStatusData = ["Successful", "Pending", "Failed"];
