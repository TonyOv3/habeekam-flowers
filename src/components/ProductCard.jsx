import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, idx, onAddToCart }) {
    return (
        <div className="group flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-100 mb-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        e.target.onerror = null;
                        // Fallback to a safe pink rose image
                        e.target.src = "https://images.unsplash.com/photo-1548610762-65602507e15c?q=80&w=800";
                    }}
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {product.tag}
                    </span>
                </div>
                {/* QUICK ADD BUTTON */}
                <button
                    onClick={() => onAddToCart(product)}
                    className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl md:translate-y-24 md:group-hover:translate-y-0 transition-transform duration-300 hover:bg-rose-600 hover:text-white"
                >
                    <Plus className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
            <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-rose-600 transition-colors">{product.name}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">{product.category}</p>
                    <p className="text-black font-black text-lg md:text-xl">₦{product.price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}
