"use client";

import { useIdle } from "@/lib/hooks/use-idle";
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
          <DialogHeader>
            <DialogTitle className="font-satoshi text-2xl font-normal text-alinsky-midnight-blue">
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
          <div className="flex flex-col items-center font-satoshi text-lg text-alinsky-midnight-blue lg:text-4xl">
            <span className="font-medium">Discover</span>
            <span className="text-center font-bold">
              What&apos;s Holding Your Brand Back !
            </span>
          </div>
          <DialogFooter>
            <div className="flex w-full flex-row space-x-2">
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
