import { section } from "framer-motion/client";

export default function Location() {
    return (
<section className="flex items-center justify-center w-full px-4 py-10">
    <div className="grid grid-cols-12 w-full max-w-4xl"> 
        <div className="col-span-12 flex items-center flex-col bg-white/80 backdrop-blur-sm border border-stone-200 rounded-3xl p-8 w-full shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer">
            
            <div className="mt-1">
                <img src="/images/location.png" className="w-12 h-12 object-contain" alt="Location" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-stone-800 tracking-wide uppercase">
                Get Direction
            </h3>
            
            <p className="mt-2 text-stone-600 italic font-light">
                Parakkandi, Kuttikkattoor
            </p>

            <a 
              href="https://www.google.com/maps?q=11.272247314453125,75.86853790283203&z=17&hl=en" 
              target="_blank" 
              className="mt-8 px-10 py-3 bg-stone-800 text-white rounded-full text-xs tracking-widest uppercase hover:bg-stone-700 transition-all"
            >
              Open in Maps
            </a>
        </div>
    </div>
    </section>
    )
}