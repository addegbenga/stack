"use client";
import { apiUrl } from "@/service";
import { IUser } from "@/service/types";
import useFetchWithAbort from "@/shared/hooks/fetch";
import { BarIcon, BellIcon, MainStackIcon, MsgIcon } from "@/shared/icons";
import { navLinks } from "@/shared/staticData";
import { Button } from "@/shared/ui";
import { LinkButton } from "@/shared/ui/Button/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data, loading, error } = useFetchWithAbort<IUser>(`${apiUrl}/user`);

  const nameInitials = data?.first_name[0]! + data?.last_name[0]!;
  return (
    <nav className="flex shadow-xShadow container mx-auto items-center rounded-full px-4 my-5 h-[4rem] justify-between">
      <Link href="#">
        <MainStackIcon />
      </Link>
      <section className="flex gap-2">
        {navLinks.map((item, idx) => (
          <LinkButton
            suffet={item.icon}
            shape="round"
            className="hover:fill-primary-foreground"
            size="withIcon"
            intent="linkVariant"
            key={idx}
          >
            {item.text}
          </LinkButton>
        ))}
      </section>

      <section className="flex items-center gap-6">
        <BellIcon />
        <MsgIcon />
        <LinkButton
          intent="secondary"
          className="p-1.5 flex gap-2"
          size="fluid"
          shape="round"
        >
          <span className="bg-primary text-primary-foreground w-7 h-7 flex items-center justify-center rounded-full">
            {data ? nameInitials : ""}
          </span>
          <BarIcon className="mr-1" />
        </LinkButton>
      </section>
    </nav>
  );
}
