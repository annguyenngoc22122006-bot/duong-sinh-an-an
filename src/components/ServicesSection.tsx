import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/landingData.ts';
import { formatVND } from '../utils/booking.ts';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hair' | 'neck' | 'body' | 'facial'>('all');
  const [detailModalService, setDetailModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Tất Cả Liệu Trình' },
    { id: 'hair', label: 'Gội Đầu Dưỡng Sinh' },
    { id: 'neck', label: 'Trị Liệu Cổ Vai Gáy' },
    { id: 'body', label: 'Toàn Thân & Ngâm Chân' },
    { id: 'facial', label: 'Dưỡng Nhan Ngọc Bích' },
  ] as const;

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
          Danh Mục Liệu Trình Trọng Điểm
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
          Trị liệu chuyên sâu theo phương pháp Y học cổ truyền
        </h2>
        <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#2C3E35]/75 leading-relaxed">
          Mỗi liệu trình là sự kết tinh giữa bài thuốc cổ phương thuần khiết và kỹ thuật bấm huyệt chuyên sâu, được cá nhân hóa theo thể trạng và mức độ mỏi mệt của từng khách hàng.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              selectedCategory === cat.id
                ? 'bg-[#3D6A52] text-white shadow-sm'
                : 'bg-white text-[#2C3E35]/75 hover:text-[#2C3E35] border border-[#3D6A52]/15 hover:border-[#3D6A52]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-3xl border border-[#3D6A52]/15 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Time tag & Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-[#2C3E35] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    <i className="fa-regular fa-clock text-[#3D6A52] mr-1.5" aria-hidden="true"></i>
                    {service.time}
                  </span>
                  {service.badge && (
                    <span className="bg-[#3D6A52] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#E8E2D5] font-medium block">
                    Liệu pháp Đông Y
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight mt-0.5">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 text-left">
                <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2 border-t border-[#3D6A52]/10">
                  <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-wider block">
                    Công dụng nổi bật:
                  </span>
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2C3E35]/80">
                      <i className="fa-solid fa-check text-[#3D6A52] text-[11px] mt-0.5 shrink-0" aria-hidden="true"></i>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Pricing & Action */}
            <div className="p-6 pt-0 mt-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#2C3E35]/60 block">Giá trải nghiệm</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl font-bold text-[#3D6A52] tabular-nums">
                      {formatVND(service.price)}
                    </span>
                    <span className="text-xs text-[#2C3E35]/40 line-through tabular-nums">
                      {formatVND(service.originalPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDetailModalService(service)}
                    className="px-3.5 py-2.5 rounded-xl border border-[#3D6A52]/25 hover:border-[#3D6A52] text-[#2C3E35] text-xs font-semibold transition-colors bg-white whitespace-nowrap"
                  >
                    Xem Quy Trình
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="px-5 py-2.5 rounded-xl bg-[#3D6A52] hover:bg-[#2C4B3A] text-white text-xs font-semibold transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap inline-flex items-center gap-2"
                  >
                    <i className="fa-solid fa-calendar-plus text-xs" aria-hidden="true"></i>
                    <span>Đặt Lịch Ngay</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Service Detail & Steps */}
      {detailModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#3D6A52]/20 text-left relative">
            <button
              onClick={() => setDetailModalService(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] flex items-center justify-center transition-colors"
              aria-label="Đóng cửa sổ chi tiết"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>

            <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-wider block mb-1">
              Quy Trình Chuẩn Đông Y · {detailModalService.time}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#2C3E35] mb-4">
              {detailModalService.title}
            </h3>

            <p className="text-sm text-[#2C3E35]/80 mb-6 leading-relaxed">
              {detailModalService.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-semibold text-[#2C3E35] uppercase tracking-wider">
                Các bước thực hiện chi tiết:
              </h4>
              <div className="space-y-3">
                {detailModalService.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#3D6A52]/10">
                    <span className="w-6 h-6 rounded-full bg-[#3D6A52] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-[#2C3E35]/90 leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#3D6A52]/15 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#2C3E35]/60 block">Chi phí trọn gói</span>
                <span className="font-serif text-2xl font-bold text-[#3D6A52]">
                  {formatVND(detailModalService.price)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  const id = detailModalService.id;
                  setDetailModalService(null);
                  onSelectService(id);
                }}
                className="bg-[#3D6A52] hover:bg-[#2C4B3A] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm flex items-center gap-2"
              >
                <i className="fa-solid fa-calendar-check text-xs"></i>
                <span>Đặt Lịch Liệu Trình Này</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
