import AboutOrHomeComponent from "@/components/AboutOrHomeComponent"
import BrevlyComponent from "@/components/BrevlyComponent"
import PerpetvaSignature from "@/components/PerpetvaSignature"

export default function AboutPage() {
    return (
        <>
            <AboutOrHomeComponent text="home" />

            <main className="flex flex-col items-center justify-center mt-60">
                    <BrevlyComponent text="is a link shortener, nothing more." letterSpacing="0.18" />
            </main>
            
            <PerpetvaSignature />
        </>
    )
}