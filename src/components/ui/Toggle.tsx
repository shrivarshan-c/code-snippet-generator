"use client";
import { useState } from "react";
import { useEffect } from "react";
import "@/customcss/toggle.css";
export const Toggle = ({
  onToggle,
  checked,
  id,
}: {
  onToggle?: (val: boolean) => void;
  checked?: boolean;
  id?: string;
}) => {
  const [isToggled, setIsToggled] = useState(checked ?? false);

  const handleChange = () => {
    const newVal = !isToggled;
    setIsToggled(newVal);
    onToggle?.(newVal);
  };

  useEffect(() => {
    if (checked !== undefined) {
      setIsToggled(checked);
    }
  }, [checked]);

  const inputId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label className="switch-button" htmlFor={inputId}>
      <div className="switch-outer">
        <input
          id={inputId}
          type="checkbox"
          checked={isToggled}
          onChange={handleChange}
        />
        <div className="button">
          <span className="button-toggle"></span>
          <span className="button-indicator"></span>
        </div>
      </div>
    </label>
  );
};
