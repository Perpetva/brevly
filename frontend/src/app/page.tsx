import { SwitchComponent } from "@/components/SwitchComponent"
import { Playfair_Display_SC, Roboto } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display_SC({
  subsets: ["latin"], weight: ["400"]
})

const roboto = Roboto({
  subsets: ["latin"], weight: ["100"]
})

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-end m-16 gap-6">
        <div>
          <SwitchComponent />
        </div>
        <div className={`${playfair.className} text-[20px] pb-2 tracking-widest`}>
          about
        </div>
      </header>

      <main className="flex flex-col items-center justify-center mt-60">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/light-logo.png"
            alt="lightlogo"
            width={106}
            height={51}
            className=""
          />
          <div className={`text-[40px] ${playfair.className} tracking-wide`}>
            BREVLY
          </div>
          <div className={`text-[20px] ${roboto.className} tracking-[0.25em]`}>
            The perfect size for your link
          </div>
        </div>
        <div className="flex flex-col items-center mt-15 gap-5">
          <div>
            <input
              type="text"
              placeholder="link, please"
              className={`${roboto.className} text-[16px] border-b border-gray-300 p-2 w-130 outline-none text-center focus:border-gray-500 transition-colors duration-1000 peer-focus:w-full`}
            />
          </div>
          <div>
            <button className={`${roboto.className} text-[20px] mt-4 w-50 h-10 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors`}>
              shorten link
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
