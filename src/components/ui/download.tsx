"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import * as htmlToImage from "html-to-image";

export const CopyandDownload = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement|null>;
}) => {
  const [action, setAction] = useState("");

  const handleCopyImage = async () => {
    if (!targetRef.current) return;
    const dataUrl = await htmlToImage.toPng(targetRef.current);
    const blob = await (await fetch(dataUrl)).blob();
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    alert("✅ Image copied to clipboard");
  };

  const handleDownloadImage = async () => {
    if (!targetRef.current) return;
    const dataUrl = await htmlToImage.toPng(targetRef.current);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "code-snippet.png";
    link.click();
  };

  return (
    <Select
      value={action}
      onValueChange={(value) => {
        setAction(""); 
        if (value === "copy") handleCopyImage();
        if (value === "download") handleDownloadImage();
      }}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Actions" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="copy">Copy Image</SelectItem>
          <SelectItem value="download">Download Image</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
