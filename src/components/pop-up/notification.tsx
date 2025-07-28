"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import * as React from "react";

import backgroundEllipse from "../../../public/assets/images/additional/background-ellipse.svg";
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
      <DialogContent className="flex flex-col items-center justify-center space-y-6 font-satoshi">
        <Image
          src={backgroundEllipse}
          alt="Background Ellipse"
          width={400}
          height={400}
          className="absolute -z-10 object-contain"
        />

        <DialogHeader className="relative">
          <motion.div className="rounded-2xl bg-[#FAFAFA] p-2 text-2xl font-black text-alinsky-slate-blue italic lg:py-6 lg:text-3xl">
            <span
              className="bg-gradient-to-r from-[rgba(32,22,88,0.5)] via-white to-[rgba(29,20,78,0.5)] bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(90deg, #3A377F 0%, #7B77A9 30.29%, #CEC8EC 55.36%, #3A377F 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Help Is On Its Way!
            </span>
          </motion.div>
        </DialogHeader>
        <Lottie
          animationData={messageSentAnimation}
          loop={true}
          className="h-36 w-36"
        />
        <p className="z-10 text-center text-lg text-muted-foreground lg:text-xl">
          Check your email within 24 hours.
        </p>

        <Button
          type="button"
          onClick={onClose}
          className="w-full max-w-[364px] flex-1 bg-alinsky-midnight-blue py-4 text-alinsky-white uppercase transition-transform duration-200 hover:scale-101 hover:bg-alinsky-midnight-blue hover:text-alinsky-white"
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Notification;
