"use client";

import * as React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Notification from "../pop-up/notification";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import TextInput from "../ui/textinput";

interface FillDetailFormProps {
  onSubmit: (data: {
    brand: string;
    email: string;
    number: string;
    social: string;
  }) => void;
  onSuccess?: () => void;
}

const FillDetailForm: React.FC<FillDetailFormProps> = ({
  onSubmit,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    brand: "",
    email: "",
    number: "",
    social: "",
  });

  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      number: phone,
    };

    onSubmit(submissionData);
    setShowSuccess(true);

    if (typeof onSuccess === "function") {
      setTimeout(() => {
        onSuccess();
      }, 300); // delay close supaya animasi sempat jalan
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-8">
          <div className="mb-8">
            <TextInput
              label="Brand Name"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Your brand"
            />
          </div>
          <div className="mb-8 flex flex-col gap-8 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <TextInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email for report"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex flex-col gap-2">
                <PhoneInput
                  id="phone"
                  defaultCountry="ID"
                  value={phone}
                  placeholder="Your Phone Number"
                  onChange={(value) => {
                    setPhone(value || "");
                    setFormData((prev) => ({ ...prev, number: value || "" }));
                  }}
                  className="h-[56px] w-full rounded-[16px] border border-[#E0E0E0] bg-[#F5F5F5] px-3 font-[Satoshi] text-sm transition-colors focus-within:border-2 focus-within:border-[#151F68] hover:border-[#442FB8]"
                  inputClassName="flex-1 bg-transparent text-sm text-[#151F68] font-[Satoshi] outline-none border-none"
                  countrySelectProps={{
                    className:
                      "bg-transparent text-sm font-[Satoshi] text-[#151F68] border-none outline-none",
                  }}
                />
              </div>
            </div>
          </div>
          <TextInput
            label="Social/URL"
            name="social"
            value={formData.social}
            onChange={handleChange}
            placeholder="Your personal social/URL"
            fullWidth
          />
        </div>
        <DialogFooter className="w-full px-0">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <DialogClose asChild>
              <Button
                type="button"
                className="flex-1 border border-alinsky-midnight-blue py-4 uppercase transition-transform duration-200 hover:scale-101"
              >
                Maybe Later
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="flex-1 bg-alinsky-midnight-blue py-4 text-alinsky-white uppercase transition-transform duration-200 hover:scale-101 hover:bg-alinsky-midnight-blue hover:text-alinsky-white"
            >
              Submit
            </Button>
          </div>
        </DialogFooter>
      </form>

      <Notification show={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
};

export default FillDetailForm;
