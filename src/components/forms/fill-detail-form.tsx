"use client";

import * as React from "react";

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
}

const FillDetailForm: React.FC<FillDetailFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    brand: "",
    email: "",
    number: "",
    social: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(formData);
    console.log(formData);
  };

  return (
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
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
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
            <TextInput
              label="Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="What's Your Personal Number?"
            />
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
  );
};

export default FillDetailForm;
