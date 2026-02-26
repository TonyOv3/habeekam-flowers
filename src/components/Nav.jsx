import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Nav({ cartLength, setIsCartOpen }) {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl animate-fade-in-down">
            <div className="bg-white/95 backdrop-blur-md border border-slate-100 px-8 py-4 rounded-full shadow-2xl flex justify-between items-center">
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    {/* HF MONOGRAM SIMULATION */}
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-serif font-black text-xl tracking-tighter border-4 border-rose-600">
                        HF
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-xl font-black tracking-tight text-slate-900 uppercase">HABEEKAM</span>
                        <span className="text-[9px] tracking-[0.3em] uppercase text-rose-600 font-bold">Lagos • Nigeria</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                    {['Shop', 'Combos', 'Money Bouquets', 'Contact'].map(item => (
                        <a key={item} href="#shop" className="hover:text-rose-600 transition-all duration-300 relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsCartOpen(true)} className="relative p-2 group bg-slate-50 rounded-full hover:bg-black hover:text-white transition-colors">
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        {cartLength > 0 && (
                            <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center shadow-lg border-2 border-white">
                                {cartLength}
                            </span>
                        )}
                    </button>
                    <a href="#shop" className="bg-black text-white text-[11px] font-black uppercase tracking-widest px-8 py-3 rounded-full hover:bg-rose-600 transition-all duration-500 shadow-xl hidden sm:block">
                        Shop Now
                    </a>
                </div>
            </div>
        </nav>
    );
}
