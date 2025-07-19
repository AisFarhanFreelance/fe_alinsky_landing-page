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
  const isIdle = useIdle(30_000);
  const [hasTriggered, setHasTriggered] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (isIdle && !hasTriggered) {
      setHasTriggered(true);
      setOpen(true);
      // console.log("User has been idle for 30 seconds. Triggering popup.");
    }
  }, [isIdle, hasTriggered]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col items-center justify-center">
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
          <Button className="uppercase">Request A Marketing Audit</Button>
          <DialogClose asChild>
            <Button className="uppercase">Maybe Later</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserIdlePopup;
