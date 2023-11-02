"use client";
import { CheckIcon, ChevronIcon } from "@/shared/icons";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

export function SelectMenu({
  children,
  btnAction,
}: {
  children: ReactNode;
  btnAction: ReactNode;
}) {
  return (
    <Menu as="div" className="relative w-full text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`${open ? "custom-menu-parent" : ""}`}
            as="div"
          >
            {btnAction}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-[999] right-0  w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export function ListSelectMenu({
  children,
  btnAction,
}: {
  children: ReactNode;
  btnAction: ReactNode;
}) {
  const [selected, setSelected] = useState([people[0], people[1]]);

  return (
    <div className="relative w-full text-left">
      <Listbox multiple value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className="relative ">
            <Listbox.Button
              className={`${open ? "custom-menu-parent" : ""}`}
              as="div"
            >
              {btnAction}
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute transition-all mt-2.5 max-h-[24rem] w-full overflow-auto rounded-[12px] bg-white  text-base shadow-xShadow ">
                {children}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

export function ListSelectMenuChild({
  subData,
  item,
}: {
  subData: any;
  item: string;
}) {
  return (
    <div className="flex tracking-tight items-center py-3.5 hover:bg-gray-50  px-4 rounded-lg  cursor-pointer transition-all  font-medium text-primary gap-4">
      <div
        className={`${
          subData.includes(item)
            ? "bg-primary ring-[2px] ring-primary"
            : "ring-[2px] ring-[#DBDEE5] "
        } w-4 h-4 cursor-pointer rounded-[2px]`}
      >
        {subData.includes(item) && (
          <CheckIcon className="text-primary-foreground" />
        )}
      </div>

      {item}
    </div>
  );
}
