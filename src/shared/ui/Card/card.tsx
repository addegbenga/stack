import { ITransactionReturnType } from "@/service/types";
import { formatDate } from "@/shared/functions";
import { InfoIcon, SlantArrowIcon, XIcon } from "@/shared/icons";
import { Ribbon } from "../Ribbon";
import { TxStatusEnum } from "@/service/constants";

export function ListCard({ item }: { item: ITransactionReturnType }) {
  return (
    <section className="flex justify-between items-center ">
      <div className="flex items-center gap-3">
        <Ribbon
          varaint={
            item.status === "pending"
              ? TxStatusEnum.pending
              : item.status === TxStatusEnum.success
              ? "success"
              : ""
          }
          icon={<SlantArrowIcon className="fill-inherit rotate-180 " />}
        />
        <div className="flex text-primary flex-col gap-1">
          <h1 className="font-medium capitalize  tracking-tight">
            {item.metadata
              ? item.metadata?.product_name || "No Title"
              : item.type}
          </h1>
          <p className="text-sm font-space tracking-tight">
            {item.metadata ? item.metadata?.type : item.type}
          </p>
        </div>
      </div>
      <div className="font-space">
        <h1 className="tracking-tight font-medium">USD {item.amount}</h1>
        <p className="text-sm tracking-tight">{formatDate(item.date)}</p>
      </div>
    </section>
  );
}
export function ErrorCard({
  text,
  subText,
  handleClose,
}: {
  text: string;
  subText: string;
  handleClose: () => void;
}) {
  return (
    <div className="p-4 my-2 relative bg-[#FFF5FA] border border-[#D5DBE1] rounded-xl">
      <div className="flex gap-2 ">
        <InfoIcon className="w-4 text-[#B3093C]" />
        <article>
          <h2 className="fill-[#B3093C] leading-6 text-sm"> {subText} </h2>
          <p className="text-sm  text-neutral-700">{text}</p>
          <button
            className="absolute flex items-center w-5 h-5 transition-all rounded-sm ring-prs-300 hover:bg-gray-100 hover:ring-1 right-2 top-2 text-neutral-700"
            onClick={handleClose}
          >
            <XIcon className="w-5" />
          </button>
        </article>
      </div>
    </div>
  );
}
