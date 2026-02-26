import React from 'react';
import { X, Gift } from 'lucide-react';

export default function UpsellModal({ upsellItem, setUpsellItem, setIsCartOpen }) {
    if (!upsellItem) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setUpsellItem(null)}></div>
            <div className="relative bg-white w-full max-w-sm md:max-w-md rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 text-center shadow-2xl animate-zoom-in">
                <button onClick={() => setUpsellItem(null)} className="absolute top-6 right-6 md:top-8 md:right-8 text-slate-400 hover:text-black"><X className="w-5 h-5 md:w-6 md:h-6" /></button>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 text-rose-600">
                    <Gift className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4 leading-tight">Don't Forget <br /> The Extras!</h3>
                <p className="text-slate-500 mb-8 md:mb-10 text-xs md:text-sm leading-relaxed">
                    Customers who bought <span className="font-bold text-black">{upsellItem.name}</span> highly recommend adding the <span className="font-bold text-rose-600">Veuve Clicquot & Roses</span> pairing.
                </p>
                <div className="flex flex-col gap-3 md:gap-4">
                    <button
                        onClick={() => { setUpsellItem(null); setIsCartOpen(true); }}
                        className="w-full bg-black text-white py-4 md:py-5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors"
                    >
                        View Luxury Pairings
                    </button>
                    <button onClick={() => setUpsellItem(null)} className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-black">
                        No, thanks
                    </button>
                </div>
            </div>
        </div>
    );
}
