"use client";

import { useIdle } from "@/lib/hooks/use-idle";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import FillDetailPopup from "./fill-in-details-popup";

const UserIdlePopup = () => {
  const [showFillDetailPopup, setShowFillDetailPopup] = useState(false);

  const isIdle = useIdle(5000);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isIdle && !hasTriggered) {
      setHasTriggered(true);
      setOpen(true);
    }
  }, [isIdle, hasTriggered]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="dura flex scale-95 flex-col items-center justify-center opacity-0 transition-all duration-500 ease-out data-[state=open]:scale-100 data-[state=open]:opacity-100">
          <DialogClose className="absolute top-9 right-12 hidden p-1 text-alinsky-midnight-blue opacity-70 hover:opacity-100 focus:outline-none md:block">
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <DialogHeader className="relative mb-4">
            <DialogTitle className="text-2xl font-medium text-alinsky-midnight-blue">
              Free Marketing Audit
            </DialogTitle>
          </DialogHeader>

          <Image
            src="/assets/images/additional/pop-up/search.png"
            alt="Search"
            width={120}
            height={120}
            className="mb-4"
          />
          <div className="flex flex-col items-center font-satoshi text-2xl text-alinsky-midnight-blue">
            <span className="font-medium">Discover</span>
            <h1 className="text-center text-2xl font-bold">
              What’s Holding
              <span className="block sm:inline"> Your Brand Back?</span>
            </h1>
          </div>
          <DialogFooter>
            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <DialogClose asChild>
                <Button className="flex-1 border border-alinsky-midnight-blue py-4 uppercase transition-transform duration-200 hover:scale-101">
                  Maybe Later
                </Button>
              </DialogClose>
              <Button
                className="flex-1 bg-alinsky-midnight-blue py-4 text-alinsky-white uppercase transition-transform duration-200 hover:scale-101 hover:bg-alinsky-midnight-blue hover:text-alinsky-white"
                onClick={() => {
                  setShowFillDetailPopup(true);
                  setOpen(false);
                }}
              >
                Request A Marketing Audit
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FillDetailPopup
        open={showFillDetailPopup}
        onOpenChange={setShowFillDetailPopup}
      />
    </>
  );
};

export default UserIdlePopup;
