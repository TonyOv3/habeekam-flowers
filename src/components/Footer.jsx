import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Check } from 'lucide-react';
import { BRAND } from '../data/products';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">

                {/* TOP SECTION: BRAND IDENTITY - ONE LINE */}
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-serif font-black text-sm tracking-tighter border-2 border-rose-600 shadow-2xl">
                            {BRAND.shortName}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">{BRAND.name} FLOWER</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <a href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 rounded-full font-bold text-[10px] md:text-xs hover:bg-black hover:text-white transition-all duration-300 border border-slate-200 w-full sm:w-auto">
                            <Instagram className="w-4 h-4" /> {BRAND.instagram}
                        </a>
                        <a href={`https://wa.me/${BRAND.phone}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full font-bold text-[10px] md:text-xs hover:bg-green-600 hover:text-white transition-all duration-300 border border-green-100 w-full sm:w-auto">
                            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                        </a>
                    </div>
                </div>

                {/* MIDDLE SECTION: CLEAN COLUMNS - CENTERED */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8 text-center max-w-lg mx-auto w-full">

                    {/* EXPLORE */}
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="font-black text-[10px] md:text-xs uppercase tracking-widest text-slate-900 border-b-2 border-rose-600 pb-1 mb-2">Explore</h4>
                        <ul className="space-y-3 md:space-y-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">
                            <li><a href="#shop" className="hover:text-rose-600 transition-colors">Fresh Bouquets</a></li>
                            <li><a href="#shop" className="hover:text-rose-600 transition-colors">Money Bouquets</a></li>
                            <li><a href="#shop" className="hover:text-rose-600 transition-colors">Wine & Teddy</a></li>
                            <li><a href="#shop" className="hover:text-rose-600 transition-colors">Corporate Gifts</a></li>
                        </ul>
                    </div>

                    {/* ATELIER INFO */}
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="font-black text-[10px] md:text-xs uppercase tracking-widest text-slate-900 border-b-2 border-rose-600 pb-1 mb-2">Atelier</h4>
                        <ul className="space-y-4 md:space-y-3 text-[10px] md:text-xs text-slate-500 font-medium">
                            <li className="flex items-center gap-2 justify-center">
                                <MapPin className="w-4 h-4 text-rose-600 shrink-0" /> <span className="text-left md:text-center">{BRAND.location}</span>
                            </li>
                            <li className="flex items-center gap-2 justify-center">
                                <Phone className="w-4 h-4 text-rose-600 shrink-0" /> {BRAND.phone}
                            </li>
                            <li className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-900 pt-1">
                                <span className="bg-black text-white px-3 py-1.5 md:px-2 md:py-1 rounded">Open 24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM SECTION: COPYRIGHT */}
                <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between md:justify-center items-center text-[9px] text-slate-400 uppercase tracking-widest font-bold gap-4 md:gap-6">
                    <p>© {new Date().getFullYear()} Habeekam Flower.</p>
                    <div className="flex gap-4 md:gap-6">
                        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-600" /> Quality</span>
                        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-rose-600" /> Secure</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
