import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X, MessageCircle } from 'lucide-react';

export default function Cart({ cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal, handleCheckout }) {
    return (
        <div className={`fixed inset-0 z-[210] transition-all duration-700 ${isCartOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
            <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 bg-slate-50 rounded-full hover:bg-black hover:text-white transition-colors"><X className="w-5 h-5" /></button>
                </div>

                <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8">
                    {cart.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-50">
                            <ShoppingCart className="w-16 h-16 text-slate-300" />
                            <p className="font-bold text-slate-400">Your bag is empty.</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 md:gap-6 items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-xs md:text-sm leading-tight mb-1">{item.name}</h4>
                                    <p className="text-rose-600 font-black text-xs md:text-sm">₦{item.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-3">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="w-5 h-5 md:w-6 md:h-6 rounded bg-slate-100 flex items-center justify-center hover:bg-slate-200"><Minus className="w-3 h-3" /></button>
                                        <span className="text-[10px] md:text-xs font-bold">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="w-5 h-5 md:w-6 md:h-6 rounded bg-slate-100 flex items-center justify-center hover:bg-slate-200"><Plus className="w-3 h-3" /></button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-rose-600 p-2"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 pb-safe">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-black text-slate-400 text-xs uppercase tracking-widest">Total</span>
                        <span className="text-2xl md:text-3xl font-black text-slate-900">₦{subtotal.toLocaleString()}</span>
                    </div>
                    <button
                        disabled={cart.length === 0}
                        onClick={handleCheckout}
                        className="w-full bg-[#25D366] text-white py-4 md:py-5 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 shadow-xl hover:bg-[#128C7E] transition-all disabled:opacity-50"
                    >
                        <MessageCircle fill="white" className="w-4 h-4 md:w-5 md:h-5" />
                        Checkout on WhatsApp
                    </button>
                    <p className="text-center text-[9px] md:text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
                        Bank Transfer Accepted
                    </p>
                </div>
            </div>
        </div>
    );
}
