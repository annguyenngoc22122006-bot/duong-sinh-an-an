import React, { useState } from 'react';

export const AboutUs: React.FC = () => {
  const [activePhilosophy, setActivePhilosophy] = useState<'than' | 'tam' | 'tri'>('than');

  const philosophyDetails = {
    than: {
      title: 'Dưỡng Thân: Đả Thông Kinh Lạc, Khí Huyết Lưu Thông',
      desc: 'Cơ thể vật lý là ngôi đền của sinh mệnh. Khi các cơ co cứng do ngồi lâu hoặc hàn khí xâm nhập, kinh lạc bị tắc nghẽn sinh ra đau nhức, mỏi mệt. An An ứng dụng kỹ thuật xoa bóp, ấn huyệt chuẩn y học kết hợp nhiệt năng thảo dược giúp mạch máu giãn nở tự nhiên, gân cơ mềm dẻo và nuôi dưỡng tạng phủ.',
      herbs: ['Ngải cứu nhung', 'Gừng gió', 'Bồ kết nướng', 'Quế chi'],
      quote: 'Kinh lạc thông thì bách bệnh tiêu tan, khí huyết vượng thì sắc diện nhuận hồng.'
    },
    tam: {
      title: 'Dưỡng Tâm: Thanh Lọc Bất An, Tìm Về Tĩnh Lặng',
      desc: 'Áp lực công việc và cuộc sống hiện đại khiến tâm hỏa bốc lên, gây khó ngủ, lo âu và suy nhược tinh thần. Tại An An, từng làn khói xông thơm dịu, từng giọt nước thảo mộc ấm tưới lên da đầu và âm thanh trong trẻo của chuông xoay thiền định giúp dẫn dắt tâm trí buông bỏ mọi xao động, đưa bạn về trạng thái an yên nguyên bản.',
      herbs: ['Hoa cúc tuyết', 'Trầm hương', 'Hương nhu', 'Sả chanh'],
      quote: 'Tâm an thì khí thuận, thần tịnh thì vạn sự hanh thông.'
    },
    tri: {
      title: 'Dưỡng Trí: Minh Mẫn Tinh Thần, Tái Tạo Năng Lượng',
      desc: 'Não bộ chỉ chiếm 2% trọng lượng cơ thể nhưng tiêu thụ tới 20% lượng oxy và năng lượng. Bằng việc kích thích các huyệt đạo trọng yếu như Bách Hội, Thái Dương, Phong Trì kết hợp tinh dầu thiên nhiên, liệu trình tại An An giúp tăng tuần hoàn máu lên não, giải phóng sương mù não bộ (brain fog) và tái sinh năng lượng sáng tạo.',
      herbs: ['Vỏ bưởi da xanh', 'Bạc hà', 'Hà thủ ô', 'Kỷ tử'],
      quote: 'Não bộ được tưới tắm bằng khí huyết thanh sạch sẽ khai mở sự sáng suốt và bền bỉ.'
    }
  };

  const current = philosophyDetails[activePhilosophy];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-[#3D6A52]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#3D6A52] uppercase tracking-widest block mb-2">
            Triết Lý Y Học Cổ Truyền
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E35] [text-wrap:balance]">
            Chăm sóc Thân - Tâm - Trí từ gốc rễ tự nhiên
          </h2>
          <div className="w-16 h-0.5 bg-[#3D6A52] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#2C3E35]/75 leading-relaxed">
            Dưỡng sinh An An kế thừa tinh hoa y lý phương Đông: vạn vật tương sinh, cơ thể con người là một chỉnh thể hữu cơ. Chúng tôi không chỉ xoa dịu cơn mỏi nhất thời, mà bồi hoàn chính khí để cơ thể tự phục hồi và phát triển khỏe khoắn dài lâu.
          </p>
        </div>

        {/* 3 Pillars of Commitment */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#3D6A52]/15 text-left flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-seedling" aria-hidden="true"></i>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C3E35] mb-3">
                100% Thảo Dược Bản Địa
              </h3>
              <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
                Nguồn dược liệu thu hái từ các vườn thảo mộc đạt chuẩn hữu cơ tại Việt Nam: bồ kết Quảng Nam, vỏ bưởi Tây Ninh, ngải cứu nhung Cao Bằng, quế chi Trà Bồng. Đun sắc thủ công trong ngày, tuyệt đối nói không với hóa chất, chất tạo bọt nhân tạo hay hương liệu tổng hợp.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3D6A52]/10 text-xs font-medium text-[#3D6A52] flex items-center gap-1.5">
              <i className="fa-solid fa-leaf text-xs"></i>
              <span>Đun nấu tươi mới mỗi sáng</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#3D6A52]/15 text-left flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-hand-holding-hand" aria-hidden="true"></i>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C3E35] mb-3">
                Kỹ Thuật Viên Chuẩn Y Học
              </h3>
              <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
                100% kỹ thuật viên được đào tạo chuyên môn bài bản về giải phẫu học cơ bản, vị trí các đường kinh lạc và cách xác định huyệt đạo chính xác. Mỗi lực tay ấn, vuốt miết hay đấm bóp đều đi theo nhịp thở của khách hàng, đảm bảo êm ái mà sâu tận căn nguyên bó cơ.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3D6A52]/10 text-xs font-medium text-[#3D6A52] flex items-center gap-1.5">
              <i className="fa-solid fa-certificate text-xs"></i>
              <span>Được cố vấn bởi Lương y YHCT</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#3D6A52]/15 text-left flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3D6A52]/10 text-[#3D6A52] flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-bell-concierge" aria-hidden="true"></i>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C3E35] mb-3">
                Đánh Thức Ngũ Quan
              </h3>
              <p className="text-sm text-[#2C3E35]/80 leading-relaxed">
                Trải nghiệm trọn vẹn sự an yên qua cả 5 giác quan: Mùi hương thơm ấm của thảo mộc tự nhiên; Tiếng nước chảy róc rách và chuông xoay Tây Tạng; Vị ngọt dịu của trà dưỡng nhan táo đỏ; Ánh sáng vàng dịu êm và sự mềm mại của khăn bông sợi tre tự nhiên.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3D6A52]/10 text-xs font-medium text-[#3D6A52] flex items-center gap-1.5">
              <i className="fa-solid fa-feather text-xs"></i>
              <span>Không gian thanh tịnh không tiếng ồn</span>
            </div>
          </div>
        </div>

        {/* Interactive Philosophy Deep-Dive Tabs */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#3D6A52]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#3D6A52]/10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#3D6A52] font-semibold block">
                Khám Phá Chi Tiết
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C3E35] mt-1">
                Bộ Ba Trụ Cột: Thân · Tâm · Trí
              </h3>
            </div>

            {/* Segmented control buttons */}
            <div className="inline-flex items-center p-1 bg-white rounded-full border border-[#3D6A52]/20 self-start sm:self-auto">
              {(['than', 'tam', 'tri'] as const).map((key) => {
                const labelMap = { than: 'Thân Thể', tam: 'Tâm Trí', tri: 'Trí Lực' };
                const isActive = activePhilosophy === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActivePhilosophy(key)}
                    className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#3D6A52] text-white shadow-sm'
                        : 'text-[#2C3E35]/70 hover:text-[#2C3E35]'
                    }`}
                  >
                    {labelMap[key]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-8 space-y-4">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2C3E35]">
                {current.title}
              </h4>
              <p className="text-sm sm:text-base text-[#2C3E35]/85 leading-relaxed">
                {current.desc}
              </p>

              {/* Herbs list */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3D6A52] block mb-2">
                  Dược Liệu Chủ Đạo Đi Kèm:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.herbs.map((h, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white text-[#2C3E35] px-3.5 py-1.5 rounded-lg border border-[#3D6A52]/15 font-medium shadow-2xs"
                    >
                      <i className="fa-solid fa-leaf text-[#3D6A52] text-[10px] mr-1.5"></i>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#3D6A52]/15 shadow-2xs">
              <i className="fa-solid fa-quote-left text-2xl text-[#3D6A52]/30 mb-3 block"></i>
              <p className="font-serif italic text-sm sm:text-base text-[#2C3E35] leading-relaxed mb-4">
                "{current.quote}"
              </p>
              <div className="text-xs text-[#3D6A52] font-semibold">
                — Y Luận Dưỡng Sinh Phương Đông
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
