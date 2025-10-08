import { SwitchComponent } from "@/components/SwitchComponent"
import { Playfair_Display_SC } from "next/font/google";

const playfair = Playfair_Display_SC({
  subsets: ["latin"], weight: ["400"]
});

export default function Home() {
  return (
    <header className="flex items-center justify-end m-16 gap-6">
      <div>
        <SwitchComponent />
      </div>
      <div className={`${playfair.className} text-[20px] pb-2 tracking-widest`}>
        about
      </div>
    </header>
  )
}
