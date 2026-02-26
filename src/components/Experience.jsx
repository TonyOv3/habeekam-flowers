import React from 'react';
import { Package, Truck, ShieldCheck } from 'lucide-react';

export default function Experience() {
    return (
        <section className="bg-black text-white py-20 md:py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="space-y-10 md:space-y-12">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black italic tracking-tighter text-center lg:text-left">The HF <br className="hidden md:block" /> Experience</h2>
                    <div className="space-y-8 md:space-y-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                                <Package className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Signature HF Bag</h4>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">Every order arrives in our iconic white & red branded bag. A status symbol in itself.</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                                <Truck className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Lagos-Wide Dispatch</h4>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">From Ikeja to Lekki Phase 1. Same-day delivery for orders before 12 PM.</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 transition-colors">
                                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Money Guarantee</h4>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">We handle your money bouquets with extreme security and care.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-600/20 to-transparent rounded-[3rem]"></div>
                    <img
                        src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1000"
                        className="w-full rounded-[3rem] border-4 border-white/10"
                        alt="Habeekam Gift Packaging"
                    />
                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white text-black p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-[200px] md:max-w-xs transform rotate-3">
                        <p className="font-serif font-black text-lg md:text-2xl italic">"Packaging is half the gift."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
