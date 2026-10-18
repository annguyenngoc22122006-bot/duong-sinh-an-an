import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onSelectBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onSelectBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang Chủ', href: '#home' },
    { label: 'Về An An', href: '#about' },
    { label: 'Dịch Vụ', href: '#services' },
    { label: 'Góc Sức Khỏe', href: '#knowledge' },
    { label: 'Sản Phẩm', href: '#products' },
    { label: 'Đánh Giá', href: '#testimonials' },
    { label: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#3D6A52]/10 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-3 shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D6A52]"
            aria-label="Trang chủ Dưỡng sinh An An"
          >
            <div className="w-10 h-10 rounded-full bg-[#3D6A52] text-[#FAF7F2] flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span>An</span>
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-[#2C3E35] block leading-none">
                Dưỡng sinh An An
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#3D6A52] font-medium tracking-wider uppercase block mt-1">
                Y Học Cổ Truyền · Thuần Tự Nhiên
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#2C3E35]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-[#3D6A52] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#3D6A52] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (CTA, Cart & Mobile Trigger) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#2C3E35] hover:text-[#3D6A52] hover:bg-[#3D6A52]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D6A52]"
              aria-label="Giỏ hàng sản phẩm thảo mộc"
            >
              <i className="fa-solid fa-basket-shopping text-lg" aria-hidden="true"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#3D6A52] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hotline quick call (Tablet/Desktop) */}
            <a
              href="tel:0901234567"
              className="hidden md:inline-flex items-center gap-2 text-xs font-semibold text-[#3D6A52] bg-[#3D6A52]/10 hover:bg-[#3D6A52]/20 px-3.5 py-2 rounded-full transition-colors"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              <span>0901.234.567</span>
            </a>

            {/* Main Primary CTA (Hidden on mobile < sm since mobile has floating bottom CTA) */}
            <button
              onClick={onSelectBooking}
              className="hidden sm:inline-flex bg-[#3D6A52] hover:bg-[#2C4B3A] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 items-center gap-2 whitespace-nowrap"
            >
              <i className="fa-solid fa-calendar-check text-xs"></i>
              <span>Đặt Lịch Ngay</span>
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2C3E35] hover:bg-[#3D6A52]/10 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#3D6A52]/20 shadow-xl px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3 font-medium text-base mb-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg hover:bg-[#3D6A52]/10 hover:text-[#3D6A52] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <i className="fa-solid fa-chevron-right text-xs text-[#3D6A52]/50"></i>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#3D6A52]/15 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onSelectBooking();
              }}
              className="w-full bg-[#3D6A52] text-white py-3 rounded-xl font-semibold text-center shadow-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Đặt Lịch Tư Vấn Hẹn Giờ</span>
            </button>

            <a
              href="tel:0901234567"
              className="w-full bg-white border border-[#3D6A52]/30 text-[#3D6A52] py-2.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-sm"
            >
              <i className="fa-solid fa-phone-volume"></i>
              <span>Hotline 24/7: 0901.234.567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
