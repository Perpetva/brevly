import Image from "next/image"
import { Playfair_Display_SC, Roboto } from "next/font/google";

const playfair = Playfair_Display_SC({
    subsets: ["latin"], weight: ["400"]
})

const roboto = Roboto({
    subsets: ["latin"], weight: ["100"]
})

export default function BrevlyComponent({ text, letterSpacing }: { text: string, letterSpacing: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <Image
                src="/images/light-logo.png"
                alt="lightlogo"
                width={106}
                height={51}
                className=""
            />
            <div id="brevly-title" className={`text-[40px] ${playfair.className} tracking-wide`}>
                BREVLY
            </div>
            <div id="brevly-subtitle" className={`text-[20px] ${roboto.className}`} style={{ letterSpacing: `${letterSpacing}em` }}>
                {text}
            </div>
        </div>
    )
}