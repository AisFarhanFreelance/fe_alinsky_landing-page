"use client";

import { TextField } from "@mui/material";
import * as React from "react";

interface TextInputProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  error = false,
  helperText = "",
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
      variant="outlined"
      size="medium"
      sx={{
        "& .MuiInputBase-input": {
          fontFamily: "Satoshi, sans-serif",
          color: "#151F68",
        },
        "& .MuiInputLabel-root": {
          fontFamily: "Satoshi, sans-serif",
          color: "#9E9E9E",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#151F68",
        },
        "& .MuiFormHelperText-root": {
          fontFamily: "Satoshi, sans-serif",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          backgroundColor: "#F5F5F5",
          "& fieldset": {
            borderColor: "#E0E0E0",
          },
          "&:hover fieldset": {
            borderColor: "#442FB8",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#151F68",
            borderWidth: "2px",
          },
        },
      }}
    />
  );
};

export default TextInput;
