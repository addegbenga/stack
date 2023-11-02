"use client";
import { useGetAllSearchQuery, useSearchQuery } from "@/shared/hooks";
import { ChevronIcon, XIcon } from "@/shared/icons";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";
import { txTypeData, txStatusData } from "@/shared/staticData";
import { Button } from "@/shared/ui";

import {
  ListSelectMenu,
  ListSelectMenuChild,
  SelectMenu,
} from "@/shared/ui/Menu/menu";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FilterView({
  handleClose,
}: {
  handleClose: () => void;
}) {
  const router = useRouter();
  const { queryValues } = useGetAllSearchQuery({});

  const statusQuery = queryValues?.status
    ? JSON.parse(queryValues?.status)
    : [];
  const txTypeQuery = queryValues?.type ? JSON.parse(queryValues?.type) : [];
  const initialState = {
    startDate: queryValues?.startDate ? queryValues?.startDate : "",
    endDate: queryValues?.endDate ? queryValues?.endDate : "",
    transactionType: txTypeQuery as string[],
    transactionStatus: statusQuery as string[],
  };

  const { createQueryStringfromObj, removeQueryParamsByKeys } =
    useSearchQuery();

  const [filterValues, setFilterValues] = useState(initialState);

  const handleSelectChange = ({
    selectedIndex,
    filterKey,
  }: {
    selectedValue: string;
    selectedIndex: string;
    filterKey: keyof typeof filterValues;
  }) => {
    const keyValue = filterValues[filterKey];
    if (Array.isArray(keyValue)) {
      const checkIndex = keyValue.findIndex(
        (item: any) => item === selectedIndex
      );
      setFilterValues({
        ...filterValues,
        [filterKey]:
          checkIndex === -1
            ? [...keyValue, selectedIndex]
            : keyValue.filter((item) => item !== selectedIndex),
      });
    }
  };

  const handleApplyFilter = () => {
    const resp = createQueryStringfromObj({
      status: filterValues.transactionStatus,
      type: filterValues.transactionType,
      startDate: filterValues.startDate,
      endDate: filterValues.endDate,
      f: "close",
    });
    router.push(`?${resp}`);
  };

  const handleClearFilter = () => {
    const resp = removeQueryParamsByKeys([
      "status",
      "type",
      "startDate",
      "endDate",
    ]);
    router.push(`?${resp}`);
    setFilterValues({
      transactionStatus: [],
      transactionType: [],
      startDate: "",
      endDate: "",
    });
  };

  return (
    <section className="bg-white w-full p-6 rounded-tl-3xl  h-screen  ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  font-space tracking-tight font-semibold text-primary">
          Filter
        </h1>
        <Button intent="ghost" onClick={handleClose}>
          <XIcon className="w-7  fill-primary" />
        </Button>
      </div>

      <section className="flex py-6 tracking-tight font-space  gap-3 ">
        <Button size="sm" shape="round" intent="outline">
          Today
        </Button>
        <Button size="sm" shape="round" intent="outline">
          Last 7 days
        </Button>
        <Button size="sm" shape="round" intent="outline">
          This Month
        </Button>
        <Button shape="round" size="sm" intent="outline">
          Last 3 Month
        </Button>
      </section>

      <section className="grid gap-6 pt-2">
        <section className="grid gap-2 ">
          <h1 className="tracking-tight font-semibold text-primary">
            Date Range
          </h1>
          <section className="flex gap-4">
            <SelectMenu
              btnAction={
                <Button
                  intent="selectDrop"
                  className="custom-menu-child h-12 "
                  size="withIconFull"
                  preset={
                    <ChevronIcon className="fill-secondary-foreground custom-menu-child-icon " />
                  }
                >
                  {filterValues?.startDate
                    ? filterValues?.startDate
                    : "Start Date"}
                </Button>
              }
            >
              <DayPicker
                className="absolute font-space  bg-white rounded-2xl border p-2 "
                mode="single"
                selected={filterValues.startDate as any}
                onSelect={(val: any) =>
                  setFilterValues({
                    ...filterValues,
                    startDate: format(val, "PP"),
                  })
                }
              />
            </SelectMenu>
            <SelectMenu
              btnAction={
                <Button
                  intent="selectDrop"
                  className="custom-menu-child h-12 "
                  size="withIconFull"
                  preset={
                    <ChevronIcon className="fill-secondary-foreground custom-menu-child-icon " />
                  }
                >
                  {filterValues?.endDate ? filterValues?.endDate : "End Date"}
                </Button>
              }
            >
              <DayPicker
                className="absolute font-space right-0 bg-white rounded-2xl border p-2 "
                mode="single"
                selected={filterValues.startDate as any}
                onSelect={(val: any) =>
                  setFilterValues({
                    ...filterValues,
                    endDate: format(val, "PP"),
                  })
                }
              />
            </SelectMenu>
          </section>
        </section>
        <section className="grid gap-2 ">
          <h1 className="tracking-tight font-semibold text-primary">
            Transaction Type
          </h1>
          <section className="flex gap-4">
            <ListSelectMenu
              btnAction={
                <Button
                  intent="selectDrop"
                  className="custom-menu-child h-12 items-start text-left "
                  size="withIconFull"
                  preset={
                    <ChevronIcon className="fill-secondary-foreground custom-menu-child-icon " />
                  }
                >
                  {filterValues.transactionType.length
                    ? filterValues.transactionType.map((item) => item).join(",")
                    : "Select Type"}
                </Button>
              }
            >
              <div className="relative z-[999] grid p-4 pt-2 bg-white">
                {txTypeData.map((item, idx) => (
                  <div
                    onClick={() =>
                      handleSelectChange({
                        filterKey: "transactionType",
                        selectedIndex: item,
                        selectedValue: item,
                      })
                    }
                    key={idx}
                  >
                    <ListSelectMenuChild
                      item={item}
                      subData={filterValues.transactionType}
                    />
                  </div>
                ))}
              </div>
            </ListSelectMenu>
          </section>
        </section>
        <section className="grid gap-2 ">
          <h1 className="tracking-tight font-semibold text-primary">
            Transaction status
          </h1>
          <section className="flex gap-4">
            <ListSelectMenu
              btnAction={
                <Button
                  intent="selectDrop"
                  className="custom-menu-child h-12 "
                  size="withIconFull"
                  preset={
                    <ChevronIcon className="fill-secondary-foreground custom-menu-child-icon " />
                  }
                >
                  {filterValues.transactionStatus.length
                    ? filterValues.transactionStatus
                        .map((item) => item)
                        .join(",")
                    : "Select Status"}
                </Button>
              }
            >
              <div className="relative z-[999] grid p-4 px-3 pt-2 bg-white">
                {txStatusData.map((item, idx) => (
                  <div
                    onClick={() =>
                      handleSelectChange({
                        filterKey: "transactionStatus",
                        selectedIndex: item,
                        selectedValue: item,
                      })
                    }
                    key={idx}
                  >
                    <ListSelectMenuChild
                      item={item}
                      subData={filterValues.transactionStatus}
                    />
                  </div>
                ))}
              </div>
            </ListSelectMenu>
          </section>
        </section>
      </section>
      <section className="fixed left-0 px-4 grid grid-cols-2 w-full gap-4 bottom-4">
        <Button
          onClick={handleClearFilter}
          shape="round"
          intent="outline"
          className="w-full"
        >
          Clear
        </Button>
        <Button onClick={handleApplyFilter} shape="round" className="w-full">
          Apply
        </Button>
      </section>
    </section>
  );
}
