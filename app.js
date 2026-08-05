// Hala Camp - High-Performance Interactive Script
// Standard ES5/ES6 vanilla JS designed to run out-of-the-box locally without CORS or module errors.

// Multi-lingual dictionary for gallery captions & lightboxes
const localGalleryCaptions = {
  ru: [
    {
      title: 'Наш премиальный глэмпинг у океана',
      desc: 'Прекрасный вид на океан и вулкан с территории Хала Кэмп.'
    },
    {
      title: 'Интерьер домика Хала-1',
      desc: 'Сочетание уюта, тепла и современного скандинавского дизайна.'
    },
    {
      title: 'Баня Хала Пар у Тихого океана',
      desc: 'Незабываемый панорамный пар и расслабление на побережье.'
    },
    {
      title: 'Серфинг на Камчатке',
      desc: 'Профессиональные гидрокостюмы и обучение серфингу на волнах океана.'
    },
    {
      title: 'Тихий океан и черный песок',
      desc: 'Удивительная магия Халактырского пляжа прямо у вашего порога.'
    },
    {
      title: 'Вид на камчатские вулканы',
      desc: 'Снежные вершины величественных исполинов, открывающиеся из кэмпа.'
    }
  ],
  en: [
    {
      title: 'Our Premium Ocean Glamping',
      desc: 'Scenic views of the ocean and the volcano from the territory of Hala Camp.'
    },
    {
      title: 'Interior of Hala-1 Lodge',
      desc: 'A fusion of warmth, coziness, and modern Scandinavian design.'
    },
    {
      title: 'Hala Par Bathhouse by the Pacific Ocean',
      desc: 'Unforgettable panoramic steam sessions and relaxation on the coastline.'
    },
    {
      title: 'Surfing in Kamchatka',
      desc: 'Professional wetsuits and surfing lessons directly on the ocean waves.'
    },
    {
      title: 'Pacific Ocean and Black Sand',
      desc: 'The sheer magic of the volcanic sands of Khalaktyrsky beach right at your feet.'
    },
    {
      title: 'View of Kamchatka Volcanoes',
      desc: 'Snowy peaks of majestic volcanic giants visible straight from the camp.'
    }
  ],
  zh: [
    {
      title: '太平洋畔的奢华野奢营地',
      desc: '从哈拉营地放眼望去，火山与海洋相互辉映的迷人风景。'
    },
    {
      title: 'Hala-1 别墅内景',
      desc: '融合北欧极简美学、温暖木质感与高级感的现代室内设计。'
    },
    {
      title: '太平洋畔的 Hala Par 桑拿蒸汽房',
      desc: '在海风拍岸的黑沙滩上，享受独一无二的火山全景蒸汽疗愈。'
    },
    {
      title: '堪察加半岛冲浪体验',
      desc: '提供专业保暖防寒湿衣与定制级冲浪教学，带您征服太平洋海浪。'
    },
    {
      title: '黑沙滩与狂野太平洋',
      desc: '火山黑沙与狂烈海潮在脚下交织，感受大自然最原始的神奇魔力。'
    },
    {
      title: '堪察加群山火山绝景',
      desc: '在营地中即可远眺白雪皑皑的雄伟活火山，让人心旷神怡。'
    }
  ]
};

