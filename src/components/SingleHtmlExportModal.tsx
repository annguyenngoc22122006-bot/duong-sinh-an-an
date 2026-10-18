import React, { useState } from 'react';

interface SingleHtmlExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SingleHtmlExportModal: React.FC<SingleHtmlExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/standalone.html';
    link.download = 'duong_sinh_an_an_landing_page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = async () => {
    try {
      const response = await fetch('/standalone.html');
      const htmlText = await response.text();
      await navigator.clipboard.writeText(htmlText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#3D6A52]/20 text-left relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] flex items-center justify-center transition-colors"
          aria-label="Đóng modal xuất mã nguồn"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-xl mb-4">
          <i className="fa-solid fa-file-code"></i>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#2C3E35] mb-2">
          Mã Nguồn Đơn File (Single-File .HTML)
        </h3>
        
        <p className="text-sm text-[#2C3E35]/80 leading-relaxed mb-6">
          Toàn bộ cấu trúc giao diện Landing Page <strong>Dưỡng sinh An An</strong> đã được tích hợp hoàn chỉnh gồm: <strong>HTML5</strong>, <strong>Tailwind CSS (CDN)</strong>, <strong>FontAwesome 6 (CDN)</strong> và <strong>JavaScript thuần</strong> trong một file duy nhất. Bạn có thể mở trực tiếp trên mọi trình duyệt mà không cần cài đặt node_modules hay server!
        </p>

        <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3D6A52]/15 text-xs text-[#2C3E35]/85 space-y-2 mb-6">
          <div className="flex items-center gap-2 font-semibold text-[#3D6A52]">
            <i className="fa-solid fa-circle-check"></i>
            <span>Đầy đủ 8 Sections theo yêu cầu:</span>
          </div>
          <p className="pl-5 text-[#2C3E35]/70">
            Navbar Sticky, Hero trị liệu đông y, Giới thiệu triết lý Thân-Tâm-Trí, Dịch vụ nổi bật, Góc sức khỏe đông y, Sản phẩm thảo mộc, Đánh giá thực tế, Form đặt lịch hẹn & Bản đồ minh họa.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleCopyCode}
            className="flex-1 py-3 px-4 rounded-xl bg-[#FAF7F2] hover:bg-[#3D6A52]/10 text-[#2C3E35] border border-[#3D6A52]/20 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-600' : 'fa-copy'}`}></i>
            <span>{copied ? 'Đã Sao Chép Toàn Bộ Mã Nguồn!' : 'Sao Chép Mã Nguồn HTML'}</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 py-3 px-4 rounded-xl bg-[#3D6A52] hover:bg-[#2C4B3A] text-white font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-download"></i>
            <span>Tải Xuống File .HTML</span>
          </button>
        </div>
      </div>
    </div>
  );
};
