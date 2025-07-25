"use client";

import * as React from "react";

import FillDetailForm from "@/components/forms/fill-detail-form";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

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
      <DialogContent className="flex flex-col space-y-6">
        <DialogHeader>
          <DialogTitle className="text-center font-satoshi text-[32px] font-medium text-alinsky-midnight-blue">
            Please Fill In Your Details Below
          </DialogTitle>
        </DialogHeader>
        <FillDetailForm onSubmit={(data) => console.log(data)} />
      </DialogContent>
    </Dialog>
  );
};

export default FillDetailPopup;
