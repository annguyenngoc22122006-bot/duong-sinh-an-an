import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { KnowledgeHub } from './components/KnowledgeHub.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BookingSection } from './components/BookingSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CartDrawer, CartItem } from './components/CartDrawer.tsx';
import { SingleHtmlExportModal } from './components/SingleHtmlExportModal.tsx';
import { ProductItem } from './data/landingData.ts';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('goi-dau-thao-duoc');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: ProductItem, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Đã thêm "${product.name.slice(0, 30)}..." vào giỏ hàng`);
  };

  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C3E35] selection:bg-[#3D6A52]/20 selection:text-[#1F3A2B] font-sans antialiased relative">
      {/* 1. Header / Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectBooking={handleBookNow}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          onBookNow={handleBookNow}
          onExploreServices={handleExploreServices}
        />

        {/* 3. About Us / Triết lý Y Học Cổ Truyền */}
        <AboutUs />

        {/* 4. Dịch vụ nổi bật */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Góc Sức Khỏe Đông Y */}
        <KnowledgeHub />

        {/* 6. Sản phẩm dưỡng sinh thảo dược */}
        <ProductsSection onAddToCart={handleAddToCart} />

        {/* 7. Đánh giá khách hàng thực tế */}
        <TestimonialsSection />

        {/* 8. Form Đặt Lịch & Liên Hệ */}
        <BookingSection preselectedServiceId={selectedServiceId} />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onBookNow={handleBookNow}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Single HTML Exporter Modal */}
      <SingleHtmlExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[#2C3E35] text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-200"
        >
          <i className="fa-solid fa-circle-check text-green-400 text-base"></i>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Quick Booking Button for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-30 lg:hidden flex gap-2">
        <a
          href="tel:0901234567"
          className="flex-1 bg-white/95 backdrop-blur-md border border-[#3D6A52]/30 text-[#3D6A52] font-semibold py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <i className="fa-solid fa-phone"></i>
          <span>Gọi Hotline</span>
        </a>
        <button
          type="button"
          onClick={handleBookNow}
          className="flex-[2] bg-[#3D6A52] hover:bg-[#2C4B3A] text-white font-semibold py-3 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <i className="fa-solid fa-calendar-check"></i>
          <span>Đặt Lịch Hẹn Ngay</span>
        </button>
      </div>
    </div>
  );
}
