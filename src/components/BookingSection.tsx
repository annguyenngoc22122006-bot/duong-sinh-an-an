import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, BRANCHES } from '../data/landingData.ts';
import { validateBookingForm, generateBookingCode, BookingPayload } from '../utils/booking.ts';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState<BookingPayload>({
    name: '',
    phone: '',
    serviceId: preselectedServiceId || 'goi-dau-thao-duoc',
    branch: BRANCHES[0].id,
    date: '',
    time: '14:00',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);

  // Sync when preselectedServiceId changes
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: dateStr }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setBookingCode(generateBookingCode());
    setBookingConfirmed(true);
  };

  const selectedService = SERVICES_DATA.find(s => s.id === formData.serviceId);
  const selectedBranch = BRANCHES.find(b => b.id === formData.branch) || BRANCHES[0];

  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
          Đặt Lịch Hẹn & Tư Vấn Miễn Phí
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
          Khởi đầu hành trình thư giãn & phục hồi Thân - Tâm
        </h2>
        <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#2C3E35]/75 leading-relaxed">
          Quý khách vui lòng chọn thời gian thuận tiện. Đội ngũ tư vấn của Dưỡng sinh An An sẽ liên hệ xác nhận trong vòng 5 phút để chuẩn bị phòng trị liệu riêng chu đáo nhất.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Booking Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#3D6A52]/20 shadow-md text-left">
          {bookingConfirmed ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-4xl mx-auto">
                <i className="fa-solid fa-circle-check"></i>
              </div>

              <div>
                <span className="text-xs font-bold text-[#3D6A52] uppercase tracking-widest block mb-1">
                  Đã Xác Nhận Tiếp Nhận Lịch Hẹn
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C3E35]">
                  Hẹn Gặp Bạn Tại Dưỡng Sinh An An
                </h3>
                <p className="text-sm text-[#2C3E35]/75 mt-2">
                  Mã phiếu hẹn của quý khách: <strong className="text-[#3D6A52] font-mono text-base">{bookingCode}</strong>
                </p>
              </div>

              {/* Ticket Details */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/15 text-left text-xs sm:text-sm space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#3D6A52]/10 pb-2">
                  <span className="text-[#2C3E35]/65">Họ và tên:</span>
                  <span className="font-semibold text-[#2C3E35]">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#3D6A52]/10 pb-2">
                  <span className="text-[#2C3E35]/65">Số điện thoại:</span>
                  <span className="font-semibold text-[#2C3E35]">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-[#3D6A52]/10 pb-2">
                  <span className="text-[#2C3E35]/65">Gói dịch vụ:</span>
                  <span className="font-semibold text-[#3D6A52]">{selectedService?.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#3D6A52]/10 pb-2">
                  <span className="text-[#2C3E35]/65">Thời gian hẹn:</span>
                  <span className="font-semibold text-[#2C3E35]">{formData.time} · Ngày {formData.date}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#2C3E35]/65">Cơ sở phục vụ:</span>
                  <span className="font-semibold text-[#2C3E35] text-right">{selectedBranch.name}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setBookingConfirmed(false);
                    setFormData(prev => ({ ...prev, name: '', phone: '', notes: '' }));
                  }}
                  className="bg-[#3D6A52] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#2C4B3A] transition-colors"
                >
                  Đặt Thêm Lịch Hẹn Khác
                </button>
                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="border border-[#3D6A52]/30 text-[#3D6A52] px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#3D6A52]/10 transition-colors inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span>Gọi Hotline Cơ Sở</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="flex items-center justify-between border-b border-[#3D6A52]/10 pb-3 mb-2">
                <span className="font-serif font-bold text-xl text-[#2C3E35]">
                  Phiếu Đăng Ký Lịch Hẹn
                </span>
                <span className="text-xs text-[#3D6A52] font-medium">
                  <i className="fa-solid fa-clock-rotate-left mr-1"></i> Xác nhận sau 5 phút
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                    Họ và tên quý khách <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nguyễn Phương Linh"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0901 234 567"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm`}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                  Chọn gói dịch vụ quan tâm <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm font-medium"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.time} - {new Intl.NumberFormat('vi-VN').format(srv.price)}đ)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                  Chọn cơ sở phục vụ
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm font-medium"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                    Ngày hẹn dự kiến <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.date ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm`}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                  {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                    Khung giờ nhận ca <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="09:00">09:00 Sáng (Bắt đầu ngày mới)</option>
                    <option value="10:30">10:30 Sáng</option>
                    <option value="12:00">12:00 Trưa (Giờ nghỉ trưa)</option>
                    <option value="14:00">14:00 Chiều</option>
                    <option value="15:30">15:30 Chiều</option>
                    <option value="17:30">17:30 Chiều (Sau giờ tan tầm)</option>
                    <option value="19:00">19:00 Tối (Thư giãn trước khi ngủ)</option>
                    <option value="20:00">20:00 Tối (Ca cuối trong ngày)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C3E35] uppercase tracking-wider mb-1">
                  Ghi chú tình trạng cơ thể (Tùy chọn)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Đau mỏi đốt sống cổ C4-C5, hay bị mất ngủ, da đầu nhiều gàu..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3D6A52] bg-[#FAF7F2]/40 text-sm resize-none"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3D6A52] hover:bg-[#2C4B3A] text-white py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-calendar-check text-sm"></i>
                <span>Gửi Yêu Cầu Đặt Lịch Hẹn Ngay</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact, Branch Switcher & Map Card */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Branch switcher pills */}
          <div className="bg-white rounded-3xl p-6 border border-[#3D6A52]/15 shadow-sm space-y-4">
            <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-wider block">
              Hệ Thống Cơ Sở Dưỡng Sinh An An
            </span>

            <div className="flex gap-2 pb-1">
              {BRANCHES.map((branch, index) => (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setActiveBranchIndex(index)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeBranchIndex === index
                      ? 'bg-[#3D6A52] text-white shadow-2xs'
                      : 'bg-[#FAF7F2] text-[#2C3E35]/70 hover:text-[#2C3E35]'
                  }`}
                >
                  Cơ sở {index + 1}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/10 space-y-3">
              <h4 className="font-serif font-bold text-base text-[#2C3E35]">
                {BRANCHES[activeBranchIndex].name}
              </h4>
              <div className="space-y-2 text-xs text-[#2C3E35]/80">
                <p className="flex items-start gap-2.5">
                  <i className="fa-solid fa-location-dot text-[#3D6A52] mt-0.5 shrink-0"></i>
                  <span>{BRANCHES[activeBranchIndex].address}</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <i className="fa-solid fa-phone text-[#3D6A52] shrink-0"></i>
                  <span>Hotline: <strong>{BRANCHES[activeBranchIndex].phone}</strong></span>
                </p>
                <p className="flex items-center gap-2.5">
                  <i className="fa-solid fa-door-open text-[#3D6A52] shrink-0"></i>
                  <span>{BRANCHES[activeBranchIndex].hours}</span>
                </p>
              </div>
            </div>

            {/* Direct hotline button */}
            <a
              href={`tel:${BRANCHES[activeBranchIndex].phone.replace(/[\s.]/g, '')}`}
              className="w-full bg-[#FAF7F2] hover:bg-[#3D6A52] text-[#2C3E35] hover:text-white py-3 rounded-xl text-xs font-bold transition-all border border-[#3D6A52]/20 flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-phone-volume"></i>
              <span>Gọi Trực Tiếp: {BRANCHES[activeBranchIndex].phone}</span>
            </a>
          </div>

          {/* Interactive Map Visual Illustration Card */}
          <div className="bg-white rounded-3xl p-6 border border-[#3D6A52]/15 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-wider">
                Vị Trí Bản Đồ Minh Họa
              </span>
              <span className="text-[11px] text-[#2C3E35]/60 flex items-center gap-1">
                <i className="fa-solid fa-car"></i> Có chỗ đậu ô tô & xe máy miễn phí
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-[#3D6A52]/15 bg-[#E8E2D5] flex items-center justify-center text-center p-4">
              {/* Stylized vector map representation */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3D6A52_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#3D6A52] text-white flex items-center justify-center mx-auto text-xl shadow-lg animate-bounce">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <p className="font-serif font-bold text-sm text-[#2C3E35]">
                  Dưỡng Sinh An An - {BRANCHES[activeBranchIndex].name.split('-')[1]}
                </p>
                <p className="text-[11px] text-[#2C3E35]/70 max-w-xs mx-auto">
                  {BRANCHES[activeBranchIndex].address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BRANCHES[activeBranchIndex].address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3D6A52] hover:underline pt-1"
                >
                  <span>Chỉ đường trên Google Maps</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
