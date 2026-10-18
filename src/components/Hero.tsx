import React from 'react';

interface HeroProps {
  onBookNow: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#3D6A52]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8C6D53]/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Context kicker: clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold text-[#3D6A52] tracking-wide">
              <span>Đông Y Trị Liệu</span>
              <span aria-hidden="true" className="text-[#3D6A52]/40">·</span>
              <span>100% Thảo Mộc Bản Địa</span>
              <span aria-hidden="true" className="text-[#3D6A52]/40">·</span>
              <span>Đả Thông Kinh Lạc</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E35] leading-[1.15] tracking-tight [text-wrap:balance]">
              Chăm sóc thân - tâm - trí từ gốc, thuần tự nhiên theo y học cổ truyền.
            </h1>

            <p className="text-base sm:text-lg text-[#2C3E35]/80 font-normal leading-relaxed max-w-2xl">
              Tạm gác lại những căng thẳng, mỏi mệt nơi phố thị. Bước vào không gian mộc mạc ngát hương sả bưởi của An An, để đôi bàn tay lành nghề và dược tính ấm nóng của thảo mộc tự nhiên khơi thông dòng chảy sinh khí, chữa lành cơ thể bạn từ sâu bên trong.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookNow}
                className="bg-[#3D6A52] hover:bg-[#2C4B3A] text-white px-7 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow active:scale-95 inline-flex items-center gap-2.5 whitespace-nowrap"
              >
                <span>Đặt Lịch Tư Vấn</span>
                <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
              </button>

              <button
                onClick={onExploreServices}
                className="bg-white/80 hover:bg-white text-[#2C3E35] border border-[#3D6A52]/25 hover:border-[#3D6A52] px-6 py-3.5 rounded-full font-medium text-sm sm:text-base transition-all duration-200 shadow-sm inline-flex items-center gap-2.5 whitespace-nowrap"
              >
                <i className="fa-solid fa-spa text-[#3D6A52] text-sm" aria-hidden="true"></i>
                <span>Khám Phá Dịch Vụ</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#2C3E35]/70 border-t border-[#3D6A52]/10">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#3D6A52]" aria-hidden="true"></i>
                <span>Không hương liệu nhân tạo</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#3D6A52]" aria-hidden="true"></i>
                <span>Phòng trị liệu riêng tư, thanh tịnh</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-[#3D6A52]" aria-hidden="true"></i>
                <span>Miễn phí trà dưỡng sinh & bánh thảo mộc</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 bg-[#E8E2D5]">
              <img
                src="/src/assets/images/hero_duong_sinh_1792293943586.jpg"
                alt="Không gian thư giãn trị liệu thảo mộc tại Dưỡng sinh An An"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-xs uppercase tracking-widest text-[#E8E2D5] font-semibold block mb-1">
                  Không Gian Chữa Lành
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  Nơi tĩnh tâm lắng nghe hơi thở và phục hồi dòng chảy năng lượng
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Quality Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-[#3D6A52]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-2xl bg-white/60 border border-[#3D6A52]/10">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3D6A52] block tabular-nums">
              100%
            </span>
            <span className="text-sm font-semibold text-[#2C3E35] block mt-1">Thảo Dược Bản Địa</span>
            <span className="text-xs text-[#2C3E35]/70 block mt-0.5">Bồ kết, vỏ bưởi, ngải cứu nhung tuyển chọn</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 border border-[#3D6A52]/10">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3D6A52] block tabular-nums">
              14+
            </span>
            <span className="text-sm font-semibold text-[#2C3E35] block mt-1">Kinh Lạc & Huyệt Đạo</span>
            <span className="text-xs text-[#2C3E35]/70 block mt-0.5">Kỹ thuật viên đào tạo chuẩn Y học cổ truyền</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 border border-[#3D6A52]/10">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3D6A52] block tabular-nums">
              18.000+
            </span>
            <span className="text-sm font-semibold text-[#2C3E35] block mt-1">Khách Hàng Hài Lòng</span>
            <span className="text-xs text-[#2C3E35]/70 block mt-0.5">Giảm đau mỏi vai gáy và ngủ sâu giấc</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/60 border border-[#3D6A52]/10">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-[#3D6A52] block tabular-nums">
              3
            </span>
            <span className="text-sm font-semibold text-[#2C3E35] block mt-1">Cơ Sở Trị Liệu</span>
            <span className="text-xs text-[#2C3E35]/70 block mt-0.5">Không gian thiền tịnh tại TP.HCM & Hà Nội</span>
          </div>
        </div>
      </div>
    </section>
  );
};
