"use client";
import { useId } from "react";
import { setBodyBackground, setTitleColor, setSubTitleColor, setButtonAndTextColor, setHomeOrAboutColors } from "@/utils/toggleElementsColors";

export function SwitchComponent() {
  const id = useId();

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setBodyBackground(checked);
    setTitleColor(checked);
    setSubTitleColor(checked);
    setButtonAndTextColor(checked);
    setHomeOrAboutColors(checked);
  };

  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block">
        <input
          id={`switch-${id}`}
          type="checkbox"
          onChange={onToggle}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor={`switch-${id}`}
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        />
      </div>
    </div>
  );
}
