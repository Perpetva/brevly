"use client";
import AboutComponent from "@/components/AboutOrHomeComponent";
import BrevlyComponent from "@/components/BrevlyComponent";
import PerpetvaSignature from "@/components/PerpetvaSignature";
import MyModal from "@/components/ModalPopUp";
import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"], weight: ["100"]
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AboutComponent text="about" path="about" />

      <main className="flex flex-col items-center justify-center mt-40">
        <BrevlyComponent text="The perfect size for your link" letterSpacing="0.25" />

        <div className="flex flex-col items-center mt-15 gap-5">
          <div>
            <input
              type="text"
              placeholder="link, please"
              className={`${roboto.className} text-[16px] border-b border-gray-300 p-2 w-130 outline-none text-center focus:border-gray-500 transition-colors duration-1000 peer-focus:w-full`}
            />
          </div>
          <div>
            <button onClick={() => setIsOpen(true)} className={`${roboto.className} cursor-pointer text-[20px] mt-4 w-50 h-10 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors`}>
              shorten link
            </button>
          </div>
        </div>
      </main>

      <MyModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Shortened link">
        "Seu link curto"
      </MyModal>

      <PerpetvaSignature />
    </>
  )
}
