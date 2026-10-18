import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/landingData.ts';

export const TestimonialsSection: React.FC = () => {
  const [filterService, setFilterService] = useState<string>('all');

  const filtered = filterService === 'all'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.serviceUsed.toLowerCase().includes(filterService));

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-y border-[#3D6A52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
            Phản Hồi Chân Thực Từ Khách Hàng
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
            Những câu chuyện chữa lành tại Dưỡng sinh An An
          </h2>
          <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#2C3E35]/75 leading-relaxed">
            Hơn 18.000 khách hàng đã tìm lại giấc ngủ sâu và đôi vai nhẹ nhõm. Sự an yên và hài lòng của bạn là động lực lớn nhất để An An tận tâm mỗi ngày.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#3D6A52]/15 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
            >
              <div>
                {/* Rating stars & verified */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#C5A880]">
                    {[...Array(item.stars)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-xs"></i>
                    ))}
                  </div>
                  {item.verified && (
                    <span className="text-[11px] text-[#3D6A52] font-semibold flex items-center gap-1">
                      <i className="fa-solid fa-circle-check text-[10px]"></i>
                      <span>Đã trải nghiệm</span>
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-[#2C3E35]/85 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#3D6A52]/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3D6A52] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {item.avatarText}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-serif font-bold text-sm text-[#2C3E35] truncate">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#2C3E35]/65 truncate">
                    {item.role} · {item.age} tuổi
                  </p>
                  <p className="text-[10px] text-[#3D6A52] font-medium truncate mt-0.5">
                    Dịch vụ: {item.serviceUsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary statement */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 flex items-center justify-center gap-4 text-xs sm:text-sm text-[#2C3E35]/80">
          <i className="fa-solid fa-shield-heart text-[#3D6A52] text-xl"></i>
          <span>
            <strong>Cam kết hoàn tiền 100%</strong> nếu bạn không cảm thấy thư giãn và hài lòng sau buổi trị liệu đầu tiên.
          </span>
        </div>
      </div>
    </section>
  );
};
