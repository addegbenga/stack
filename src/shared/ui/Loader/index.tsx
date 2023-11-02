import React from "react";

export function TransactionSkeleton({ count }: { count: number }) {
  return (
    <section className="grid gap-4">
      {Array.from({ length: count }).map((item, idx) => (
        <div key={idx} className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 animate-pulse h-12 bg-secondary rounded-full"></div>
            <div className="flex  flex-col space-y-1">
              <div className="w-36 animate-pulse h-4 bg-secondary rounded"></div>
              <div className="w-28 animate-pulse h-4 bg-secondary rounded"></div>
            </div>
          </div>
          <div className="font-space grid gap-2">
            <div className="w-20 animate-pulse h-4 bg-secondary rounded"></div>
            <div className="w-14 animate-pulse h-3 bg-secondary rounded"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
export function WalletSkeleton({ count }: { count: number }) {
  return (
    <section className="grid gap-12">
      {Array.from({ length: count }).map((item, idx) => (
        <div key={idx} className="flex  justify-between animate-pulse">
          <div className="grid gap-2">
            <div className="text-sm bg-secondary text-primary h-2 w-20 rounded"></div>
            <div className="text-[1.6rem] tracking-tight flex gap-1 font-bold">
              <div className="bg-secondary  text-primary bg-opacity-40 h-3 w-24 rounded"></div>
            </div>
          </div>
          <div className="w-4 h-4 bg-secondary rounded-full animate-spin"></div>
        </div>
      ))}
    </section>
  );
}

export function TextLoader() {
  return (
    <section className="flex items-end gap-20 animate-pulse">
      <div className="grid gap-3">
        <p className="text-sm bg-secondary text-primary bg-opacity-40 h-4 w-32 rounded"></p>
        <div className="bg-secondary text-primary bg-opacity-40 h-8 w-48 rounded"></div>
      </div>
      <div className="w-24 h-12 bg-secondary bg-opacity-40 rounded"></div>
    </section>
  );
}
