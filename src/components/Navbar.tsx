import { BarIcon, BellIcon, MainStackIcon, MsgIcon } from "@/shared/icons";
import { navLinks } from "@/shared/staticData";
import { Button } from "@/shared/ui";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex shadow-xShadow container mx-auto items-center rounded-full px-4 my-5 h-[4rem] justify-between">
      <Link href="#">
        <MainStackIcon />
      </Link>
      <section className="flex gap-2">
        {navLinks.map((item, idx) => (
          <Button
            suffet={item.icon}
            shape="round"
            className="hover:fill-primary-foreground"
            size="withIcon"
            intent="linkVariant"
            key={idx}
          >
            {item.text}
          </Button>
        ))}
      </section>

      <section className="flex items-center gap-6">
        <BellIcon />
        <MsgIcon />
        <Button
          intent="secondary"
          className="p-1.5 flex gap-2"
          size="fluid"
          shape="round"
        >
          <span className="bg-primary text-primary-foreground w-7 h-7 flex items-center justify-center rounded-full">
            OJ
          </span>
          <BarIcon className="mr-1" />
        </Button>
      </section>
    </nav>
  );
}
