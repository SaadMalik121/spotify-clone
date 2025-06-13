"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();

  const onClick = () => {
    //Add authentication before push
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center gap-x-4 overflow-hidden pr-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition cursor-pointer"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt="Image" fill className="object-cover" />
      </div>
      <p className="truncate font-medium py-5">{name}</p>
      <div className="absolute right-5 transition opacity-0 rounded-full items-center justify-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110">
        <FaPlay color="black" />
      </div>
    </button>
  );
}

export default ListItem;
