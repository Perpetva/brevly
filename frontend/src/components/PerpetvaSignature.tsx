import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"], weight: ["100"]
})

export default function PerpetvaSignature() {
    return (
        <footer className={`${roboto.className} text-[14px] flex justify-center text-gray-400 fixed bottom-0 left-0 w-full pb-4 bg-transparent`}>
            @Perpetva
        </footer>
    )
}
