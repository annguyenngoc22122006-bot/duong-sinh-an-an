import React from 'react';
import { BRANCHES } from '../data/landingData.ts';

interface FooterProps {
  onOpenExportModal: () => void;
  onBookNow: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenExportModal, onBookNow }) => {
  return (
    <footer className="bg-[#2C3E35] text-white/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        {/* Col 1: Brand & Slogan */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#2C3E35] flex items-center justify-center font-serif text-xl font-bold">
              An
            </span>
            <div>
              <h3 className="font-serif font-bold text-xl text-white tracking-wide leading-none">
                Dưỡng sinh An An
              </h3>
              <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block mt-1">
                Y Học Cổ Truyền · Thuần Tự Nhiên
              </span>
            </div>
          </div>

          <p className="font-serif italic text-sm text-white/75 leading-relaxed">
            "Chăm sóc thân - tâm - trí từ gốc, thuần tự nhiên theo y học cổ truyền."
          </p>

          <p className="text-xs text-white/60 leading-relaxed">
            Nơi kết tinh bài thuốc đông phương dân gian và kỹ thuật ấn huyệt chuẩn chỉ, đem lại sự nhẹ nhõm dài lâu cho cơ thể và tinh thần bạn.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Fanpage"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3D6A52] text-white flex items-center justify-center text-sm transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo Official Account"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3D6A52] text-white flex items-center justify-center text-sm transition-colors"
            >
              <i className="fa-solid fa-comment-dots"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3D6A52] text-white flex items-center justify-center text-sm transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3D6A52] text-white flex items-center justify-center text-sm transition-colors"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-2">
            Điều Hướng
          </h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-white transition-colors">Trang chủ</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Dịch vụ nổi bật</a></li>
            <li><a href="#knowledge" className="hover:text-white transition-colors">Góc sức khỏe Đông y</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Sản phẩm thảo dược</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Đánh giá khách hàng</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Đặt lịch hẹn</a></li>
          </ul>
        </div>

        {/* Col 3: Branches info */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-2">
            Hệ Thống Cơ Sở
          </h4>
          <div className="space-y-3 text-xs">
            {BRANCHES.map(b => (
              <div key={b.id} className="border-b border-white/5 pb-2">
                <strong className="text-white block font-medium">{b.name}</strong>
                <span className="text-white/60 block text-[11px] mt-0.5">{b.address}</span>
                <span className="text-[#C5A880] block text-[11px] mt-0.5">Hotline: {b.phone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 4: Customer Policies & Code Export */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-2">
            Chính Sách & Hỗ Trợ
          </h4>
          <ul className="space-y-2 text-xs text-white/75">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-shield-check text-[#C5A880] text-xs"></i>
              <span>Cam kết thảo mộc 100% tự nhiên</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-hand-holding-heart text-[#C5A880] text-xs"></i>
              <span>Bảo mật thông tin khách hàng tuyệt đối</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-rotate-left text-[#C5A880] text-xs"></i>
              <span>Đổi trả sản phẩm thảo dược trong 7 ngày</span>
            </li>
          </ul>

          <div className="pt-2">
            <button
              onClick={onOpenExportModal}
              className="w-full bg-white/10 hover:bg-[#3D6A52] text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border border-white/15 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-code text-xs"></i>
              <span>Xuất File HTML Đơn Hoàn Chỉnh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>
          © {new Date().getFullYear()} Dưỡng sinh An An. Tất cả quyền được bảo lưu.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-white transition-colors cursor-pointer">Chính sách bảo mật</span>
          <span>·</span>
          <span className="hover:text-white transition-colors cursor-pointer">Điều khoản dịch vụ</span>
          <span>·</span>
          <span className="hover:text-white transition-colors cursor-pointer">Quy chế hoạt động</span>
        </div>
      </div>
    </footer>
  );
};
