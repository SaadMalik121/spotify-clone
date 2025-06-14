"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-emerald-800 p-6",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between ">
        <div className="hidden md:flex gap-x-2 items-center justify-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} color="white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
          >
            <RxCaretRight size={35} color="white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome size={25} color="black" />
          </button>
        </div>

        <div className="flex flex-row justify-end items-center gap-x-4">
          <>
            <div className="flex flex-row items-center gap-x-4">
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Signup
              </Button>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Header;
