import React from 'react';
import { Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/products';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
                <div className="lg:col-span-5 z-10 space-y-8 md:space-y-10 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
                        <Sparkles className="w-4 h-4 text-rose-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-600">The #1 Gift Shop in Lagos</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-[6rem] font-serif font-black text-slate-900 leading-[0.9] tracking-tighter">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">Art</span> <br /> of Giving.
                    </h1>

                    <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed border-l-4 border-black pl-6">
                        From signature money bouquets to giant teddy surprises. We specialize in making every moment unforgettable.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 pt-4">
                        <a href="#shop" className="group flex items-center justify-center gap-4 text-sm font-black uppercase tracking-widest text-white bg-black px-10 py-5 rounded-full shadow-2xl hover:bg-rose-600 transition-all whitespace-nowrap">
                            Send A Gift
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={`https://wa.me/${BRAND.phone}`} className="flex items-center justify-center gap-2 text-sm font-bold text-slate-900 px-8 py-5 rounded-full border-2 border-slate-100 hover:border-black transition-all whitespace-nowrap">
                            <MessageCircle className="w-4 h-4" />
                            Custom Request
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-7 relative w-full animate-fade-in mt-10 lg:mt-0">
                    <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white group md:rotate-2 hover:rotate-0 transition-all duration-700">
                        {/* FIXED HERO IMAGE: LUSH RED ROSES BOUQUET */}
                        <img
                            src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=1600"
                            className="w-full h-[400px] md:h-[600px] object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
                            alt="Luxury Lagos Bouquet"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1548610762-65602507e15c?auto=format&fit=crop&q=80&w=1600";
                            }}
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10 pt-32">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-rose-400 text-xs font-black uppercase tracking-widest mb-1">Top Seller</p>
                                    <h3 className="text-white font-serif text-2xl md:text-3xl italic">The "Unforgettable" Combo</h3>
                                </div>
                                <div className="bg-white text-black w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-xl shadow-lg shrink-0 ml-4">
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 -rotate-45" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DECORATIVE ELEMENTS */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-600 rounded-full blur-[80px] opacity-30"></div>
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-black rounded-full blur-[80px] opacity-10 hidden md:block"></div>
                </div>
            </div>
        </section>
    );
}
