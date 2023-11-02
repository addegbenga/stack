import {
  ProductIcon,
  ProductIcon2,
  ProductIcon3,
  ProductIcon4,
} from "@/shared/icons";
import { LinkButton } from "@/shared/ui/Button/button";
import React from "react";

export default function Sidebar() {
  return (
    <aside className="fixed left-10 top-1/3 ">
      <section className="grid items-center bg-white shadow-xShadow py-2 gap-4  rounded-full ">
        <LinkButton intent="link">
          <ProductIcon className="w-[1.8rem]" />
        </LinkButton>
        <LinkButton intent="link">
          <ProductIcon4 className="w-[1.8rem]" />
        </LinkButton>
        <LinkButton intent="link">
          <ProductIcon3 className="w-[1.6rem]" />
        </LinkButton>
        <LinkButton intent="link">
          <ProductIcon2 className="w-[1.6rem]" />
        </LinkButton>
      </section>
    </aside>
  );
}
