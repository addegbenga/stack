import { ChevronIcon, DownloadIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import React from "react";

export default function TransactionsView() {
  return (
    <section className="py-10 flex-col flex w-full">
      <section className="flex w-full justify-between border-b pb-7 border-secondary items-center">
        <section className=" text-primary tracking-tight">
          <h1 className="font-space font-bold text-xl">24 Transactions </h1>
          <p className=" text-sm font-space">
            Your transactions for the last 7 days
          </p>
        </section>
        <section className="flex  gap-3">
          <Button
            size="withIcon"
            intent="secondary"
            preset={<ChevronIcon />}
            shape="round"
          >
            Filter
          </Button>
          <Button
            size="withIcon"
            intent="secondary"
            preset={<DownloadIcon />}
            shape="round"
          >
            Export list
          </Button>
        </section>
      </section>
      <section className="py-10">
        <ListCard />
      </section>
    </section>
  );
}

function ListCard() {
  return (
    <section className="flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 border rounded-full"></div>
        <div className="flex text-primary  flex-col gap-1">
          <h1 className="font-medium  tracking-tight">Psychology of Money</h1>
          <p className="text-sm font-space tracking-tight">Roy Cash</p>
        </div>
      </div>
      <div className="font-space">
        <h1 className="tracking-tight font-medium">USD 600</h1>
        <p className="text-sm tracking-tight">Apr 03, 2022</p>
      </div>
    </section>
  );
}
