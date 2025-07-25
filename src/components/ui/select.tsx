"use client";

import * as React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface PlainSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlainSelect: React.FC<PlainSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "-- Pilih Opsi --",
  className = "",
  style,
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`appearance-none rounded-[16px] border border-[#151F68] bg-white px-3 py-2 text-sm text-gray-800 transition-all hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none ${className}`}
      style={style}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-black">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PlainSelect;
