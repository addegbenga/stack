"use client";
import { ChevronIcon, DownloadIcon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import ModalView from "@/shared/ui/Modal/modal";
import React from "react";
import FilterView from "./Filter";
import { useRouter } from "next/navigation";
import { useGetAllSearchQuery, useSearchQuery } from "@/shared/hooks";
import { getFilterCount } from "@/shared/functions";
import useFetchWithAbort from "@/shared/hooks/fetch";
import { ITransactionReturnType } from "@/service/types";
import { apiUrl } from "@/service";
import { TransactionSkeleton } from "@/shared/ui/Loader";
import { ErrorCard, ListCard } from "@/shared/ui/Card/card";

const filterKey = "f";

export default function TransactionsView() {
  const { data, loading, error } = useFetchWithAbort<ITransactionReturnType[]>(
    `${apiUrl}/transactions`
  );
  const router = useRouter();
  const { queryValues } = useGetAllSearchQuery({});
  const { totalLength } = getFilterCount(queryValues);
  const { createQueryStringFn } = useSearchQuery();

  const handleClose = () => {
    const resp = createQueryStringFn(filterKey, "close");
    router.push(`?${resp}`, { scroll: false });
  };

  const handleOpenFilterModal = () => {
    const resp = createQueryStringFn(filterKey, "open");
    router.push(`?${resp}`, { scroll: false });
  };

  return (
    <>
      <ModalView
        intent="sideModal"
        size="lg"
        isOpen={queryValues[filterKey] === "open" ? true : false}
        handleClose={handleClose}
      >
        <FilterView handleClose={handleClose} />
      </ModalView>

      <section className="py-10 transition-all  flex-col flex w-full">
        <section className="flex w-full justify-between border-b pb-7 border-secondary items-center">
          <section className=" text-primary tracking-tight">
            <h1 className="font-space font-bold text-xl">
              {data ? data.length : ""} Transactions{" "}
            </h1>
            <p className=" text-sm font-space">
              Your transactions for the last 7 days
            </p>
          </section>
          <section className="flex  gap-3">
            <Button
              onClick={handleOpenFilterModal}
              size="withIcon"
              intent="secondary"
              preset={<ChevronIcon className="fill-secondary-foreground" />}
              shape="round"
            >
              Filter
              {totalLength > 0 && (
                <span className="bg-primary text-primary-foreground text-xs grid items-center w-5 h-5 rounded-full">
                  {totalLength}
                </span>
              )}
            </Button>
            <Button
              size="withIcon"
              intent="secondary"
              preset={<DownloadIcon className="fill-secondary-foreground" />}
              shape="round"
            >
              Export list
            </Button>
          </section>
        </section>

        {error ? (
          <ErrorCard
            subText="Try Refreshing the page."
            handleClose={() => true}
            text="Error Fetching Transaction"
          />
        ) : loading ? (
          <section className="py-10 ">
            <TransactionSkeleton count={10} />
          </section>
        ) : data && data.length > 0 ? (
          <section className="py-10 transition-all  grid gap-8">
            {data.map((item, idx) => (
              <ListCard item={item} key={idx} />
            ))}
          </section>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
