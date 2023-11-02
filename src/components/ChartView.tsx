import { InfoIcon } from "@/shared/icons";
import { metricData } from "@/shared/staticData";
import { Button } from "@/shared/ui";
import React from "react";

export default function ChartView() {
  return (
    <section className="py-14 flex mx-auto w-full">
      <section>
        <section className="flex items-end gap-20">
          <div className="grid gap-3 ">
            <p className="text-sm text-primary">Available Balance</p>
            <h1 className="text-primary flex gap-1 text-4xl font-bold ">
              USD
              <span className="text-4xl tracking-tight font-space">
                120,500.00
              </span>
            </h1>
          </div>
          <Button size="lg" shape="round">
            Withdraw
          </Button>
        </section>
        <ChartLine />
      </section>
      <div className="ml-auto max-w-[20rem] w-full">
        <MetricsView />
      </div>
    </section>
  );
}

function ChartLine() {
  return (
    <div className="max-w-[49.5rem] flex flex-col justify-center items-center pt-[5rem]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="767"
        height="178"
        viewBox="0 0 767 178"
        fill="none"
      >
        <path
          d="M1 177L166.916 21.336C211.748 -20.7264 285.462 6.79004 292.871 67.8171V67.8171C293.287 71.2484 293.981 74.6685 294.939 77.9895V77.9895C308.165 123.839 364.75 140.125 400.326 108.322L480.44 36.7048C538.095 -14.8352 627.475 -6.14781 674.126 55.5303L766 177"
          stroke="#FF5403"
          stroke-linecap="round"
        />
      </svg>
      <section className="w-full">
        <div className="w-full relative before:absolute before:left-0 before:w-2 before:h-2 before:bg-secondary before:-top-[2.9px] before:rounded-full h-0.5 my-4 bg-secondary  after:absolute after:right-0 after:w-2 after:h-2 after:bg-secondary after:-top-[2.9px] after:rounded-full"></div>
        <div className="flex text-sm  text-primary  tracking-tight font-space justify-between">
          <p>Apr 1, 2022</p>
          <p>Apr 30, 2023</p>
        </div>
      </section>
    </div>
  );
}

function MetricsView() {
  return (
    <section className="grid gap-8">
      {metricData.map((item, idx) => (
        <div key={idx} className="flex text-primary justify-between">
          <div className="grid gap-2">
            <p className="text-sm ">{item.text}</p>
            <h1 className="text-[1.6rem] tracking-tight flex gap-1 font-bold">
              USD
              <span className=" font-space">{item.price}</span>
            </h1>
          </div>
          <InfoIcon />
        </div>
      ))}
    </section>
  );
}
