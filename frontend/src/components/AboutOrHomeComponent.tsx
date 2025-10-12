import Link from "next/link"
import { Playfair_Display_SC } from "next/font/google"
import { SwitchComponent } from "./SwitchComponent"

const playfair = Playfair_Display_SC({
    subsets: ["latin"], weight: ["400"]
})

export default function AboutOrHomeComponent({ text, path = "/" }: { text: string, path?: string }) {
    return (
        <header className="flex items-center justify-end m-16 gap-6">
            <div>
                <SwitchComponent />
                
            </div>
            <Link href={path} className={`${playfair.className} text-[20px] pb-2 tracking-widest`}>
                {text}
            </Link>
        </header>
    )
}