"use client";

import { useIdle } from "@/lib/hooks/use-idle";
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

const UserIdlePopup = () => {
  const isIdle = useIdle(5000);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isIdle && !hasTriggered) {
      setHasTriggered(true);
      setOpen(true);
      // console.log("User has been idle for 30 seconds. Triggering popup.");
    }
  }, [isIdle, hasTriggered]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="dura flex scale-95 flex-col items-center justify-center space-y-8 opacity-0 transition-all duration-500 ease-out data-[state=open]:scale-100 data-[state=open]:opacity-100">
        <DialogHeader>
          <DialogTitle className="font-satoshi text-2xl font-normal">
            Free Marketing Audit
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center font-satoshi text-4xl text-alinsky-midnight-blue">
          <span className="font-medium">Discover</span>
          <span className="font-bold">
            What&apos;s Holding Your Brand Back !
          </span>
        </div>
        <DialogFooter>
          <div className="flex w-full flex-col space-y-2">
            <Button className="bg-alinsky-midnight-blue py-4 text-alinsky-white uppercase transition-transform duration-200 hover:scale-101 hover:bg-alinsky-midnight-blue hover:text-alinsky-white">
              Request A Marketing Audit
            </Button>
            <DialogClose asChild>
              <Button className="border border-alinsky-midnight-blue py-4 uppercase transition-transform duration-200 hover:scale-101">
                Maybe Later
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserIdlePopup;
