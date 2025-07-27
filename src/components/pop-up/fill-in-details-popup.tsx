"use client";

import { XIcon } from "lucide-react";
import * as React from "react";

import FillDetailForm from "@/components/forms/fill-detail-form";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type FillDetailPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const FillDetailPopup: React.FC<FillDetailPopupProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center justify-center space-y-6 ">
        <DialogClose className="absolute top-9 right-12 hidden p-1 text-alinsky-midnight-blue opacity-70 hover:opacity-100 focus:outline-none md:block">
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="relative mb-4">
          <DialogTitle className="text-2xl font-medium text-alinsky-midnight-blue">
            Please Fill In Your Details Below
          </DialogTitle>
        </DialogHeader>
        <FillDetailForm
          onSubmit={(data) => {
            console.log(data);
          }}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default FillDetailPopup;
