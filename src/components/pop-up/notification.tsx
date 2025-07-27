"use client";

import { XIcon } from "lucide-react";
import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface NotificationProps {
  show: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ show, onClose }) => {
  // Auto-close in 3 seconds
  React.useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="fixed right-6 bottom-6 z-50 w-[320px] scale-95 opacity-0 transition-all duration-300 ease-out data-[state=open]:scale-100 data-[state=open]:opacity-100">
        <DialogHeader className="relative">
          <DialogTitle className="text-base font-semibold text-alinsky-midnight-blue">
            Email Sent
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-600">We’ll reach you soon.</p>
        <DialogClose asChild>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
