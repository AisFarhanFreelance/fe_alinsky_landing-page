"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import * as React from "react";

import messageSentAnimation from "../../../public/assets/lottie/message-sent.json";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

interface NotificationProps {
  show: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ show, onClose }) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="relative flex flex-col items-center justify-center space-y-6 overflow-hidden bg-white font-satoshi">
        {/* Background Image */}
        <img
          src="/assets/images/background-ellipse.png"
          alt="Background Ellipse"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        />

        {/* Header Text */}
        <DialogHeader className="text-center">
          <motion.div className="rounded-2xl bg-[#FAFAFA] p-2 text-[24px] font-black text-alinsky-slate-blue italic lg:py-6">
            Help Is On Its Way!
          </motion.div>
        </DialogHeader>

        {/* Lottie Animation */}
        <Lottie
          animationData={messageSentAnimation}
          loop={true}
          className="h-36 w-36"
        />

        {/* OK Button */}
        <Button
          onClick={onClose}
          className="w-[364px] bg-alinsky-midnight-blue py-4 text-alinsky-white uppercase transition-transform duration-200 hover:scale-101 hover:bg-alinsky-midnight-blue hover:text-alinsky-white"
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