const galleryData = [
  { url: '/images-web/hero/111%20IMG_0398.JPG' },
  { url: '/images-web/hala1/hala1%20-%20111.jpg' },
  { url: '/images-web/bath/Hala%20Par%20(1).jpg' },
  { url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
  { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' }
];

// Global gallery index
var currentImageIdx = 0;

// Global dynamic dictionary for RU, EN, ZH translation
const dictionary = {
  en: {
    // Nav links
    'nav-stay': 'ACCOMMODATION',
    'nav-bath': 'BATHHOUSE',
    'nav-surfing': 'SURFING',
    'nav-gallery': 'GALLERY',
    'nav-faq': 'FAQ',
    'nav-contact': 'CONTACTS',
    'cta-booking': 'BOOK NOW',
    'drawer-lang-label': 'Language / Language',
    'footer-lang-label': 'Language / Language',

    // Hero
    'hero-badge': 'Premium Camping by the Pacific Ocean',
    'hero-title': 'Hala Camp — Premium Glamping in Kamchatka',
    'hero-desc': 'Immerse yourself in the wild nature of Kamchatka on Khalaktyrsky Beach. Cozy cabins, a soothing traditional bathhouse right by the water, surfing, and the unforgettable rumble of the Pacific tide.',
    'hero-cta-stay': 'Select Cabin',
    'hero-cta-wa': 'WhatsApp Consultation',
    'hero-scroll-indicator': 'Scroll down',

    // About
    'about-badge': 'Our Place of Power',
    'about-title': 'Where the Russian Dawn is Born',
    'about-desc-1': 'Khalaktyrsky Beach is famous for its unique coal-black volcanic sand. This is where the great Pacific Ocean meets the rocky cliffs of Kamchatka with a powerful roar.',
    'about-desc-2': 'At Hala Camp, we have recreated the premium comfort of a luxury hotel in the heart of this untamed, pure natural element. Wake up to the sounds of seagulls, contemplate volcanic peaks over a cup of hot coffee, and feel complete unity with the universe.',
    'about-stat-1-title': '100%',
    'about-stat-1-desc': 'Eco-friendly materials',
    'about-stat-2-title': '50 m',
    'about-stat-2-desc': 'Distance to the waves',
    'about-stat-3-title': '24/7',
    'about-stat-3-desc': 'Host & Starlink Wi-Fi',
    'about-img-tag-1': 'Scandinavian Minimalism',
    'about-img-tag-2': 'Pacific Ocean',
    'about-img-tag-3': 'Hala Par Bath',
    'about-img-tag-4': 'Hot Steam by the Water',

    // Service items
    'services-badge': 'Flawless Service',
    'services-title': 'Everything for Your Ultimate Comfort',
    'service-1-title': 'Starlink Wi-Fi',
    'service-1-desc': 'Always connected at the edge of the world',
    'service-2-title': 'Own Kitchen',
    'service-2-desc': 'Stove, utensils, and full-size fridge',
    'service-3-title': 'Hot Shower',
    'service-3-desc': 'Private bathroom in every cabin',
    'service-4-title': 'Firepit Area',
    'service-4-desc': 'Cosy fire bowls right by your terrace',
    'service-5-title': 'Volcano View',
    'service-5-desc': 'Panoramic terraces facing the giants',
    'service-6-title': 'All Amenities',
    'service-6-desc': 'Linens, soft towels, and bio-cosmetics',

    // Accommodations
    'stay-badge': 'Where to stay',
    'stay-title': 'Choose Your Perfect Lodge by the Ocean',
    'stay-desc': 'We have designed diverse accommodation formats that combine close proximity to the roaring Pacific Ocean with the cozy refinement of a luxury wilderness hotel.',
    'stay-equip-label': 'Lodge Amenities:',
    'stay-1-badge': 'POPULAR',
    'stay-2-badge': 'NEW',
    'stay-3-badge': 'NATURE CLOSE',
    'stay-4-badge': 'FREEDOM SPIRIT',
    'stay-equip-guests': '2+2 guests',
    'stay-equip-guests-2': '2 guests',
    'stay-equip-kitchen': 'Equipped kitchen',
    'stay-equip-shower': 'Shower cabin',
    'stay-equip-bed': 'Orthopedic mattress',
    'stay-equip-minibar': 'Minibar included',
    'stay-equip-terrace': 'Private terrace',
    'stay-equip-fire': 'Cozy fire pit',
    'stay-equip-guests-glamp': '2-3 guests',
    'stay-equip-heated': 'Heated thermal bed',
    'stay-equip-decor': 'Chenille decor elements',
    'stay-equip-common': 'Shared kitchen area',
    'stay-equip-compact-kitchen': 'Compact kitchenette',
    'stay-equip-integrated-shower': 'Integrated RV shower',
    'stay-equip-autonomous': 'Autonomous heating',

    'stay-1-title': 'Hala-1 (Premium Lodge)',
    'stay-1-desc': 'A spacious, designer cabin featuring vast panoramic glazing and an outdoor terrace. Ideal for luxurious relaxation right in front of the incoming waves.',
    'stay-1-price': 'from 18,000 ₽ / night',
    'stay-1-btn': 'Book This Lodge',

    'stay-2-title': 'Hala-2 (Romantic Lodge)',
    'stay-2-desc': 'A cozy wooden cabin designed with warm interior accents made of natural cedarwood. Perfectly tailored for couples who prioritize absolute peace, privacy, and aesthetics.',
    'stay-2-price': 'from 16,000 ₽ / night',
    'stay-2-btn': 'Book This Lodge',

    'stay-3-title': 'Hala Glamp (Dome)',
    'stay-3-desc': 'A stylish geodesic dome that captures the wild romance of camping with premium hotel amenities. Built with heated floors, warm lighting, and plush bedding.',
    'stay-3-price': 'from 12,000 ₽ / night',
    'stay-3-btn': 'Book This Dome',

    'stay-4-title': 'Hala Camper (RV Car)',
    'stay-4-desc': 'An expedition-style format of lodging inside a fully-featured, high-class camper van. Positioned right on the crest of the black sandy dunes facing the waves.',
    'stay-4-price': 'from 10,000 ₽ / night',
    'stay-4-btn': 'Book This Camper',

    // Bathhouse
    'bath-badge': 'Spa at the End of the Earth',
    'bath-title': 'Hala Par Bathhouse: Rebirth by the Pacific Ocean',
    'bath-desc': 'Feel the restorative power of Siberian cedarwood, native Kamchatka herbs, and stark thermal contrasts. Our bathhouse is built directly by the shoreline to offer you a completely sensational experience.',
    'bath-item-1-title': 'Panoramic Steam Room',
    'bath-item-1-desc': 'A huge view window looking out directly at the foaming Pacific waves.',
    'bath-item-2-title': 'Healing Herbal Infusions',
    'bath-item-2-desc': 'Freshly prepared birch whisks, organic wild herbal teas with local berries and honey.',
    'bath-item-3-title': 'Contrast Ocean Dips',
    'bath-item-3-desc': 'Step straight out of the hot cedar steam room and plunge directly into the refreshing waters of the ocean.',
    'bath-btn': 'Book a Session',
    'bath-price-hint': 'From 4,000 ₽ / hour (minimum booking: 2 hours)',

    // Surfing
    'surf-badge': 'Ride the Wave',
    'surf-title': 'Surfing in Kamchatka: Energy of the Untamed Ocean',
    'surf-desc': 'Kamchatka is globally recognized as one of the most exotic and visually stunning cold-water surfing spots. Surfers from all over the world gather here to catch waves with a direct view of active snow-capped volcanoes!',
    'surf-item-1-title': 'Group Training',
    'surf-item-1-desc': 'Fun atmosphere, structured coaching, and learning with like-minded wave enthusiasts.',
    'surf-item-1-price': '6,000 ₽ / session',
    'surf-item-2-title': 'Private Lesson',
    'surf-item-2-desc': '100% individual attention from your instructor tailored perfectly to your learning pace.',
    'surf-item-2-price': '12,000 ₽ / session',
    'surf-btn': 'Book a Lesson',
    'surf-hint': 'All equipment (thick wetsuits, boards) and a high-res photo report are included.',

    // Gallery
    'gallery-badge': 'Visual Journey',
    'gallery-title': 'The Atmosphere of Hala Camp',
    'gallery-desc': 'Take a look at captured moments of life in our camp. Click any photo to inspect details.',

    // FAQ
    'faq-badge': 'Answering Questions',
    'faq-title': 'Frequently Asked Questions',
    'faq-q1': 'Where is Hala Camp located?',
    'faq-a1': 'Hala Camp is located on Khalaktyrsky Beach in Kamchatka, directly adjacent to the shore of the Pacific Ocean. It offers panoramic views of the water and the nearby volcanoes.',
    'faq-q2': 'What accommodation options are available?',
    'faq-a2': 'We offer four main accommodation types: Hala-1 (Premium Lodge), Hala-2 (Romantic Lodge), Hala Glamp (Geodesic Domes), and Hala Camper (a fully autonomous, comfortable RV right by the water).',
    'faq-q3': 'Is there a bathhouse by the ocean?',
    'faq-a3': 'Yes! Our signature cedar bathhouse Hala Par is built directly on the shoreline. We offer private bookings with herbal steaming, local wild berry teas, and direct ocean access for cold-plunging.',
    'faq-q4': 'Can I try surfing?',
    'faq-a4': 'Absolutely! Khalaktyrsky Beach is a legendary surf destination. You can book group or private surfing lessons directly at the camp. We provide certified coaches and all warm gear.',
    'faq-q5': 'How do I book my stay?',
    'faq-a5': 'You can submit an inquiry through our interactive website form, send us a direct message on WhatsApp (+7 963 832-34-56), or call any of our listed phone numbers.',
    'faq-q6': 'What are the check-in and check-out times?',
    'faq-a6': 'Standard check-in starts at 14:00 (2 PM), and check-out is by 12:00 (noon). If available, we are always happy to offer flexible early check-ins or late check-outs.',

    // Booking Form
    'book-badge': 'Reservation Inquiry',
    'book-title': 'Book Your Ocean Escape',
    'book-desc': 'Fill out this brief form, and our administrator will contact you within 15 minutes to confirm date availability and discuss all details.',
    'book-label-in': 'Check-In Date',
    'book-label-out': 'Check-Out Date',
    'book-label-guests': 'Number of Guests',
    'book-label-stay': 'Accommodation Type',
    'book-label-name': 'Your Name',
    'book-label-phone': 'Phone Number',
    'book-label-method': 'Preferred Contact Channel',
    'book-submit': 'Submit Booking Request',
    'book-legal-note': 'By submitting, you consent to the processing of your personal data and agree with our user agreement.',

    // Contacts
    'contact-badge': 'Our Location',
    'contact-title': 'We await you on Khalaktyrsky Beach',
    'contact-label-address': 'Camp Address:',
    'contact-val-address': 'Kamchatka Krai, Elizovsky District, Khalaktyrsky Beach, coastline of the Pacific Ocean.',
    'contact-label-phones': 'Reservation Phones:',
    'contact-label-hours': 'Working Hours:',
    'contact-val-hours': 'Check-in from 14:00 | Check-out by 12:00. Call center works daily from 09:00 to 21:00 Kamchatka time (+9 hours ahead of Moscow).',
    'contact-map-caption': 'We are located directly on the coastline. The drive from Petropavlovsk-Kamchatsky takes about 30 to 40 minutes on an AWD / SUV vehicle.',
    'contact-map-btn': 'Open in Yandex Maps',

    // Footer
    'footer-brand-desc': 'Premium glamping on the shores of the Pacific Ocean in Kamchatka. Experience the untamed power of nature without compromising on luxury hotel comfort.',
    'footer-nav-title': 'Navigation',
    'footer-social-title': 'Find us online',
    'footer-copyright': '© 2026 Hala Camp. All rights reserved. Website development.',
    'footer-bottom-motto': 'Kamchatka — at the edge of the Pacific Ocean',
    'footer-policy-link': 'Privacy Policy',
    'footer-agreement-link': 'User Agreement',
    'footer-volunteer': '⚡ Volunteer Program',

    // Modals Header
    'policy-modal-title': 'Personal Data Processing Policy',
    'policy-modal-close': 'Understood, Close',
    'agreement-modal-title': 'User Agreement',
    'agreement-modal-close': 'Accept Terms',
    'volunteer-modal-title': 'Volunteer Program 2026',
    'volunteer-modal-desc-1': 'Dreaming of living directly on the black sands of the Pacific Ocean, helping host an eco-glamping, and surfing daily?',
    'volunteer-modal-desc-2': 'Applications for our summer season will open soon. We seek creative hosts, handymen, media creators, and ocean lovers. Simply leave an inquiry in our form with "Volunteer" in your name, and we will contact you!',
    'volunteer-modal-close': 'I want to volunteer!',

    // Success Modal
    'success-modal-title': 'Inquiry Received!',
    'success-modal-desc': 'Thank you, guest! We have successfully received your booking inquiry for the chosen dates.',
    'success-modal-sub': 'Our manager will contact you in WhatsApp within 15 minutes to confirm details.',
    'success-modal-close': 'Perfect, waiting for details!'
  },
  zh: {
    // Nav links
    'nav-stay': '客房住宿',
    'nav-bath': '极光桑拿房',
    'nav-surfing': '野性冲浪',
    'nav-gallery': '营地画廊',
    'nav-faq': '常见问题',
    'nav-contact': '联系我们',
    'cta-booking': '立即预订',
    'drawer-lang-label': '选择语言 / Language',
    'footer-lang-label': '选择语言 / Language',

    // Hero
    'hero-badge': '太平洋畔的野奢臻选之作',
    'hero-title': '哈拉营地 — 堪察加半岛殿堂级野奢营地',
    'hero-desc': '在堪察加哈拉科特斯基黑沙滩，开启一段洗涤心灵的狂野之旅。精致温暖的木屋别墅、紧邻涛声的传统桑拿蒸汽房、劈波斩浪的冲浪课程，以及太平洋潮汐那不知疲倦的宏伟轰鸣。',
    'hero-cta-stay': '选择您的客房',
    'hero-cta-wa': 'WhatsApp 咨询通道',
    'hero-scroll-indicator': '向下滑动探索',

    // About
    'about-badge': '属于您的“大自然能量场”',
    'about-title': '在俄罗斯第一缕曙光诞生的地方',
    'about-desc-1': '哈拉科特斯基海滩以其独特的火山煤黑沙滩而享誉全球。狂暴的太平洋海潮，携着万钧之势，在这里与堪察加险峻高耸的悬崖峭壁轰然相撞。',
    'about-desc-2': '在哈拉营地 (Hala Camp)，我们在这片远离尘嚣、纯净原始的自然神迹中央，为您复刻了五星级奢华酒店的舒适体验。您可以伴着海鸥的鸣叫醒来，在手捧热咖啡的同时静静凝望远方火山的袅袅青烟，感受与宇宙万物的完美共鸣。',
    'about-stat-1-title': '100%',
    'about-stat-1-desc': '纯生态环保木质材料',
    'about-stat-2-title': '50 米',
    'about-stat-2-desc': '客房离海浪的距离',
    'about-stat-3-title': '24/7',
    'about-stat-3-desc': '专职管家 & Starlink 卫星网络',
    'about-img-tag-1': '北欧极简美学',
    'about-img-tag-2': '壮阔太平洋',
    'about-img-tag-3': 'Hala Par 传统水疗蒸房',
    'about-img-tag-4': '水畔极致桑拿体验',

    // Service items
    'services-badge': '无微不至的专属管家服务',
    'services-title': '为您量身打造的极致生活体验',
    'service-1-title': 'Starlink 卫星网络',
    'service-1-desc': '在世界的尽头，依然与外界保持高速连接',
    'service-2-title': '全独立厨房',
    'service-2-desc': '配备炉灶、全套精致餐具与大容量冰箱',
    'service-3-title': '恒温热水淋浴',
    'service-3-desc': '每间客房均配备高规格的独立卫浴系统',
    'service-4-title': '私享篝火晚会区',
    'service-4-desc': '在您的露台旁，点燃专属的艺术设计火盆',
    'service-5-title': '壮美火山景观',
    'service-5-desc': '配备全景宽敞露台，推窗即可远眺火山奇观',
    'service-6-title': '五星级洗沐床品',
    'service-6-desc': '提供顶级有机洗沐备品、舒适软巾与奢华床品',

    // Accommodations
    'stay-badge': '尊享住宿选择',
    'stay-title': '为您寻找在世界尽头的温暖居所',
    'stay-desc': '我们倾心设计了多种不同维度的特色住宿空间，将太平洋的狂野与五星级全景奢华木屋的精致温暖完美相融。',
    'stay-equip-label': '客房高端配置：',
    'stay-1-badge': '人气推荐',
    'stay-2-badge': '新品力推',
    'stay-3-badge': '亲近自然',
    'stay-4-badge': '自由之魂',
    'stay-equip-guests': '可容纳 2-4 位贵宾',
    'stay-equip-guests-2': '可容纳 2 位贵宾',
    'stay-equip-kitchen': '配备齐全的独立厨房',
    'stay-equip-shower': '独立全景淋浴间',
    'stay-equip-bed': '高端定制护脊床垫',
    'stay-equip-minibar': '免费奢华迷你吧',
    'stay-equip-terrace': '私人全景观景平台',
    'stay-equip-fire': '专属户外篝火炉台',
    'stay-equip-guests-glamp': '可容纳 2-3 位贵宾',
    'stay-equip-heated': '全域恒温地暖加热',
    'stay-equip-decor': '高档雪尼尔艺术软装',
    'stay-equip-common': '共享多功能厨房区域',
    'stay-equip-compact-kitchen': '集成式精细化小厨房',
    'stay-equip-integrated-shower': '车载集成式豪华卫浴',
    'stay-equip-autonomous': '全自动智能取暖系统',

    'stay-1-title': 'Hala-1 (臻享全景别墅)',
    'stay-1-desc': '极为宽敞的设计师概念别墅，配备巨大的双层防寒落地大窗与专属露台。极力推荐给渴望躺在床上饱览海浪波澜的贵宾。',
    'stay-1-price': '18,000 ₽ / 晚 起',
    'stay-1-btn': '立即预订此别墅',

    'stay-2-title': 'Hala-2 (浪漫蜜月别墅)',
    'stay-2-desc': '采用堪察加当地天然红松木打造的温暖树屋，散发着迷人的木香。是追求极致宁静、隐私与自然美学情侣的不二之选。',
    'stay-2-price': '16,000 ₽ / 晚 起',
    'stay-2-btn': '立即预订此别墅',

    'stay-3-title': '哈拉星空球幕 (星空顶球幕帐篷)',
    'stay-3-desc': '兼具户外露营浪漫感与奢华酒店舒适度的地极半球帐篷。配备防潮恒温系统、柔软的大床以及绝佳的观星视野。',
    'stay-3-price': '12,000 ₽ / 晚 起',
    'stay-3-btn': '立即预订星空顶',

    'stay-4-title': '哈拉豪华越野房车 (自由之魂)',
    'stay-4-desc': '专为高端探索者打造的野外探险家四驱房车宿营体验。稳稳停驻于沙丘顶峰，让您伴着最纯粹的涛声安然入眠。',
    'stay-4-price': '10,000 ₽ / 晚 起',
    'stay-4-btn': '立即预订房车',

    // Bathhouse
    'bath-badge': '海边水疗会所',
    'bath-title': 'Hala Par 传统桑拿蒸汽房：在海与火之间重塑自我',
    'bath-desc': '源自西伯利亚雪松的理疗馨香，融合堪察加野生香草与巨大的冷热交替温差。我们的桑拿浴房就在海浪拍打的岸边，带给您焕发新生的沉浸体验。',
    'bath-item-1-title': '巨幅全景单向透视蒸汽房',
    'bath-item-1-desc': '宽阔明亮的观景窗，让您在享受热蒸汽时直面汹涌澎湃的太平洋潮水。',
    'bath-item-2-title': '大自然草药精油疗愈',
    'bath-item-2-desc': '新鲜现采白桦枝拂扫，搭配堪察加野生莓果和火山蜂蜜特调的香草热茶。',
    'bath-item-3-title': '冷热交替极速冰疗',
    'bath-item-3-desc': '在暖融融的桑拿房中大汗淋漓之后，直接冲入清冽凉爽的太平洋海水中洗涤疲惫。',
    'bath-btn': '预订私人水疗会餐',
    'bath-price-hint': '每小时 4,000 ₽ 起 (2小时起订)',

    // Surfing
    'surf-badge': '与风浪共舞',
    'surf-title': '堪察加冲浪运动：驾驭狂野大洋的纯粹原力',
    'surf-desc': '堪察加半岛是全球公认最酷、最迷人的冷水冲浪殿堂之一。每年吸引无数探险家前来挑战，在皑皑白雪火山的背景下，御风破浪！',
    'surf-item-1-title': '精品团组课',
    'surf-item-1-desc': '超燃的团队氛围，系统化安全指导，与志同道合的弄潮儿一起感受浪尖快感。',
    'surf-item-1-price': '6,000 ₽ / 课时',
    'surf-item-2-title': '一对一私教课',
    'surf-item-2-desc': '专业教练全程保驾护航，根据您的基础和体能，量身定制黄金进阶教学。',
    'surf-item-2-price': '12,000 ₽ / 课时',
    'surf-btn': '预约冲浪体验课',
    'surf-hint': '费用包含全部专业保暖湿衣、高档冲浪板及专业摄影师跟拍记录。',

    // Gallery
    'gallery-badge': '视觉画卷',
    'gallery-title': '哈拉营地的日常美学',
    'gallery-desc': '每一帧都是大自然的杰作。点击任意图片即可展开高保真画卷。',

    // FAQ
    'faq-badge': '为您答疑解惑',
    'faq-title': '常见问题解答 (FAQ)',
    'faq-q1': '哈拉营地具体位于哪里？交通方便吗？',
    'faq-a1': '营地坐落于堪察加半岛著名的哈拉科特斯基黑沙滩（Khalaktyrsky Beach）畔，直面辽阔的太平洋。从彼得罗巴甫洛夫斯克市中心出发，驾车约需 30-40 分钟。建议使用四驱越野车前往。',
    'faq-q2': '营地内部提供哪些房型？',
    'faq-a2': '我们提供四种高端宿营体验：Hala-1 (双层全景轻奢别墅)、Hala-2 (温暖红松浪漫别墅)、Hala Glamp (地极星空球幕) 以及停驻在海滩之脊的 Hala Camper 越野越野房车。',
    'faq-q3': '海边真的有桑拿浴房吗？怎么收费？',
    'faq-a3': '是的！我们的海边木质蒸汽浴房 Hala Par 堪称营地招牌。您可以提前预订私人独享场次，我们为您精心备好当地高山香草茶、蜂蜜和专业扫枝服务，价格为 4,000 卢布/小时。',
    'faq-q4': '完全没有冲浪经验的初学者可以报名吗？',
    'faq-a4': '绝对可以！我们的教练团队全部持有 ISA 国际认证资质，拥有丰富的零基础教学经验。我们会提供极厚保暖湿衣，确保您即使在冰凉的太平洋海水中依然舒适自如。',
    'faq-q5': '如何支付和锁定订房日期？',
    'faq-a5': '您可以通过我们网站上的预订系统填写您的出行意向，或者直接在 WhatsApp (+7 963 832-34-56) 上与客服沟通。我们支持通过转账或主流信用卡预留档期。',
    'faq-q6': '营地的日常入住和退房时间是？',
    'faq-a6': '我们的标准入住时间为下午 14:00 以后，退房时间为中午 12:00 以前。如有需要且房间空置，我们会免费帮您安排提早入住或延迟退房。',

    // Booking Form
    'book-badge': '快速预订意向表',
    'book-title': '开启您的海畔避世之旅',
    'book-desc': '填写下方意向单，我们的私人管家将在 15 分钟内为您核对档期、确认细节，确保您的行程完美无瑕。',
    'book-label-in': '计划入住日期',
    'book-label-out': '计划退房日期',
    'book-label-guests': '出行贵宾人数',
    'book-label-stay': '心仪住宿房型',
    'book-label-name': '您的称呼 (拼音或英文)',
    'book-label-phone': '联系电话 (手机号)',
    'book-label-method': '首选沟通渠道',
    'book-submit': '立即提交预订申请',
    'book-legal-note': '点击提交即代表您同意本站的《个人数据处理政策》与《用户协议》。',

    // Contacts
    'contact-badge': '地理位置与联系',
    'contact-title': '我们在火山与海洋的交汇处等您',
    'contact-label-address': '营地地址：',
    'contact-val-address': '堪察加半岛，叶利佐沃区，哈拉科特斯基海滩，太平洋海岸线。',
    'contact-label-phones': '预订专线 (俄语及英语)：',
    'contact-label-hours': '营业与接待时间：',
    'contact-val-hours': '入住时间: 14:00后 | 退房时间: 12:00前。客服中心每日 09:00 - 21:00（堪察加当地时间，比北京时间早 4 个小时）在线答疑。',
    'contact-map-caption': '营地位于纯净无污染的沙丘海岸。从市区出发至此，伴随着沙石路面，驾越野SUV约30-40分钟即可直达营地门前。',
    'contact-map-btn': '在雅andex地图中打开',

    // Footer
    'footer-brand-desc': '位于堪察加太平洋沿岸的高端野奢度假营地。邀您在享受超五星酒店轻奢体验的同时，深度探索大自然最狂野、最纯粹的奇迹。',
    'footer-nav-title': '快速导航',
    'footer-social-title': '关注我们',
    'footer-copyright': '© 2026 Hala Camp. 保留所有权利。网站精致制作与排版优化。',
    'footer-bottom-motto': '堪察加 — 太平洋巨浪升起的地方',
    'footer-policy-link': '隐私与个人数据保护政策',
    'footer-agreement-link': '本站用户使用协议',
    'footer-volunteer': '⚡ 探索者志愿者招募计划',

    // Modals Header
    'policy-modal-title': '个人信息保护与数据处理政策',
    'policy-modal-close': '我已阅读并知悉',
    'agreement-modal-title': '用户注册与平台服务协议',
    'agreement-modal-close': '接受并同意此协议',
    'volunteer-modal-title': '2026 堪察加志愿者探索计划',
    'volunteer-modal-desc-1': '梦想着在黑沙滩旁、太平洋畔安家，协助营地日常运营、结识全球旅行家并享受每天无限次的冲浪吗？',
    'volunteer-modal-desc-2': '我们即将开启今年夏季的志愿者招募！如果您擅长多语种前台接待、新媒体摄影、营地维护或是一位天生的海洋达人，请在上方预订表单的“您的称呼”中备注 “- 申请志愿者”，我们将优先与您取得联系！',
    'volunteer-modal-close': '我想报名加入志愿者！',

    // Success Modal
    'success-modal-title': '预订申请提交成功！',
    'success-modal-desc': '亲爱的贵宾！我们已成功收到您在所选日期的度假别墅预订意向单。',
    'success-modal-sub': '营地私人管家将在 15 分钟内通过 WhatsApp 与您取得联系，核对预订细节与服务需求。',
    'success-modal-close': '非常棒，静候来电！'
  },
  ru: {
    // Nav links
    'nav-stay': 'РАЗМЕЩЕНИЕ',
    'nav-bath': 'БАНЯ ХАЛА ПАР',
    'nav-surfing': 'СЕРФИНГ',
    'nav-gallery': 'ГАЛЕРЕЯ',
    'nav-faq': 'ВОПРОСЫ',
    'nav-contact': 'КОНТАКТЫ',
    'cta-booking': 'Забронировать',
    'drawer-lang-label': 'Язык / Language',
    'footer-lang-label': 'Язык сайта / Site Language',

    // Hero
    'hero-badge': 'Премиум отдых у Тихого океана',
    'hero-title': 'Хала Кэмп — премиальный глэмпинг на Камчатке',
    'hero-desc': 'Погрузитесь в дикую природу Камчатки на Халактырском пляже. Уютные домики, расслабляющая баня у самой воды, занятия серфингом и незабываемый шум океанского прибоя.',
    'hero-cta-stay': 'Выбрать домик',
    'hero-cta-wa': 'WhatsApp консультация',
    'hero-scroll-indicator': 'Листайте вниз',

    // About
    'about-badge': 'О нашем месте силы',
    'about-title': 'Там, где рождается рассвет России',
    'about-desc-1': 'Халактырский пляж славится своим уникальным вулканическим песком угольно-черного цвета. Это место, где великий Тихий океан с могучим шумом встречается со скалистыми берегами Камчатки.',
    'about-desc-2': 'В глэмпинге «Хала Кэмп» мы создали комфорт премиального отеля посреди этой нетронутой цивилизацией стихии. Здесь вы можете просыпаться под крики чаек, созерцать дымящиеся вершины вулканов за чашкой ароматного кофе и чувствовать абсолютное единение со Вселенной.',
    'about-stat-1-title': '100%',
    'about-stat-1-desc': 'Экологичность материалов',
    'about-stat-2-title': '50 м',
    'about-stat-2-desc': 'Расстояние до океана',
    'about-stat-3-title': '24/7',
    'about-stat-3-desc': 'Администратор и Wi-Fi',
    'about-img-tag-1': 'Скандинавский минимализм',
    'about-img-tag-2': 'Тихий Океан',
    'about-img-tag-3': 'Баня Хала Пар',
    'about-img-tag-4': 'Горячий пар у океана',

    // Service items
    'services-badge': 'Безупречный сервис',
    'services-title': 'Всё для вашего комфорта',
    'service-1-title': 'Starlink Wi-Fi',
    'service-1-desc': 'Всегда на связи на краю земли',
    'service-2-title': 'Своя кухня',
    'service-2-desc': 'Плита, посуда и холодильник',
    'service-3-title': 'Горячий душ',
    'service-3-desc': 'Индивидуальный санузел',
    'service-4-title': 'Мангал-зона',
    'service-4-desc': 'Костровые чаши у домиков',
    'service-5-title': 'Вид на вулканы',
    'service-5-desc': 'Панорамные террасы',
    'service-6-title': 'Все удобства',
    'service-6-desc': 'Косметика, полотенца, белье',

    // Accommodations
    'stay-badge': 'Варианты проживания',
    'stay-title': 'Выберите ваш идеальный лодж у океана',
    'stay-desc': 'Мы разработали разнообразные форматы размещения, сочетающие близость к первозданной стихии Тихого океана и уют премиального загородного отеля.',
    'stay-equip-label': 'Оснащение лоджа:',
    'stay-equip-guests': '2+2 гостя',
    'stay-equip-guests-2': '2 гостя',
    'stay-equip-kitchen': 'Кухня с техникой',
    'stay-equip-shower': 'Душевая кабина',
    'stay-equip-bed': 'Ортопедический матрас',
    'stay-equip-minibar': 'Мини-бар',
    'stay-equip-terrace': 'Собственная терраса',
    'stay-equip-fire': 'Зона для костра',
    'stay-equip-guests-glamp': '2-3 гостя',
    'stay-equip-heated': 'Подогреваемая кровать',
    'stay-equip-decor': 'Шенилл-декор',
    'stay-equip-common': 'Общая зона кухни',
    'stay-equip-compact-kitchen': 'Компактная кухня',
    'stay-equip-integrated-shower': 'Интегрированный душ',
    'stay-equip-autonomous': 'Автономное тепло',

    'stay-1-badge': 'Популярно',
    'stay-1-title': 'Хала-1 (Премиум лодж)',
    'stay-1-desc': 'Просторный и дизайнерский домик с панорамным остеклением и террасой. Идеален для комфортного проживания с видом на набегающие волны.',
    'stay-1-price': 'от 18 000 ₽ / сутки',
    'stay-1-btn': 'Забронировать этот лодж',

    'stay-2-badge': 'Новинка',
    'stay-2-title': 'Хала-2 (Романтик лодж)',
    'stay-2-desc': 'Уютный деревянный домик с теплыми интерьерами из натурального кедра. Подходит парам, ценящим максимальную тишину, уединение и эстетику.',
    'stay-2-price': 'от 16 000 ₽ / сутки',
    'stay-2-btn': 'Забронировать этот лодж',

    'stay-3-badge': 'Природа близко',
    'stay-3-title': 'Хала Глэмп (Купол)',
    'stay-3-desc': 'Стильный геодезический купол, сохраняющий романтику походной жизни с премиальным отельным комфортом. Отапливаемый пол и мягкие постели.',
    'stay-3-price': 'от 12 000 ₽ / сутки',
    'stay-3-btn': 'Забронировать этот лодж',

    'stay-4-badge': 'Дух свободы',
    'stay-4-title': 'Хала Кемпер (Автодом)',
    'stay-4-desc': 'Уникальный экспедиционный формат проживания в оборудованном кемпере высокого класса. Стоит на самом гребне черного пляжа у воды.',
    'stay-4-price': 'от 10 000 ₽ / сутки',
    'stay-4-btn': 'Забронировать этот лодж',

    // Bathhouse
    'bath-badge': 'Спа на краю света',
    'bath-title': 'Баня Хала Пар: перерождение у Тихого океана',
    'bath-desc': 'Почувствуйте целительную силу сибирского кедра, ароматных трав Камчатки и контраста температур. Наша баня расположена прямо у набегающих волн океана, чтобы подарить вам абсолютно новые ощущения.',
    'bath-item-1-title': 'Панорамный пар',
    'bath-item-1-desc': 'Огромное окно с видом на прибой Тихого океана.',
    'bath-item-2-title': 'Целительное наполнение',
    'bath-item-2-desc': 'Натуральные веники, авторские чаи на камчатских ягодах, травах и меду.',
    'bath-item-3-title': 'Контрастное купание',
    'bath-item-3-desc': 'После жаркой парной вы можете напрямую окунуться в прохладный Тихий океан.',
    'bath-btn': 'Забронировать сеанс',
    'bath-price-hint': 'От 4 000 ₽ / час (минимальный заказ 2 часа)',

    // Surfing
    'surf-badge': 'Оседлай волну',
    'surf-title': 'Серфинг на Камчатке: энергия бушующего океана',
    'surf-desc': 'Камчатка — одно из самых экзотических и красивых мест для холодного серфинга в мире. Сюда съезжаются любители экстрима со всей планеты. Ловите волны с видом на заснеженные вулканы!',
    'surf-item-1-title': 'Групповой формат',
    'surf-item-1-desc': 'Веселая атмосфера, обучение в группе единомышленников.',
    'surf-item-1-price': '6 000 ₽ / занятие',
    'surf-item-2-title': 'Индивидуально',
    'surf-item-2-desc': 'Максимальное внимание тренера и подбор индивидуального темпа.',
    'surf-item-2-price': '12 000 ₽ / занятие',
    'surf-btn': 'Записаться на урок',
    'surf-hint': 'В стоимость входят гидрокостюм, серфборд и фотоотчет.',

    // Gallery
    'gallery-badge': 'Визуальное путешествие',
    'gallery-title': 'Атмосфера Хала Кэмп',
    'gallery-desc': 'Посмотрите на запечатленные мгновения жизни нашего кэмпа. Нажмите на любое фото, чтобы рассмотреть подробнее.',

    // FAQ
    'faq-badge': 'Отвечаем на вопросы',
    'faq-title': 'Часто задаваемые вопросы',
    'faq-q1': 'Где находится глэмпинг Хала Кэмп?',
    'faq-a1': 'Хала Кэмп находится на Халактырском пляже на Камчатке, в непосредственной близости от Тихого океана. Отсюда открываются панорамные виды на океан и домашнюю группу вулканов.',
    'faq-q2': 'Какие варианты размещения есть в Хала Кэмп?',
    'faq-a2': 'В Хала Кэмп доступны четыре формата проживания: Хала-1 (Премиум лодж), Хала-2 (Романтик лодж), Хала Глэмп (геодезические купола) и Хала Кемпер (полнофункциональный автодом на берегу).',
    'faq-q3': 'Есть ли баня у океана?',
    'faq-a3': 'Да! Наша уникальная баня Хала Пар расположена на самом берегу. Мы предлагаем индивидуальную аренду бани с аромапарением, чаем на камчатских травах и возможностью окунуться в прохладную воду океана.',
    'faq-q4': 'Можно ли заняться серфингом?',
    'faq-a4': 'Конечно! Халактырский пляж — легендарное место для серфинга. У нас можно заказать индивидуальные или групповые занятия по серфингом с сертифицированными инструкторами. Всё оборудование выдаётся на месте.',
    'faq-q5': 'Как забронировать отдых?',
    'faq-a5': 'Для бронирования вы можете оставить заявку через интерактивную форму на этом сайте, написать в WhatsApp по номеру +7 (963) 832-34-56 или позвонить по любому из контактных номеров телефона.',
    'faq-q6': 'Во сколько заезд и выезд?',
    'faq-a6': 'Стандартное время заезда в Хала Кэмп начинается с 14:00. Выезд осуществляется до 12:00. При наличии возможности мы всегда рады предложить ранний заезд или поздний выезд.',

    // Booking Form
    'book-badge': 'Заявка на бронирование',
    'book-title': 'Забронируйте отдых у океана',
    'book-desc': 'Заполните небольшую форму, и наш администратор свяжется с вами в течение 15 минут для подтверждения доступности дат и уточнения всех деталей.',
    'book-label-in': 'Дата заезда',
    'book-label-out': 'Дата выезда',
    'book-label-guests': 'Количество гостей',
    'book-label-stay': 'Вариант отдыха',
    'book-label-name': 'Ваше имя',
    'book-label-phone': 'Номер телефона',
    'book-label-method': 'Предпочтительный способ связи',
    'book-submit': 'Отправить запрос на бронирование',
    'book-legal-note': 'Нажимая кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с пользовательским соглашением.',

    // Contacts
    'contact-badge': 'Контакты',
    'contact-title': 'Ждем вас на Халактырском пляже',
    'contact-label-address': 'Адрес глэмпинга:',
    'contact-val-address': 'Камчатский край, Елизовский район, Халактырский пляж, побережье Тихого океана.',
    'contact-label-phones': 'Телефоны отдела бронирования:',
    'contact-label-hours': 'Режим работы:',
    'contact-val-hours': 'Заезд с 14:00 | Выезд до 12:00. Прием звонков администратором: с 09:00 до 21:00 по камчатскому времени (+9 к МСК).',
    'contact-map-caption': 'Мы находимся прямо на береговой линии. Дорога от Петропавловска-Камчатского занимает около 30-40 минут на полноприводном автомобиле.',
    'contact-map-btn': 'Открыть в Яндекс Картах',

    // Footer
    'footer-brand-desc': 'Премиальный глэмпинг на Камчатке у Тихого океана. Испытайте незабываемые ощущения дикой природы в абсолютном отельном комфорте.',
    'footer-nav-title': 'Навигация',
    'footer-social-title': 'Мы в сети',
    'footer-copyright': '© 2026 Хала Кэмп. Все права защищены. Разработка сайта.',
    'footer-bottom-motto': 'Камчатка — у края Тихого океана',
    'footer-policy-link': 'Политика конфиденциальности',
    'footer-agreement-link': 'Пользовательское соглашение',
    'footer-volunteer': '⚡ Волонтерская программа',

    // Modals Header
    'policy-modal-title': 'Политика обработки персональных данных',
    'policy-modal-close': 'Понятно, закрыть',
    'agreement-modal-title': 'Пользовательское соглашение',
    'agreement-modal-close': 'Принимаю условия',
    'volunteer-modal-title': 'Волонтерская программа 2026',
    'volunteer-modal-desc-1': 'Мечтаете пожить на берегу Тихого океана на Камчатке, помогать в развитии экологичного премиального глэмпинга и серфить каждый день?',
    'volunteer-modal-desc-2': 'Прием заявок на летний волонтерский сезон начнется совсем скоро. Мы ищем творческих администраторов, помощников по хозяйству, фотографов и любителей океана. Оставьте заявку в бронировании с пометкой в поле «Имя» (например, «Иван - Волонтер»), и мы свяжемся с вами в первую очередь!',
    'volunteer-modal-close': 'Хочу стать волонтером',

    // Success Modal
    'success-modal-title': 'Заявка принята!',
    'success-modal-desc': 'Спасибо, Guest! Мы получили ваш запрос на бронирование лоджа Hala-1 на выбранные вами даты.',
    'success-modal-sub': 'Наш администратор свяжется с вами в течение 15 минут в WhatsApp на указанный номер.',
    'success-modal-close': 'Отлично, жду звонка!'
  }
};

// Structured array describing loose translation targets
const elementsToTranslate = [
  // Desktop Nav Links
  { id: 'navbar', select: 'a[href="#stay"]', key: 'nav-stay' },
  { id: 'navbar', select: 'a[href="#bath"]', key: 'nav-bath' },
  { id: 'navbar', select: 'a[href="#surfing"]', key: 'nav-surfing' },
  { id: 'navbar', select: 'a[href="#gallery"]', key: 'nav-gallery' },
  { id: 'navbar', select: 'a[href="#faq"]', key: 'nav-faq' },
  { id: 'navbar', select: 'a[href="#contact"]', key: 'nav-contact' },
  { id: 'cta-booking-desktop', key: 'cta-booking' },

  // Mobile Drawer Nav Links
  { id: 'mobile-menu', select: 'a[href="#stay"]', key: 'nav-stay' },
  { id: 'mobile-menu', select: 'a[href="#bath"]', key: 'nav-bath' },
  { id: 'mobile-menu', select: 'a[href="#surfing"]', key: 'nav-surfing' },
  { id: 'mobile-menu', select: 'a[href="#gallery"]', key: 'nav-gallery' },
  { id: 'mobile-menu', select: 'a[href="#faq"]', key: 'nav-faq' },
  { id: 'mobile-menu', select: 'a[href="#contact"]', key: 'nav-contact' },
  { id: 'mobile-lang-label', key: 'drawer-lang-label' },
  { id: 'cta-booking-mobile', key: 'cta-booking' },

  // Hero
  { id: 'hero-badge', select: '.text-sand', key: 'hero-badge' },
  { id: 'hero-title', key: 'hero-title' },
  { id: 'hero-desc', key: 'hero-desc' },
  { id: 'hero-cta-stay', select: 'span', key: 'hero-cta-stay' },
  { id: 'hero-cta-wa', select: 'span', key: 'hero-cta-wa' },
  { id: 'hero-scroll-indicator', select: 'span', key: 'hero-scroll-indicator' },

  // About Section
  { id: 'about', select: 'span.text-ocean', key: 'about-badge' },
  { id: 'about', select: 'h2', key: 'about-title' },
  { id: 'about', select: 'p.text-sm:nth-of-type(1)', key: 'about-desc-1' },
  { id: 'about', select: 'p.text-sm:nth-of-type(2)', key: 'about-desc-2' },
  { id: 'about', select: 'h4.text-2xl:nth-of-type(1)', key: 'about-stat-1-title' },
  { id: 'about', select: 'div.flex-1:nth-of-type(1) p', key: 'about-stat-1-desc' },
  { id: 'about', select: 'div.flex-1:nth-of-type(2) h4', key: 'about-stat-2-title' },
  { id: 'about', select: 'div.flex-1:nth-of-type(2) p', key: 'about-stat-2-desc' },
  { id: 'about', select: 'div.flex-1:nth-of-type(3) h4', key: 'about-stat-3-title' },
  { id: 'about', select: 'div.flex-1:nth-of-type(3) p', key: 'about-stat-3-desc' },
  { id: 'about', select: '.rounded-2xl span', key: 'about-img-tag-1' },
  { id: 'about', select: 'h5.text-sand', key: 'about-img-tag-2' },
  { id: 'about', select: 'div.space-y-4:nth-child(2) h5', key: 'about-img-tag-3' },
  { id: 'about', select: 'div.space-y-4:nth-child(2) div.rounded-2xl:nth-child(2) span', key: 'about-img-tag-4' },

  // Services List
  { id: 'services-badge', key: 'services-badge' },
  { id: 'services-title', key: 'services-title' },
  { id: 'services-1-title', key: 'service-1-title' },
  { id: 'services-1-desc', key: 'service-1-desc' },
  { id: 'services-2-title', key: 'service-2-title' },
  { id: 'services-2-desc', key: 'service-2-desc' },
  { id: 'services-3-title', key: 'service-3-title' },
  { id: 'services-3-desc', key: 'service-3-desc' },
  { id: 'services-4-title', key: 'service-4-title' },
  { id: 'services-4-desc', key: 'service-4-desc' },
  { id: 'services-5-title', key: 'service-5-title' },
  { id: 'services-5-desc', key: 'service-5-desc' },
  { id: 'services-6-title', key: 'service-6-title' },
  { id: 'services-6-desc', key: 'service-6-desc' },

  // Accommodations
  { id: 'stay-badge', key: 'stay-badge' },
  { id: 'stay-title', key: 'stay-title' },
  { id: 'stay-desc', key: 'stay-desc' },
  { id: 'stay-equip-label-1', key: 'stay-equip-label' },
  { id: 'stay-equip-label-2', key: 'stay-equip-label' },
  { id: 'stay-equip-label-3', key: 'stay-equip-label' },
  { id: 'stay-equip-label-4', key: 'stay-equip-label' },

  // Stay Badges
  { id: 'stay-1-badge', key: 'stay-1-badge' },
  { id: 'stay-2-badge', key: 'stay-2-badge' },
  { id: 'stay-3-badge', key: 'stay-3-badge' },
  { id: 'stay-4-badge', key: 'stay-4-badge' },

  // Stay Cards Specs
  { id: 'stay-1-spec-1', key: 'stay-equip-guests' },
  { id: 'stay-1-spec-2', key: 'stay-equip-kitchen' },
  { id: 'stay-1-spec-3', key: 'stay-equip-shower' },
  { id: 'stay-1-spec-4', key: 'stay-equip-bed' },

  { id: 'stay-2-spec-1', key: 'stay-equip-guests-2' },
  { id: 'stay-2-spec-2', key: 'stay-equip-minibar' },
  { id: 'stay-2-spec-3', key: 'stay-equip-terrace' },
  { id: 'stay-2-spec-4', key: 'stay-equip-fire' },

  { id: 'stay-3-spec-1', key: 'stay-equip-guests-glamp' },
  { id: 'stay-3-spec-2', key: 'stay-equip-heated' },
  { id: 'stay-3-spec-3', key: 'stay-equip-decor' },
  { id: 'stay-3-spec-4', key: 'stay-equip-common' },

  { id: 'stay-4-spec-1', key: 'stay-equip-guests-2' },
  { id: 'stay-4-spec-2', key: 'stay-equip-compact-kitchen' },
  { id: 'stay-4-spec-3', key: 'stay-equip-integrated-shower' },
  { id: 'stay-4-spec-4', key: 'stay-equip-autonomous' },

  // Stay Text
  { id: 'stay-1-title', key: 'stay-1-title' },
  { id: 'stay-1-desc', key: 'stay-1-desc' },
  { id: 'stay-1-price', key: 'stay-1-price' },
  { id: 'stay-1-btn', key: 'stay-1-btn' },

  { id: 'stay-2-title', key: 'stay-2-title' },
  { id: 'stay-2-desc', key: 'stay-2-desc' },
  { id: 'stay-2-price', key: 'stay-2-price' },
  { id: 'stay-2-btn', key: 'stay-2-btn' },

  { id: 'stay-3-title', key: 'stay-3-title' },
  { id: 'stay-3-desc', key: 'stay-3-desc' },
  { id: 'stay-3-price', key: 'stay-3-price' },
  { id: 'stay-3-btn', key: 'stay-3-btn' },

  { id: 'stay-4-title', key: 'stay-4-title' },
  { id: 'stay-4-desc', key: 'stay-4-desc' },
  { id: 'stay-4-price', key: 'stay-4-price' },
  { id: 'stay-4-btn', key: 'stay-4-btn' },

  // Bathhouse
  { id: 'bath-badge', key: 'bath-badge' },
  { id: 'bath-title', key: 'bath-title' },
  { id: 'bath-desc', key: 'bath-desc' },
  { id: 'bath-item-1-title', key: 'bath-item-1-title' },
  { id: 'bath-item-1-desc', key: 'bath-item-1-desc' },
  { id: 'bath-item-2-title', key: 'bath-item-2-title' },
  { id: 'bath-item-2-desc', key: 'bath-item-2-desc' },
  { id: 'bath-item-3-title', key: 'bath-item-3-title' },
  { id: 'bath-item-3-desc', key: 'bath-item-3-desc' },
  { id: 'bath-btn', key: 'bath-btn' },
  { id: 'bath-price-hint', key: 'bath-price-hint' },

  // Surfing
  { id: 'surf-badge', key: 'surf-badge' },
  { id: 'surf-title', key: 'surf-title' },
  { id: 'surf-desc', key: 'surf-desc' },
  { id: 'surf-item-1-title', key: 'surf-item-1-title' },
  { id: 'surf-item-1-desc', key: 'surf-item-1-desc' },
  { id: 'surf-item-1-price', key: 'surf-item-1-price' },
  { id: 'surf-item-2-title', key: 'surf-item-2-title' },
  { id: 'surf-item-2-desc', key: 'surf-item-2-desc' },
  { id: 'surf-item-2-price', key: 'surf-item-2-price' },
  { id: 'surf-btn', key: 'surf-btn' },
  { id: 'surf-hint', key: 'surf-hint' },

  // Gallery
  { id: 'gallery-badge', key: 'gallery-badge' },
  { id: 'gallery-title', key: 'gallery-title' },
  { id: 'gallery-desc', key: 'gallery-desc' },

  // FAQ
  { id: 'faq-badge', key: 'faq-badge' },
  { id: 'faq-title', key: 'faq-title' },
  { id: 'faq-q1', key: 'faq-q1' },
  { id: 'faq-a1', key: 'faq-a1' },
  { id: 'faq-q2', key: 'faq-q2' },
  { id: 'faq-a2', key: 'faq-a2' },
  { id: 'faq-q3', key: 'faq-q3' },
  { id: 'faq-a3', key: 'faq-a3' },
  { id: 'faq-q4', key: 'faq-q4' },
  { id: 'faq-a4', key: 'faq-a4' },
  { id: 'faq-q5', key: 'faq-q5' },
  { id: 'faq-a5', key: 'faq-a5' },
  { id: 'faq-q6', key: 'faq-q6' },
  { id: 'faq-a6', key: 'faq-a6' },

  // Booking Form
  { id: 'book-badge', key: 'book-badge' },
  { id: 'book-title', key: 'book-title' },
  { id: 'book-desc', key: 'book-desc' },
  { id: 'book-label-in', key: 'book-label-in' },
  { id: 'book-label-out', key: 'book-label-out' },
  { id: 'book-label-guests', key: 'book-label-guests' },
  { id: 'book-label-stay', key: 'book-label-stay' },
  { id: 'book-label-name', key: 'book-label-name' },
  { id: 'book-label-phone', key: 'book-label-phone' },
  { id: 'book-label-method', key: 'book-label-method' },
  { id: 'book-submit', select: 'span', key: 'book-submit' },
  { id: 'book-legal-note', key: 'book-legal-note' },

  // Contacts
  { id: 'contact-badge', key: 'contact-badge' },
  { id: 'contact-title', key: 'contact-title' },
  { id: 'contact-label-address', key: 'contact-label-address' },
  { id: 'contact-val-address', key: 'contact-val-address' },
  { id: 'contact-label-phones', key: 'contact-label-phones' },
  { id: 'contact-label-hours', key: 'contact-label-hours' },
  { id: 'contact-val-hours', key: 'contact-val-hours' },
  { id: 'contact-map-caption', key: 'contact-map-caption' },
  { id: 'contact-map-btn', key: 'contact-map-btn' },

  // Footer
  { id: 'footer-brand-desc', key: 'footer-brand-desc' },
  { id: 'footer-nav-title', key: 'footer-nav-title' },
  { id: 'footer-social-title', key: 'footer-social-title' },
  { id: 'footer-copyright', select: 'p:first-child', key: 'footer-copyright' },
  { id: 'footer-bottom-motto', key: 'footer-bottom-motto' },
  { id: 'modal-policy-link', key: 'footer-policy-link' },
  { id: 'modal-agreement-link', key: 'footer-agreement-link' },
  { id: 'volunteer-link', select: 'span', key: 'footer-volunteer' },
  { id: 'footer-lang-label', key: 'footer-lang-label' },

  // Modals
  { id: 'policy-modal-title', key: 'policy-modal-title' },
  { id: 'policy-modal-close', key: 'policy-modal-close' },
  { id: 'agreement-modal-title', key: 'agreement-modal-title' },
  { id: 'agreement-modal-close', key: 'agreement-modal-close' },
  { id: 'volunteer-modal-title', key: 'volunteer-modal-title' },
  { id: 'volunteer-modal-desc-1', key: 'volunteer-modal-desc-1' },
  { id: 'volunteer-modal-desc-2', key: 'volunteer-modal-desc-2' },
  { id: 'volunteer-modal-close', key: 'volunteer-modal-close' },

  // Success Modal
  { id: 'success-modal-title', key: 'success-modal-title' },
  { id: 'success-modal-desc', key: 'success-modal-desc' },
  { id: 'success-modal-sub', key: 'success-modal-sub' },
  { id: 'close-success-btn', key: 'success-modal-close' }
];

// Globally accessible translation trigger
window.changeLanguage = function(lang) {
  if (lang !== 'ru' && lang !== 'en' && lang !== 'zh') return;

  // 1. Update HTML document language
  document.documentElement.lang = lang;

  // 2. Select language dictionary
  const dict = dictionary[lang] || dictionary['ru'];

  // 3. Update Text Content using strict identifiers
  for (const key in dict) {
    const entry = dict[key];
    const targetElement = document.getElementById(key);

    if (targetElement) {
      targetElement.textContent = entry;
    }
  }

  // 4. Handle elements with direct matching translation targets (Iterative translation mapping)
  elementsToTranslate.forEach(item => {
    const rootSection = document.getElementById(item.id);
    if (rootSection) {
      const el = item.select ? rootSection.querySelector(item.select) : rootSection;
      if (el) {
        const translationText = dict[item.key];
        if (translationText) {
          el.textContent = translationText;
        }
      }
    }
  });

  // 5. Update input placeholders
  const nameInput = document.getElementById('name-input');
  const phoneInput = document.getElementById('phone-input');
  const checkInInput = document.getElementById('check-in-input');
  const checkOutInput = document.getElementById('check-out-input');
  if (nameInput) {
    if (lang === 'zh') nameInput.placeholder = '拼音（如 Zhang San）';
    else if (lang === 'en') nameInput.placeholder = 'e.g. John Doe';
    else nameInput.placeholder = 'Иван Иванов';
  }
  if (phoneInput) {
    if (lang === 'zh') phoneInput.placeholder = '您的手机号码 / 微信号';
    else if (lang === 'en') phoneInput.placeholder = 'e.g. +1 (555) 000-0000';
    else phoneInput.placeholder = '+7 (999) 999-99-99';
  }
  if (checkInInput) {
    if (lang === 'zh') checkInInput.placeholder = '年-月-日 (YYYY-MM-DD)';
    else if (lang === 'en') checkInInput.placeholder = 'YYYY-MM-DD';
    else checkInInput.placeholder = 'ДД.ММ.ГГГГ (гггг-мм-дд)';
  }
  if (checkOutInput) {
    if (lang === 'zh') checkOutInput.placeholder = '年-月-日 (YYYY-MM-DD)';
    else if (lang === 'en') checkOutInput.placeholder = 'YYYY-MM-DD';
    else checkOutInput.placeholder = 'ДД.ММ.ГГГГ (гггг-мм-дд)';
  }

  // 6. Highlight selected language buttons active classes (Desktop, Drawer, Footer)
  const btnClassesActive = ['bg-ocean', 'font-bold', 'text-white'];
  const btnClassesInactive = ['text-white/60', 'text-white/70', 'hover:text-white'];

  const updateBtnSelection = (selector) => {
    const btns = document.querySelectorAll(selector);
    btns.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add(...btnClassesActive);
        btn.classList.remove(...btnClassesInactive);
      } else {
        btn.classList.remove(...btnClassesActive);
        btn.classList.add(...btnClassesInactive);
      }
    });
  };

  updateBtnSelection('.lang-btn-desktop');
  updateBtnSelection('.lang-btn-mobile');
  updateBtnSelection('.lang-btn-footer');

  // 7. Update active gallery items visual captions immediately
  const currentCaptions = localGalleryCaptions[lang] || localGalleryCaptions['ru'];
  const galleryBlocks = document.querySelectorAll('.gallery-item');
  galleryBlocks.forEach(block => {
    const idx = parseInt(block.getAttribute('data-index'), 10);
    const capHeader = block.querySelector('h4');
    const capPara = block.querySelector('p');
    if (capHeader && currentCaptions[idx]) {
      capHeader.textContent = currentCaptions[idx].title;
    }
    if (capPara && currentCaptions[idx]) {
      capPara.textContent = currentCaptions[idx].desc;
    }
  });

  // 8. Update active lightbox info if currently open
  const lightbox = document.getElementById('lightbox');
  if (lightbox && !lightbox.classList.contains('hidden')) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxCounter = document.getElementById('lightbox-counter');

    if (lightboxImg && lightboxTitle && lightboxDesc && lightboxCounter) {
      const currentLang = lang;
      const localizedTexts = localGalleryCaptions[currentLang] || localGalleryCaptions['ru'];

      lightboxTitle.textContent = localizedTexts[currentImageIdx].title;
      lightboxDesc.textContent = localizedTexts[currentImageIdx].desc;

      let counterStr = `${currentImageIdx + 1} из ${galleryData.length}`;
      if (currentLang === 'en') counterStr = `${currentImageIdx + 1} of ${galleryData.length}`;
      if (currentLang === 'zh') counterStr = `${currentImageIdx + 1} / ${galleryData.length}`;
      lightboxCounter.textContent = counterStr;
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. STICKY NAVBAR SCROLL ACTION
  // -------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-ink', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-ocean/10');
      navbar.classList.remove('bg-transparent', 'py-6', 'sm:py-6');
    } else {
      navbar.classList.remove('bg-ink', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-ocean/10');
      navbar.classList.add('bg-transparent', 'py-6', 'sm:py-6');
    }
  });

  // -------------------------------------------------------------
  // 2. MOBILE DRAWER MENU & BACKDROP INTERACTIVITY
  // -------------------------------------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-menu');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    mobileDrawer.classList.remove('translate-x-full');
    drawerBackdrop.classList.remove('hidden');
    setTimeout(() => {
      drawerBackdrop.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.add('translate-x-full');
    drawerBackdrop.classList.remove('opacity-100');
    setTimeout(() => {
      drawerBackdrop.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openDrawer);
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer on clicking any drawer link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // -------------------------------------------------------------
  // 2.5. FLOATING ACTION BUTTON (FAB) INTERACTIVITY
  // -------------------------------------------------------------
  const fabTrigger = document.getElementById('fab-trigger');
  const fabMenu = document.getElementById('fab-menu');
  const fabIconMsg = document.getElementById('fab-icon-msg');
  const fabIconClose = document.getElementById('fab-icon-close');

  let isFabOpen = false;

  function toggleFab() {
    isFabOpen = !isFabOpen;
    if (isFabOpen) {
      fabMenu.classList.remove('hidden');
      setTimeout(() => {
        fabMenu.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      }, 10);
      fabIconMsg.classList.add('hidden');
      fabIconClose.classList.remove('hidden');
    } else {
      fabMenu.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      fabIconMsg.classList.remove('hidden');
      fabIconClose.classList.add('hidden');
      setTimeout(() => {
        if (!isFabOpen) {
          fabMenu.classList.add('hidden');
        }
      }, 300);
    }
  }

  if (fabTrigger) {
    fabTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFab();
    });
  }

  // Close FAB on clicking outside
  document.addEventListener('click', (e) => {
    if (isFabOpen && !fabMenu.contains(e.target) && e.target !== fabTrigger && !fabTrigger.contains(e.target)) {
      toggleFab();
    }
  });

  // -------------------------------------------------------------
  // 3. FAQ ACCORDION TRANSITIONS
  // -------------------------------------------------------------
  const faqButtons = document.querySelectorAll('.faq-btn');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const accordion = btn.closest('.faq-accordion');
      const content = accordion.querySelector('.faq-content');
      const arrow = btn.querySelector('.arrow-icon');

      const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

      // Close all other open accordions (optional but elegant)
      document.querySelectorAll('.faq-content').forEach(item => {
        item.style.maxHeight = '0px';
        item.closest('.faq-accordion').querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
      });

      if (isOpen) {
        content.style.maxHeight = '0px';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
      }
    });
  });

  // -------------------------------------------------------------
  // 4. PHOTO GALLERY WITH LIGHTBOX PAGINATION
  // -------------------------------------------------------------
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');
  const prevLightboxBtn = document.getElementById('prev-lightbox-btn');
  const nextLightboxBtn = document.getElementById('next-lightbox-btn');

  function updateLightboxLocal(idx) {
    currentImageIdx = idx;
    const currentLang = document.documentElement.lang || 'ru';
    const localizedTexts = localGalleryCaptions[currentLang] || localGalleryCaptions['ru'];

    lightboxImg.src = galleryData[currentImageIdx].url;
    lightboxTitle.textContent = localizedTexts[currentImageIdx].title;
    lightboxDesc.textContent = localizedTexts[currentImageIdx].desc;

    let counterStr = `${currentImageIdx + 1} из ${galleryData.length}`;
    if (currentLang === 'en') counterStr = `${currentImageIdx + 1} of ${galleryData.length}`;
    if (currentLang === 'zh') counterStr = `${currentImageIdx + 1} / ${galleryData.length}`;
    lightboxCounter.textContent = counterStr;
  }

  function openLightbox(idx) {
    updateLightboxLocal(idx);
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // prevent scrolling
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
  });

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);

  if (prevLightboxBtn) {
    prevLightboxBtn.addEventListener('click', () => {
      const newIdx = (currentImageIdx - 1 + galleryData.length) % galleryData.length;
      updateLightboxLocal(newIdx);
    });
  }

  if (nextLightboxBtn) {
    nextLightboxBtn.addEventListener('click', () => {
      const newIdx = (currentImageIdx + 1) % galleryData.length;
      updateLightboxLocal(newIdx);
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && prevLightboxBtn) prevLightboxBtn.click();
      if (e.key === 'ArrowRight' && nextLightboxBtn) nextLightboxBtn.click();
    }
  });

  // -------------------------------------------------------------
  // 5. SELECTION INTEGRATION FOR BOOKING FORM
  // -------------------------------------------------------------
  const accommodationSelect = document.getElementById('accommodation-select');

  window.selectAccommodation = function(accommodationId) {
    if (accommodationSelect) {
      accommodationSelect.value = accommodationId;
    }
    // Scroll smoothly to booking form
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // -------------------------------------------------------------
  // 6. BOOKING FORM WITH LOADING & SUCCESS MODAL
  // -------------------------------------------------------------
  const bookingForm = document.getElementById('booking-form');
  const successModal = document.getElementById('success-modal');
  const closeSuccessBtn = document.getElementById('close-success-btn');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');

  // Success dialog fields
  const successName = document.getElementById('success-name');
  const successAccommodation = document.getElementById('success-accommodation');
  const successMethod = document.getElementById('success-method');
  const successPhone = document.getElementById('success-phone');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name-input').value;
      const phone = document.getElementById('phone-input').value;
      const accommodation = accommodationSelect.value;
      const contactMethodEl = document.querySelector('input[name="contactMethod"]:checked');
      const contactMethod = contactMethodEl ? contactMethodEl.value : 'WhatsApp';

      // Set Success Modal values
      if (successName) successName.textContent = name;
      if (successAccommodation) {
        let accommodationLabel = accommodation;
        const currentLang = document.documentElement.lang || 'ru';

        if (currentLang === 'zh') {
          if (accommodation === 'Hala-1') accommodationLabel = 'Хала-1 (臻享全景别墅)';
          if (accommodation === 'Hala-2') accommodationLabel = 'Хала-2 (浪漫蜜月别墅)';
          if (accommodation === 'Hala-Glamp') accommodationLabel = '哈拉星空球幕 (星空顶)';
          if (accommodation === 'Hala-Kemper') accommodationLabel = '哈拉豪华越野房车';
          if (accommodation === 'Bath') accommodationLabel = 'Hala Par 传统水疗蒸房';
          if (accommodation === 'Surf') accommodationLabel = '堪察加太平洋冲浪课';
        } else if (currentLang === 'en') {
          if (accommodation === 'Hala-1') accommodationLabel = 'Hala-1 (Premium Lodge)';
          if (accommodation === 'Hala-2') accommodationLabel = 'Hala-2 (Romantic Lodge)';
          if (accommodation === 'Hala-Glamp') accommodationLabel = 'Hala Glamp (Dome)';
          if (accommodation === 'Hala-Kemper') accommodationLabel = 'Hala Camper (RV Car)';
          if (accommodation === 'Bath') accommodationLabel = 'Hala Par Bathhouse';
          if (accommodation === 'Surf') accommodationLabel = 'Surfing Lesson';
        } else {
          if (accommodation === 'Hala-1') accommodationLabel = 'Хала-1 (Премиум лодж)';
          if (accommodation === 'Hala-2') accommodationLabel = 'Хала-2 (Романтик лодж)';
          if (accommodation === 'Hala-Glamp') accommodationLabel = 'Хала Глэмп (Купол)';
          if (accommodation === 'Hala-Kemper') accommodationLabel = 'Хала Кемпер (Автодом)';
          if (accommodation === 'Bath') accommodationLabel = 'Баня Хала Пар';
          if (accommodation === 'Surf') accommodationLabel = 'Занятие Серфингом';
        }
        successAccommodation.textContent = accommodationLabel;
      }
      if (successMethod) successMethod.textContent = contactMethod;
      if (successPhone) successPhone.textContent = phone;

      // Show Loading Spinner on Button
      submitBtn.disabled = true;
      const currentLang = document.documentElement.lang || 'ru';
      let loadingText = 'Отправляем заявку...';
      if (currentLang === 'en') loadingText = 'Submitting request...';
      if (currentLang === 'zh') loadingText = '正在提交预订申请...';

      btnText.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>${loadingText}</span>
      `;

      // Simulate network request
      setTimeout(() => {
        // Reset loading button state
        submitBtn.disabled = false;

        let resetBtnLabel = 'Отправить запрос на бронирование';
        if (currentLang === 'en') resetBtnLabel = 'Submit Booking Request';
        if (currentLang === 'zh') resetBtnLabel = '提交预订申请';
        btnText.innerHTML = resetBtnLabel;

        // Show success popup modal
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }, 1500);
    });
  }

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', () => {
      successModal.classList.add('hidden');
      successModal.classList.remove('flex');
      document.body.style.overflow = '';
      if (bookingForm) bookingForm.reset();
    });
  }

  // -------------------------------------------------------------
  // 7. IN-PAGE LEGAL & VOLUNTEER MODALS INTERACTIVITY
  // -------------------------------------------------------------
  window.openLegalModal = function(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.remove('hidden');
      targetModal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeLegalModal = function(modalId) {
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.classList.add('hidden');
      targetModal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  };

  // Bind Triggers for Personal Data
  const policyTriggers = ['modal-policy-form-trigger', 'modal-policy-link'];
  policyTriggers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('policy-modal');
      });
    }
  });

  // Bind Triggers for User Agreement
  const agreementTriggers = ['modal-agreement-form-trigger', 'modal-agreement-link'];
  agreementTriggers.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('agreement-modal');
      });
    }
  });

  // Bind Trigger for Volunteer Program
  const volunteerEl = document.getElementById('volunteer-link');
  if (volunteerEl) {
    volunteerEl.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal('volunteer-modal');
    });
  }
});
