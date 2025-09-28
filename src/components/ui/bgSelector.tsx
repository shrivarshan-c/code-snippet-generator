"use client";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
} from "@/components/ui/select";
import { useBg } from "@/hooks/useBg";
import { gradientArray } from "@/constants/gradients";

export const BgSelector = () => {
  const { bg, setBg } = useBg();

  return (
    <Select value={bg} onValueChange={(val) => setBg(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Gradient" />
      </SelectTrigger>

      <SelectContent className="dropdown-up overflow-y-auto max-h-60" position="popper">
        <SelectGroup>
          {gradientArray.map((item) => (
            <SelectItem key={item.name} value={item.gradient} className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ background: item.gradient || "Silver Lining" }}
              />
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
