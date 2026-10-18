export interface ServiceItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'neck' | 'body' | 'facial';
  time: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
  steps: string[];
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  author: string;
  icon: string;
  content: {
    intro: string;
    points: { name: string; desc: string; guide: string }[];
    conclusion: string;
  };
}

export interface ProductItem {
  id: string;
  name: string;
  volume: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  soldCount: number;
  description: string;
  ingredients: string;
  usage: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  age: number;
  serviceUsed: string;
  avatarText: string;
  content: string;
  stars: number;
  verified: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'goi-dau-thao-duoc',
    title: 'Gội Đầu Dưỡng Sinh Canh Thuốc Cổ Truyền',
    category: 'hair',
    time: '75 Phút',
    price: 199000,
    originalPrice: 280000,
    image: '/src/assets/images/service_herbal_hair_1792293944883.jpg',
    badge: 'Được yêu thích nhất',
    description: 'Nấu từ bồ kết nướng, vỏ bưởi da xanh, sả chanh và 12 vị thảo dược tươi, kết hợp bấm huyệt vùng đầu cổ, đả thông kinh lạc, sạch gàu mượt tóc và thư thái sâu.',
    benefits: [
      'Đả thông 14 đường kinh lạc và các huyệt đạo vùng đầu (Bách Hội, Thái Dương, Phong Trì)',
      'Kích thích nang tóc phát triển, giảm gãy rụng và nuôi dưỡng sợi tóc đen mượt',
      'Giảm áp lực thần kinh, xua tan đau đầu hoa mắt, cải thiện giấc ngủ ngay buổi đầu tiên'
    ],
    steps: [
      'Ngâm chân thảo dược & khai thông các huyệt vị kinh lạc vùng đầu',
      'Gội đầu 2 nước với nước canh bồ kết vỏ bưởi đun ấm tại chỗ',
      'Ấn huyệt chuyên sâu vùng đầu, cổ, thái dương và vành tai',
      'Đắp mặt nạ ngải cứu ấm & xông tinh dầu thảo mộc tự nhiên',
      'Xả dưỡng thảo mộc, sấy ion âm và xịt dưỡng tóc tinh dầu bưởi cô đặc'
    ]
  },
  {
    id: 'tri-lieu-co-vai-gay',
    title: 'Massage Trị Liệu Cổ - Vai - Gáy & Lưng',
    category: 'neck',
    time: '75 Phút',
    price: 299000,
    originalPrice: 420000,
    image: '/src/assets/images/service_neck_therapy_1792293944744.jpg',
    badge: 'Chuyên viên trị liệu',
    description: 'Phương pháp xoa bóp, ấn huyệt, giải cơ sâu kết hợp chườm ấm cao ngải cứu nhung và túi chườm thảo dược, đặc trị đau nhức thoái hóa đốt sống cổ ở dân văn phòng.',
    benefits: [
      'Giải phóng bó cơ bị co cứng vùng cổ vai gáy và cột sống thắt lưng',
      'Tăng cường tuần hoàn máu lên não, chấm dứt cảm giác tê bì hai bàn tay',
      'Hơi ấm thảo dược ngải cứu thấm sâu trục hàn khí và ứ huyết độc hại'
    ],
    steps: [
      'Thăm khám tình trạng co cơ và xác định các điểm tắc nghẽn kinh lạc',
      'Thoa dầu thảo dược ấm nóng đặc chế từ gừng gió, địa liền và quế chi',
      'Kỹ thuật xoa bóp, miết huyệt giải cơ sâu Kiên Tỉnh, Phong Phủ, Đại Chùy',
      'Chườm túi ngải cứu sao muối hồng Himalaya giữ ấm 25 phút',
      'Xoa dịu cơ thể với trà dưỡng sinh thảo mộc ấm lòng'
    ]
  },
  {
    id: 'ngam-chan-toan-than',
    title: 'Liệu Trình Toàn Thân Thảo Dược & Ngâm Chân Bấm Huyệt',
    category: 'body',
    time: '90 Phút',
    price: 389000,
    originalPrice: 520000,
    image: '/src/assets/images/service_foot_soak_1792293945513.jpg',
    badge: 'Phục hồi toàn diện',
    description: 'Ngâm chân trong bồn gỗ pơ-mu với 18 vị thuốc bắc gia truyền, bấm huyệt Dũng Tuyền giải độc tạng phủ, kết hợp xông hơi đá muối và massage toàn thân.',
    benefits: [
      'Đào thải hàn ẩm tích tụ lâu ngày từ lòng bàn chân và xương khớp',
      'Cân bằng âm dương, dưỡng khí huyết, kích hoạt hệ miễn dịch tự nhiên',
      'Thư giãn cơ bắp toàn thân, xóa tan uể oải sau những ngày làm việc áp lực'
    ],
    steps: [
      'Ngâm chân thùng gỗ pơ-mu với thảo dược gừng già, quế, hoa hồi, muối hầm',
      'Chăm sóc và bấm huyệt phản xạ các cơ quan tạng phủ tại lòng bàn chân',
      'Massage toàn thân theo đường kinh bàng quang dọc sống lưng',
      'Ấn huyệt đả thông khí huyết tứ chi và đắp khăn thảo dược ấm',
      'Thưởng thức canh dưỡng sinh táo đỏ kỷ tử bổ huyết'
    ]
  },
  {
    id: 'dien-di-ngoc-bich',
    title: 'Dưỡng Nhan Ngọc Bích & Chuông Xoay Tây Tạng',
    category: 'facial',
    time: '60 Phút',
    price: 349000,
    originalPrice: 480000,
    image: '/src/assets/images/hero_duong_sinh_1792293943586.jpg',
    badge: 'Thư giãn thân tâm',
    description: 'Kết hợp ấn huyệt nhuận sắc mặt, thanh lăn ngọc thạch thiên nhiên đẩy lùi nếp nhăn và sóng âm chuông xoay thiền định giúp tâm an tịnh, da sáng hồng hào.',
    benefits: [
      'Đào thải độc tố tích tụ dưới da, kích thích tăng sinh collagen tự nhiên',
      'Nâng cơ thon gọn mặt bằng phiến ngọc Guasha cẩm thạch mát lạnh',
      'Sóng rung chuông xoay đưa não bộ vào trạng thái sóng Theta tĩnh lặng'
    ],
    steps: [
      'Làm sạch da bằng tinh chất cám gạo và sữa mầm đậu nành thủ công',
      'Massage bấm huyệt Tình Minh, Nghinh Hương, Địa Thương nhuận sắc',
      'Nâng cơ bằng thanh lăn cẩm thạch ngọc bích ướp lạnh thảo mộc',
      'Thực hành rung chuông xoay thiền định thư giãn tâm trí',
      'Đắp mặt nạ bạch truật, yến mạch và hoa cúc dưỡng ẩm'
    ]
  }
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'huyet-dao-ngu-ngon',
    title: 'Bấm 3 Huyệt Vị Này 5 Phút Trước Khi Ngủ Để Dứt Điểm Mất Ngủ',
    summary: 'Mất ngủ, khó vào giấc hay trằn trọc phần lớn do tâm hỏa vượng, khí huyết bất túc. Khám phá 3 huyệt vị An Miên, Dũng Tuyền, Thần Môn giúp bạn ngủ sâu không mộng mị.',
    readTime: '4 phút đọc',
    category: 'Cẩm nang giấc ngủ',
    author: 'Lương y Hoàng Gia - Cố vấn An An',
    icon: 'fa-moon',
    content: {
      intro: 'Theo y học cổ truyền, giấc ngủ là thời khắc để can (gan) và thận tàng huyết, tự chữa lành và nạp lại chính khí cho cơ thể. Khi thần không an, giấc ngủ sẽ chập chờn. Chỉ với 5 phút xoa bóp 3 huyệt vị dưới đây mỗi tối, bạn sẽ cảm nhận sự thư thái lan tỏa khắp cơ thể.',
      points: [
        {
          name: '1. Huyệt An Miên (Sau vành tai)',
          desc: 'Nằm ở chỗ lõm phía sau dái tai, giữa huyệt Ế Phong và Ế Minh.',
          guide: 'Dùng ngón trỏ hoặc ngón cái ấn nhẹ nhàng theo chuyển động tròn từ 1-2 phút cho đến khi thấy hơi căng tức nhẹ. Huyệt này có tác dụng trấn kinh, an thần tuyệt vời.'
        },
        {
          name: '2. Huyệt Thần Môn (Cổ tay)',
          desc: 'Nằm ở nếp gấp cổ tay, ngay phía dưới ngón tay út, tại chỗ lõm bờ ngoài gân cơ trụ.',
          guide: 'Dùng ngón cái tay đối diện day ấn nhẹ 30 lần mỗi bên. Huyệt Thần Môn giúp thanh tâm nhiệt, điều hòa nhịp tim và làm dịu những suy nghĩ miên man.'
        },
        {
          name: '3. Huyệt Dũng Tuyền (Lòng bàn chân)',
          desc: 'Nằm ở điểm nối 1/3 trước và 2/3 sau của gan bàn chân (chỗ lõm khi co các ngón chân lại).',
          guide: 'Xoa hai lòng bàn tay cho thật nóng, sau đó chà xát mạnh vào huyệt Dũng Tuyền 50-100 lần. Việc dẫn nhiệt xuống bàn chân giúp hạ hỏa, ấm thận và đưa cơ thể vào giấc ngủ sâu.'
        }
      ],
      conclusion: 'Kết hợp ngâm chân thảo dược ấm 15 phút trước khi bấm huyệt sẽ nhân đôi hiệu quả an thần, giúp bạn tỉnh dậy với tinh thần sảng khoái và tràn đầy sinh lực.'
    }
  },
  {
    id: 'duong-than-mua-lanh',
    title: 'Tại Sao Ngâm Chân Thảo Dược Mỗi Tối Lại Tốt Hơn Dùng Thuốc Bổ?',
    summary: 'Chân là gốc của cây, chân là rễ của người. Đôi bàn chân chứa hơn 60 huyệt đạo và phản xạ của lục phủ ngũ tạng. Cùng An An tìm hiểu cách ngâm chân trục hàn dưỡng sinh.',
    readTime: '5 phút đọc',
    category: 'Trục hàn bài độc',
    author: 'Kỹ thuật viên Trưởng Kim Oanh',
    icon: 'fa-spa',
    content: {
      intro: 'Cổ nhân có câu: "Sau bữa ăn đi trăm bước, trước khi ngủ ngâm chân nước ấm". Đôi bàn chân xa tim nhất nên tuần hoàn máu thường kém nhất, đặc biệt khi thời tiết chuyển mùa se lạnh hoặc ngồi phòng máy lạnh suốt ngày.',
      points: [
        {
          name: '1. Đả thông kinh lạc và dẫn lưu khí huyết',
          desc: 'Kích thích 6 đường kinh chính (Can, Tỳ, Thận, Đởm, Vị, Bàng Quang).',
          guide: 'Nước ấm khoảng 40 - 45°C làm giãn nở mạch máu, thúc đẩy tuần hoàn máu từ chi dưới quay ngược trở về tim, giảm gánh nặng co bóp cho cơ tim.'
        },
        {
          name: '2. Thảo mộc thẩm thấu qua biểu bì',
          desc: 'Sự kết hợp của Gừng già, Ngải cứu, Quế chi và Muối khoáng.',
          guide: 'Gừng có tính cay ấm phát tán phong hàn; Ngải cứu ôn kinh chỉ huyết; Quế thông kinh mạch. Dược tính hòa trong nước nóng bốc hơi xông ấm các huyệt đạo.'
        },
        {
          name: '3. Giảm căng cứng bắp chân và tê bì ngón chân',
          desc: 'Đặc biệt hữu hiệu cho người hay mang giày cao gót hoặc đứng lâu.',
          guide: 'Ngâm từ 20 đến 25 phút đến khi cơ thể lấm tấm mồ hôi nhẹ ở trán hoặc lưng là đạt chuẩn bài độc, không nên ngâm quá lâu.'
        }
      ],
      conclusion: 'Nên dùng thùng gỗ (như thông hoặc pơ-mu) để giữ nhiệt lâu và tinh dầu tự nhiên trong gỗ phát huy tác dụng kháng khuẩn.'
    }
  },
  {
    id: 'giam-dau-co-vai-gay-van-phong',
    title: 'Giải Tỏa Đau Mỏi Cổ Vai Gáy: 4 Thói Quen Nhỏ Cứu Lấy Cột Sống',
    summary: 'Hơn 85% nhân viên văn phòng gặp chứng đau mỏi cơ thang, thoái hóa đốt sống cổ do ngồi sai tư thế. Đây là những giải pháp phục hồi chủ động không dùng thuốc.',
    readTime: '3 phút đọc',
    category: 'Văn phòng khỏe mạnh',
    author: 'Bác sĩ YHCT Đỗ Văn Minh',
    icon: 'fa-leaf',
    content: {
      intro: 'Khi đầu cúi về phía trước 45 độ để nhìn màn hình điện thoại hoặc laptop, cột sống cổ phải chịu một tải trọng tương đương 22kg. Lâu ngày dẫn tới thiếu máu não, đau nửa đầu và thoát vị đĩa đệm.',
      points: [
        {
          name: '1. Quy tắc 45-5: Đứng dậy và vươn vai',
          desc: 'Cứ mỗi 45 phút làm việc tập trung, hãy dành 5 phút vận động.',
          guide: 'Thực hiện động tác quay đầu nhìn vai trái - phải, ngửa cổ nhìn trần nhà và kéo giãn hai tay qua đầu để mở rộng lồng ngực.'
        },
        {
          name: '2. Chườm thảo dược ấm mỗi tối',
          desc: 'Nhiệt năng kết hợp tinh chất ngải cứu giúp làm mềm bó cơ.',
          guide: 'Dùng túi chườm ngải cứu sao muối hâm nóng trong lò vi sóng 2 phút rồi đặt quanh cổ vai gáy 20 phút trước khi ngủ.'
        },
        {
          name: '3. Uống trà ấm thay vì cà phê lạnh',
          desc: 'Tránh để khí lạnh (hàn khí) xâm nhập vào phế và tạng vị.',
          guide: 'Một tách trà gừng táo đỏ hoặc trà hoa cúc mật ong giúp giữ ấm cơ hoành, lưu thông kinh mạch vùng cổ họng và gáy.'
        }
      ],
      conclusion: 'Nếu tình trạng co cứng kéo dài trên 2 tuần kèm tê buốt cánh tay, bạn nên đến spa dưỡng sinh trị liệu chuyên sâu để được giải cơ và đả thông huyệt đạo kịp thời.'
    }
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'dau-goi-bo-ket-500ml',
    name: 'Dầu Gội Thảo Dược Bồ Kết & Vỏ Bưởi Cô Đặc (500ml)',
    volume: 'Chai 500ml',
    price: 245000,
    originalPrice: 320000,
    image: '/src/assets/images/product_herbal_shampoo_1792293945531.jpg',
    rating: 4.9,
    soldCount: 3820,
    description: 'Nấu cô đặc liên tục 48 giờ từ bồ kết sao vàng, vỏ bưởi da xanh ép tươi, hương nhu, sả chanh và cỏ mần trầu. Không silicone, không hương liệu hóa chất nhân tạo.',
    ingredients: 'Bồ kết 60%, Vỏ bưởi da xanh 20%, Hương nhu, Cỏ mần trầu, Nhang bài, Sả chanh, Tinh dầu bưởi nguyên chất.',
    usage: 'Làm ướt tóc, lấy 10-15ml mát-xa nhẹ nhàng da đầu 5-7 phút cho dưỡng chất thẩm thấu, sau đó xả sạch với nước ấm.'
  },
  {
    id: 'tui-chuom-thao-duoc-co-vai',
    name: 'Túi Chườm Thảo Dược Cổ Vai Gáy Ngải Cứu',
    volume: 'Túi 1.2kg vải thô',
    price: 280000,
    originalPrice: 380000,
    image: '/src/assets/images/product_herbal_pouch_1792294016865.jpg',
    rating: 5.0,
    soldCount: 2410,
    description: 'Thiết kế ôm khít vòm cổ và bả vai. Chứa ngải cứu nhung già, quế chi, hồi hương, gừng sẻ và muối hạt biển tự nhiên. Dễ dàng làm nóng bằng lò vi sóng.',
    ingredients: 'Ngải cứu khô 40%, Muối khoáng biển, Gừng gió, Quế Trà Bồng, Hạt thảo quyết minh, Hoa hồi Lạng Sơn.',
    usage: 'Cho túi vào lò vi sóng quay 2-3 phút (hoặc chưng cách thủy), kiểm tra độ ấm rồi đặt chườm lên vùng cổ vai gáy hoặc bụng từ 25-30 phút.'
  },
  {
    id: 'tinh-dau-tram-huong-sa-chanh',
    name: 'Tinh Dầu Thảo Mộc Trầm Hương & Sả Chanh (30ml)',
    volume: 'Lọ 30ml nhỏ giọt',
    price: 185000,
    originalPrice: 250000,
    image: '/src/assets/images/product_herbal_shampoo_1792293945531.jpg',
    rating: 4.8,
    soldCount: 1650,
    description: 'Chiết xuất chưng cất hơi nước tinh khiết 100%. Hương thơm thanh khiết, thư giãn tinh thần, xua đuổi côn trùng và thanh lọc không khí trong phòng ngủ.',
    ingredients: 'Tinh dầu sả chanh hữu cơ chưng cất phân đoạn, tinh dầu trầm hương tự nhiên Khánh Hòa.',
    usage: 'Nhỏ 3-5 giọt vào máy khuếch tán tinh dầu hoặc bồn tắm nước ấm, hoặc nhỏ 1 giọt vào lòng bàn tay xoa ấm hít sâu thư giãn.'
  },
  {
    id: 'tra-duong-nhan-bat-bao',
    name: 'Trà Dưỡng Sinh Bát Bảo Thảo Mộc (Hộp 20 Gói)',
    volume: 'Hộp 20 gói túi lọc',
    price: 165000,
    originalPrice: 220000,
    image: '/src/assets/images/product_herbal_pouch_1792294016865.jpg',
    rating: 4.9,
    soldCount: 4290,
    description: 'Công thức bổ khí dưỡng huyết truyền thống: Táo đỏ Tân Cương, kỷ tử Ninh Hạ, hoa cúc tuyết Tây Tạng, long nhãn Hưng Yên, dâu tằm và đẳng sâm.',
    ingredients: 'Táo đỏ, Kỷ tử, Hoa cúc hoàng gia, Long nhãn, Nụ hoa hồng Ba Tư, Đẳng sâm, Cỏ ngọt hữu cơ.',
    usage: 'Hãm 1 gói trà với 300ml nước sôi 90°C trong 5-10 phút. Có thể châm thêm nước 2-3 lần trong ngày uống thanh nhiệt dưỡng nhan.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Chị Nguyễn Mai Lan',
    role: 'Trưởng phòng Marketing tại Techcombank',
    age: 32,
    serviceUsed: 'Trị Liệu Cổ Vai Gáy Chuyên Sâu',
    avatarText: 'ML',
    content: 'Mình ngồi máy tính 10-12 tiếng mỗi ngày, vai gáy cứng như đá và hay bị buốt lên tận đỉnh đầu. Sau buổi trị liệu 75 phút tại An An với túi chườm ngải cứu ấm nóng, các cơ như được tháo gỡ hoàn toàn. Kỹ thuật viên ấn trúng từng điểm đau mà không hề bị bầm tím.',
    stars: 5,
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Bác Hoàng Minh Đức',
    role: 'Giáo viên THPT đã nghỉ hưu',
    age: 62,
    serviceUsed: 'Gội Đầu Dưỡng Sinh & Ngâm Chân Bấm Huyệt',
    avatarText: 'MĐ',
    content: 'Tôi bị mất ngủ thâm niên nhiều năm, đêm ngủ chỉ được 2-3 tiếng chập chờn. Được con gái tặng gói ngâm chân thảo dược và gội đầu canh thuốc tại An An, tối về ngủ một mạch đến 6 giờ sáng. Không gian yên ả, thơm ngát mùi cỏ cây làm lòng người rất đỗi nhẹ nhõm.',
    stars: 5,
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Chị Lê Thanh Trúc',
    role: 'Freelance UI/UX Designer',
    age: 27,
    serviceUsed: 'Gội Đầu Thảo Dược & Chăm Sóc Da Mặt Ngọc Thạch',
    avatarText: 'TT',
    content: 'Tóc mình rụng nhiều sau đợt stress dự án. Nước gội ở đây thơm mùi bồ kết và vỏ bưởi chuẩn ngày xưa mẹ nấu. Tóc gội xong mềm mượt tơi xốp tự nhiên chứ không bết dính. Mình đã mua thêm chai dầu gội bồ kết 500ml về dùng ở nhà, rất ưng ý!',
    stars: 5,
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Anh Phạm Quốc Hưng',
    role: 'Giám đốc Điều hành Công ty XNK',
    age: 41,
    serviceUsed: 'Liệu Trình Toàn Thân Thảo Dược',
    avatarText: 'QH',
    content: 'Thường xuyên đi công tác máy bay nên xương khớp và cột sống rất mệt. Dịch vụ ở An An chuyên nghiệp từ cách đón tiếp, chén trà ấm đầu giờ cho đến tay nghề kỹ thuật viên chuẩn đông y. Đáng giá từng đồng và chắc chắn sẽ là địa chỉ ruột cuối tuần của tôi.',
    stars: 5,
    verified: true
  }
];

export const BRANCHES = [
  {
    id: 'branch-1',
    name: 'Cơ sở 1 - Trung Tâm Quận 1, TP.HCM',
    address: 'Số 68 Đường Nguyễn Du, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    phone: '0901.234.567',
    hours: '08:30 - 21:30 (Mở cửa tất cả các ngày trong tuần)'
  },
  {
    id: 'branch-2',
    name: 'Cơ sở 2 - Phú Nhuận, TP.HCM',
    address: 'Số 123 Đường Hoa Lan, Phường 2, Quận Phú Nhuận, TP. Hồ Chí Minh',
    phone: '0988.765.432',
    hours: '08:30 - 21:30 (Mở cửa tất cả các ngày trong tuần)'
  },
  {
    id: 'branch-3',
    name: 'Cơ sở 3 - Ba Đình, Hà Nội',
    address: 'Số 45 Phố Quán Thánh, Phường Quán Thánh, Quận Ba Đình, Hà Nội',
    phone: '0912.889.922',
    hours: '09:00 - 21:00 (Mở cửa tất cả các ngày trong tuần)'
  }
];
