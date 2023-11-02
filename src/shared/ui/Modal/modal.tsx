"use client";
import { Dialog, Transition } from "@headlessui/react";
import { VariantProps, cva } from "class-variance-authority";
import { Fragment } from "react";

const modal = cva("", {
  variants: {
    intent: {
      default: "transform overflow-hidden text-left transition-all",
      sideModal: "transform overflow-hidden ml-auto transition-all",
    },
    size: {
      default: "w-full",
      lg: "lg:max-w-lg",
    },
  },

  defaultVariants: {
    intent: "default",
    size: "default",
  },
});

export default function ModalView({
  handleClose,
  isOpen,
  children,
  ...props
}: {
  handleClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
} & VariantProps<typeof modal>) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 w-full overflow-y-auto">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={modal({ intent: props.intent, size: props.size })}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
