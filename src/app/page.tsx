import ChartView from "@/components/ChartView";
import TransactionsView from "@/components/Transactions";

export default function Home() {
  return (
    <main className="max-w-7xl px-14 2xl:px-0  mx-auto ">
      <ChartView />
      <TransactionsView />
    </main>
  );
}
