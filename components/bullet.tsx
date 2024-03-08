import React from "react";
import { FaDiamond } from "react-icons/fa6";

export default function Bullet({ label }: { label: string }) {
  return (
    <div className="text-xs grid grid-cols-[0.5fr_7fr] items-center">
      <FaDiamond className="w-2 h-2 text-primary" /> <p>{label}</p>
    </div>
  );
}
