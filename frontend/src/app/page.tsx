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

      <main className="flex justify-center min-h-screen mt-60">
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

      </main>
    </>
  )
}
