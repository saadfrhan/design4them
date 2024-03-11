import Image from "next/image";
import React from "react";

export default function PartnerCard({
  label,
  image,
}: {
  label: string;
  image: string;
}) {
  return (
    <div className="flex items-center flex-col justify-center gap-y-4">
      <Image src={image} alt={label} width={70} height={70} />
      <h6 className="max-w-[170px] text-center">{label}</h6>
    </div>
  );
}
