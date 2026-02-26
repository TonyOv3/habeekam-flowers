import React, { useState, useMemo, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Cart from './components/Cart';
import UpsellModal from './components/UpsellModal';

import { PRODUCTS, BRAND } from './data/products';
import { saveOrderToFirebase } from './firebase';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [upsellItem, setUpsellItem] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = useMemo(() => ["All", ...new Set(PRODUCTS.map(p => p.category))], []);

  const filteredProducts = useMemo(() => {
    return activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    if (product.category === "Fresh Flowers" || product.category === "Money Bouquets") {
      const hasAddon = cart.some(i => i.category === "Wine Gifts" || i.category === "Teddy Bears");
      if (!hasAddon) setTimeout(() => setUpsellItem(product), 400);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const subtotal = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setIsProcessingCheckout(true);

    try {
      // 1. Prepare Order Data structure
      const orderData = {
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          category: item.category
        })),
        totalAmount: subtotal,
        orderDate: new Date().toISOString(),
        status: 'pending' // pending until WhatsApp confirmation
      };

      // 2. Save to Firebase 
      const firebaseOrderId = await saveOrderToFirebase(orderData);

      // 3. Prepare texts for WhatsApp
      let uniqueOrderRef = '';
      if (firebaseOrderId) {
        uniqueOrderRef = `%0A*Order Ref:* HF-${firebaseOrderId.substring(0, 6).toUpperCase()}`;
      }

      const itemsText = cart.map(i => `• ${i.name} (x${i.quantity}) - ₦${(i.price * i.quantity).toLocaleString()}`).join('%0A');
      const message = `*NEW ORDER - ${BRAND.name}*${uniqueOrderRef}%0A%0A*Items:*%0A${itemsText}%0A%0A*TOTAL: ₦${subtotal.toLocaleString()}*%0A%0AHello! I'd like to confirm this order. Please send account details for payment.`;

      // 4. Redirect to WhatsApp
      window.open(`https://wa.me/${BRAND.phone}?text=${message}`, '_blank');

      // Optional: Clear cart after redirect
      // setCart([]);
      // setIsCartOpen(false);

    } catch (error) {
      console.error("Checkout failed:", error);
      alert("There was an issue processing your checkout. Please try again.");
    } finally {
      setIsProcessingCheckout(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-600 selection:text-white overflow-x-hidden">
      <Nav cartLength={cart.length} setIsCartOpen={setIsCartOpen} />

      <Hero />

      {/* CATEGORIES / SHOP */}
      <section id="shop" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight md:leading-none tracking-tighter mb-3 md:mb-4">
              Gifts That <br className="hidden md:block" /> Speak Volumes
            </h2>
            <div className="h-1 md:h-2 w-16 md:w-20 bg-rose-600"></div>
          </div>

          {/* Scrollable Categories on Mobile */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 gap-3 md:flex-wrap hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 border-2 whitespace-nowrap ${activeCategory === cat
                    ? "bg-black text-white border-black shadow-xl"
                    : "bg-transparent border-slate-100 text-slate-400 hover:border-black hover:text-black"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-16">
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              idx={idx}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <Experience />

      <Footer />

      <UpsellModal
        upsellItem={upsellItem}
        setUpsellItem={setUpsellItem}
        setIsCartOpen={setIsCartOpen}
      />

      <Cart
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        subtotal={subtotal}
        handleCheckout={handleCheckout}
        isProcessingCheckout={isProcessingCheckout}
      />

      {/* Global Styles specific to animations */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translate(-50%, -40px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-zoom-in { animation: zoom-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
}
