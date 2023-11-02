import ChartView from "@/components/ChartView";
import TransactionsView from "@/components/Transactions";

export default function Home() {
  return (
    <main className="max-w-7xl  mx-auto ">
      <ChartView />
      <TransactionsView />
    </main>
  );
}
