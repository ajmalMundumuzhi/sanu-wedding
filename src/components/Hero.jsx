import CountdownTimer from "./useCountdown";

export default function Hero() {
    return (
        /* Added 'flex-col' to stack elements vertically and 'min-h-screen' to fill the page */
        <section className="flex flex-col items-center justify-start min-h-screen ">
            
            {/* Top Section: Ornament and Title */}
            <div className=" flex flex-col items-center">
                <div>
                    <img src="/images/pngegg (7).png" className="h-56 md:h-80" alt="Ornament" />
                </div>
                <h1 className="text-center text-5xl md:text-7xl font-serif ">
                    Wedding Reception
                </h1>
            </div>

            {/* Middle Section: Invitation Text (The grid you started) */}
            <div className="grid grid-cols-1 text-center mt-4 max-w-lg px-4">
                <p className="text-lg italic text-stone-700">
                    With immense pleasure, we invite you to the wedding reception of our beloved children.
                </p>
            </div>

            <div className="mt-12">
                <CountdownTimer />
            </div>
            
        </section>
    );
}