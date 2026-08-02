const { useState, useEffect, useRef } = React;
const { motion, AnimatePresence } = Motion;

// Custom modern SVG Icons
const Icons = {
  Ocean: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-3.58 2.22-6.64 5.37-7.9A9.75 9.75 0 0112 3.75c1.83 0 3.52.5 4.96 1.39C20.1 6.4 21.75 9.5 21.75 13c0 3.86-2.6 7.12-6.14 8.08a9.75 9.75 0 01-7.22 0C4.85 20.12 2.25 16.86 2.25 13z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
    </svg>
  ),
  Bath: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 011.5-1.2c.08-.06.162-.116.246-.171a3.858 3.858 0 002.616-3.015z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21.03a18.22 18.22 0 01-1.24-5.83M12 21V11.25M15 21a18.22 18.22 0 001.24-5.83M6.3 12h11.4" />
    </svg>
  ),
  Surf: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Wifi: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.284 16.284A3 3 0 0012 17a3 3 0 003.716-.716M5.456 13.456a7 7 0 019.088 0M2.628 10.628a11 11 0 0118.744 0M12 20h.01" />
    </svg>
  ),
  Kitchen: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Shower: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  Fire: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  View: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ accordion states
  const [faqOpenStates, setFaqOpenStates] = useState({});

  // Form states
  const [formFields, setFormFields] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    accommodation: 'Hala-1',
    name: '',
    phone: '',
    contactMethod: 'WhatsApp'
  });

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submit handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formFields.name || !formFields.phone) {
      alert("Пожалуйста, заполните имя и номер телефона.");
      return;
    }
    setSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setSubmitting(false);
      setBookingSubmitted(true);
    }, 1500);
  };

  // Gallery items
  const galleryImages = [
    {
      url: '/images-web/hero/111%20IMG_0398.JPG',
      title: 'Наш премиальный глэмпинг у океана',
      desc: 'Прекрасный вид на океан и вулкан с территории Хала Кэмп.'
    },
    {
      url: '/images-web/hala1/hala1%20-%20111.jpg',
      title: 'Интерьер домика Хала-1',
      desc: 'Сочетание уюта, тепла и современного скандинавского дизайна.'
    },
    {
      url: '/images-web/bath/Hala%20Par%20(1).jpg',
      title: 'Баня Хала Пар у Тихого океана',
      desc: 'Незабываемый панорамный пар и расслабление на побережье.'
    },
    {
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
      title: 'Серфинг на Камчатке',
      desc: 'Профессиональные гидрокостюмы и обучение серфингу на волнах океана.'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      title: 'Тихий океан и черный песок',
      desc: 'Удивительная магия Халактырского пляжа прямо у вашего порога.'
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      title: 'Вид на камчатские вулканы',
      desc: 'Снежные вершины величественных исполинов, открывающиеся из кэмпа.'
    }
  ];

  const accommodations = [
    {
      id: 'Hala-1',
      name: 'Хала-1 (Премиум лодж)',
      tag: 'Популярно',
      description: 'Просторный и дизайнерский домик с панорамным остеклением и террасой. Идеален для комфортного проживания с видом на набегающие волны.',
      price: 'от 18 000 ₽ / сутки',
      features: ['2+2 гостя', 'Кухня с техникой', 'Душевая кабина', 'Ортопедический матрас', 'Камин-обогреватель'],
      image: '/images-web/hala1/hala1%20-%20111.jpg'
    },
    {
      id: 'Hala-2',
      name: 'Хала-2 (Романтик лодж)',
      tag: 'Новинка',
      description: 'Уютный деревянный домик с теплыми интерьерами из натурального кедра. Подходит парам, ценящим максимальную тишину, уединение и эстетику.',
      price: 'от 16 000 ₽ / сутки',
      features: ['2 гостя', 'Мини-бар', 'Собственная терраса', 'Панорамный вид', 'Зона для костра'],
      image: '/images-web/hero/111%20IMG_0398.JPG'
    },
    {
      id: 'Hala-Glamp',
      name: 'Хала Глэмп (Купол)',
      tag: 'Природа близко',
      description: 'Стильный геодезический купол, сохраняющий романтику походной жизни с премиальным отельным комфортом. Отапливаемый пол и мягкие постели.',
      price: 'от 12 000 ₽ / сутки',
      features: ['2-3 гостя', 'Подогреваемая кровать', 'Шенилл-декор', 'Видовая площадка', 'Общая зона кухни'],
      image: '/images-web/bath/Hala%20Par%20(1).jpg'
    },
    {
      id: 'Hala-Kemper',
      name: 'Хала Кемпер (Автодом)',
      tag: 'Дух свободы',
      description: 'Уникальный экспедиционный формат проживания в оборудованном кемпере высокого класса. Стоит на самом гребне черного пляжа у воды.',
      price: 'от 10 000 ₽ / сутки',
      features: ['2 гостя', 'Компактная кухня', 'Интегрированный душ', 'Автономное тепло', 'Грили у порога'],
      image: '/images-web/hero/111%20IMG_0398.JPG'
    }
  ];

  const faqs = [
    {
      q: 'Где находится глэмпинг Хала Кэмп?',
      a: 'Хала Кэмп находится на Халактырском пляже на Камчатке, в непосредственной близости от Тихого океана. Отсюда открываются панорамные виды на океан и домашнюю группу вулканов.'
    },
    {
      q: 'Какие варианты размещения есть в Хала Кэмп?',
      a: 'В Хала Кэмп доступны четыре формата проживания: Хала-1 (Премиум лодж), Хала-2 (Романтик лодж), Хала Глэмп (геодезические купола) и Хала Кемпер (полнофункциональный автодом на берегу).'
    },
    {
      q: 'Есть ли баня у океана?',
      a: 'Да! Наша уникальная баня Хала Пар расположена на самом берегу. Мы предлагаем индивидуальную аренду бани с аромапарением, чаем на камчатских травах и возможностью окунуться в прохладную воду океана.'
    },
    {
      q: 'Можно ли заняться серфингом?',
      a: 'Конечно! Халактырский пляж — легендарное место для серфинга. У нас можно заказать индивидуальные или групповые занятия по серфингу с сертифицированными инструкторами. Всё оборудование выдаётся на месте.'
    },
    {
      q: 'Как забронировать отдых?',
      a: 'Для бронирования вы можете оставить заявку через интерактивную форму на этом сайте, написать в WhatsApp по номеру +7 (963) 832-34-56 или позвонить по любому из контактных номеров телефона.'
    },
    {
      q: 'Во сколько заезд и выезд?',
      a: 'Стандартное время заезда в Хала Кэмп начинается с 14:00. Выезд осуществляется до 12:00. При наличии возможности мы всегда рады предложить ранний заезд или поздний выезд.'
    }
  ];

  const handleFaqToggle = (index) => {
    setFaqOpenStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const nextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-sand text-ink min-h-screen selection:bg-oceanSelection selection:text-white">

      {/* HEADER / NAVIGATION */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-ink/85 backdrop-blur-md py-4 shadow-lg border-b border-ocean/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center space-x-3 group">
            <span className="bg-ocean hover:bg-oceanSoft text-sand font-display font-black text-xl px-3 py-1.5 rounded-md tracking-wider transition-colors duration-200 shadow-md">
              ХАЛА
            </span>
            <span className="font-display font-medium text-lg tracking-widest text-white group-hover:text-ember transition-colors duration-200 uppercase hidden sm:inline-block">
              КЭМП
            </span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#stay" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Размещение</a>
            <a href="#bath" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Баня Хала Пар</a>
            <a href="#surfing" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Серфинг</a>
            <a href="#gallery" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Галерея</a>
            <a href="#faq" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Вопросы</a>
            <a href="#contact" className="text-white/80 hover:text-ember font-body font-medium transition-colors duration-200 text-sm tracking-wider uppercase">Контакты</a>
          </nav>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden md:block">
            <a href="#booking" className="bg-ember hover:bg-amber-500 text-white font-body font-bold text-xs uppercase px-6 py-3 rounded-full tracking-wider transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 inline-block">
              Забронировать
            </a>
          </div>

          {/* MOBILE HAMBURGER ICON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-ember p-2 focus:outline-none focus:ring-2 focus:ring-ocean rounded-md transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-ink/95 backdrop-blur-md border-t border-ocean/20 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3">
                <a
                  href="#stay"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Размещение
                </a>
                <a
                  href="#bath"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Баня Хала Пар
                </a>
                <a
                  href="#surfing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Серфинг
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Галерея
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Часто задаваемые вопросы
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-white/90 hover:bg-ocean/30 hover:text-ember transition-all"
                >
                  Контакты
                </a>
                <div className="pt-4 px-3">
                  <a
                    href="#booking"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center bg-ember hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-full transition-all tracking-wider uppercase text-sm"
                  >
                    Забронировать отдых
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative hero-shell flex items-center justify-start overflow-hidden pt-20">

        {/* HERO IMAGE BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images-web/hero/111%20IMG_0398.JPG"
            alt="Хала Кэмп на Халактырском пляже"
            className="w-full h-full object-cover hero-image"
          />
          {/* DARK LAYERED GRADIENTS OVERLAY */}
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 w-full text-white">
          <div className="max-w-3xl">

            {/* TAG */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-ocean/40 border border-oceanSoft/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-ember animate-ping" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-sand">Премиум отдых у Тихого океана</span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6"
            >
              Хала Кэмп — премиальный глэмпинг на Камчатке
            </motion.h1>

            {/* SUBHEADING */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl"
            >
              Погрузитесь в дикую природу Камчатки на Халактырском пляже. Уютные домики, расслабляющая баня у самой воды, занятия серфингом и незабываемый шум океанского прибоя.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <a
                href="#stay"
                className="bg-ocean hover:bg-oceanSoft text-sand font-bold text-center px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Выбрать домик</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="https://wa.me/79638323456"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-center px-8 py-4 rounded-full transition-all hover:scale-105 shadow-md flex items-center justify-center space-x-2"
              >
                <span>WhatsApp консультация</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* SCROLL DOWN INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2">Листайте вниз</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-2.5 bg-ember rounded-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ABOUT / WELCOME SECTION */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* COLUMN 1: INTRO */}
            <div>
              <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">О нашем месте силы</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight mb-6">
                Там, где рождается рассвет России
              </h2>
              <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-6">
                Халактырский пляж славится своим уникальным вулканическим песком угольно-черного цвета. Это место, где великий Тихий океан с могучим шумом встречается со скалистыми берегами Камчатки.
              </p>
              <p className="font-body text-ink/80 text-base leading-relaxed mb-8">
                В глэмпинге «Хала Кэмп» мы создали комфорт премиального отеля посреди этой нетронутой цивилизацией стихии. Здесь вы можете просыпаться под крики чаек, созерцать дымящиеся вершины вулканов за чашкой ароматного кофе и чувствовать абсолютное единение со Вселенной.
              </p>

              {/* MINI HIGHLIGHTS */}
              <div className="grid grid-cols-3 gap-4 border-t border-sandDark pt-8">
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-ocean">100%</h4>
                  <p className="text-ink/60 text-xs sm:text-sm">Экологичность материалов</p>
                </div>
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-ocean">50 м</h4>
                  <p className="text-ink/60 text-xs sm:text-sm">Расстояние до океана</p>
                </div>
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-ocean">24/7</h4>
                  <p className="text-ink/60 text-xs sm:text-sm">Администратор и Wi-Fi</p>
                </div>
              </div>
            </div>

            {/* COLUMN 2: SPLIT COLLAGE */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-soft h-48 sm:h-64 relative group">
                  <img
                    src="/images-web/hala1/hala1%20-%20111.jpg"
                    alt="Уютный интерьер Хала-1"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Скандинавский минимализм</span>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft h-32 sm:h-44 relative group bg-oceanDeep flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <span className="text-ember"><Icons.Ocean /></span>
                    <h5 className="text-sand text-xs sm:text-sm font-semibold uppercase tracking-wider">Тихий Океан</h5>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-soft h-32 sm:h-44 relative group bg-ocean flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <span className="text-sand"><Icons.Bath /></span>
                    <h5 className="text-sand text-xs sm:text-sm font-semibold uppercase tracking-wider">Баня Хала Пар</h5>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-soft h-48 sm:h-64 relative group">
                  <img
                    src="/images-web/bath/Hala%20Par%20(1).jpg"
                    alt="Баня на берегу океана"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold">Горячий пар у океана</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-16 bg-white/50 border-y border-sandDark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-2">Безупречный сервис</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink">Всё для вашего комфорта</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.Wifi /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Starlink Wi-Fi</h5>
              <p className="text-xs text-ink/60">Всегда на связи на краю земли</p>
            </div>

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.Kitchen /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Своя кухня</h5>
              <p className="text-xs text-ink/60">Плита, посуда и холодильник</p>
            </div>

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.Shower /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Горячий душ</h5>
              <p className="text-xs text-ink/60">Индивидуальный санузел</p>
            </div>

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.Fire /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Мангал-зона</h5>
              <p className="text-xs text-ink/60">Костровые чаши у домиков</p>
            </div>

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.View /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Вид на вулканы</h5>
              <p className="text-xs text-ink/60">Панорамные террасы</p>
            </div>

            <div className="p-4 bg-sand/30 rounded-xl hover:bg-white hover:shadow-soft transition-all duration-300">
              <div className="text-ocean flex justify-center mb-3"><Icons.Check /></div>
              <h5 className="font-display font-bold text-sm text-ink mb-1">Все удобства</h5>
              <p className="text-xs text-ink/60">Косметика, полотенца, белье</p>
            </div>

          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS (STAY) */}
      <section id="stay" className="py-20 md:py-28 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">Варианты проживания</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight mb-4">
              Выберите ваш идеальный лодж у океана
            </h2>
            <p className="font-body text-base text-ink/70">
              Мы разработали разнообразные форматы размещения, сочетающие близость к первозданной стихии Тихого океана и уют премиального загородного отеля.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {accommodations.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                {/* IMAGE CONTAINER */}
                <div className="h-64 sm:h-72 relative overflow-hidden bg-oceanDeep">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* TAG */}
                  <span className="absolute top-4 left-4 bg-ink/70 backdrop-blur-md text-sand font-semibold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                  {/* PRICE TAG */}
                  <span className="absolute bottom-4 right-4 bg-ember text-white font-display font-black text-sm px-4 py-2 rounded-xl shadow-md">
                    {item.price}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-ink mb-3 tracking-tight group-hover:text-ocean transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* FEATURES */}
                    <div className="border-t border-sand/80 pt-5 mb-8">
                      <h5 className="font-display font-bold text-xs text-ink/50 uppercase tracking-widest mb-3">Оснащение лоджа:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="bg-sand/60 text-oceanDeep font-medium text-xs px-3 py-1.5 rounded-md flex items-center space-x-1 border border-sandDark/40">
                            <span className="w-1 h-1 rounded-full bg-ember inline-block" />
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="pt-2">
                    <a
                      href="#booking"
                      onClick={() => {
                        setFormFields(prev => ({ ...prev, accommodation: item.id }));
                      }}
                      className="w-full block text-center bg-ocean hover:bg-oceanSoft text-sand font-bold py-4 px-6 rounded-xl transition-all uppercase tracking-wider text-xs"
                    >
                      Забронировать этот лодж
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* BATH HOUSE: HALA PAR */}
      <section id="bath" className="py-20 md:py-28 bg-ink text-white scroll-mt-24 relative overflow-hidden">

        {/* Background visual accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-oceanSoft/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ember/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-card h-80 sm:h-96 lg:h-[480px] bg-oceanDeep relative"
            >
              <img
                src="/images-web/bath/Hala%20Par%20(1).jpg"
                alt="Баня Хала Пар"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </motion.div>

            {/* TEXT */}
            <div>
              <span className="text-ember font-bold tracking-widest text-xs uppercase block mb-3">Спа на краю света</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-sand leading-tight mb-6">
                Баня Хала Пар: перерождение у Тихого океана
              </h2>
              <p className="font-body text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                Почувствуйте целительную силу сибирского кедра, ароматных трав Камчатки и контраста температур. Наша баня расположена прямо у набегающих волн океана, чтобы подарить вам абсолютно новые ощущения.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-ember mt-1"><Icons.Check /></span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-sand">Панорамный пар</h5>
                    <p className="text-white/60 text-xs">Огромное окно с видом на прибой Тихого океана.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ember mt-1"><Icons.Check /></span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-sand">Целительное наполнение</h5>
                    <p className="text-white/60 text-xs">Натуральные веники, авторские чаи на камчатских ягодах, травах и меду.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-ember mt-1"><Icons.Check /></span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-sand">Контрастное купание</h5>
                    <p className="text-white/60 text-xs">После жаркой парной вы можете напрямую окунуться в прохладный Тихий океан.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  onClick={() => {
                    setFormFields(prev => ({ ...prev, accommodation: 'Bath' }));
                  }}
                  className="bg-ember hover:bg-amber-500 text-white font-bold text-center px-8 py-4 rounded-xl transition-all uppercase tracking-wider text-xs"
                >
                  Забронировать сеанс
                </a>
                <span className="text-white/50 text-xs text-center sm:text-left tracking-wide">
                  От 4 000 ₽ / час (минимальный заказ 2 часа)
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SURFING SECTION */}
      <section id="surfing" className="py-20 md:py-28 bg-sand scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* TEXT */}
            <div className="order-2 lg:order-1">
              <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">Оседлай волну</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight mb-6">
                Серфинг на Камчатке: энергия бушующего океана
              </h2>
              <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed mb-6">
                Камчатка — одно из самых экзотических и красивых мест для холодного серфинга в мире. Сюда съезжаются любители экстрима со всей планеты. Ловите волны с видом на заснеженные вулканы!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-soft">
                  <h4 className="font-display font-bold text-sm text-ocean mb-1">Групповой формат</h4>
                  <p className="text-xs text-ink/60">Веселая атмосфера, обучение в группе единомышленников.</p>
                  <span className="text-xs font-bold text-ember block mt-2">6 000 ₽ / занятие</span>
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-soft">
                  <h4 className="font-display font-bold text-sm text-ocean mb-1">Индивидуально</h4>
                  <p className="text-xs text-ink/60">Максимальное внимание тренера и подбор индивидуального темпа.</p>
                  <span className="text-xs font-bold text-ember block mt-2">12 000 ₽ / занятие</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#booking"
                  onClick={() => {
                    setFormFields(prev => ({ ...prev, accommodation: 'Surf' }));
                  }}
                  className="bg-ocean hover:bg-oceanSoft text-sand font-bold text-center px-8 py-4 rounded-xl transition-all uppercase tracking-wider text-xs"
                >
                  Записаться на урок
                </a>
                <span className="text-ink/60 text-xs text-center sm:text-left tracking-wide">
                  В стоимость входят гидрокостюм, серфборд и фотоотчет.
                </span>
              </div>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-card h-80 sm:h-96 lg:h-[450px] relative bg-oceanDeep"
            >
              <img
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80"
                alt="Серфинг на Камчатке"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 md:py-28 bg-white/40 border-y border-sandDark/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">Визуальное путешествие</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight mb-4">
              Атмосфера Хала Кэмп
            </h2>
            <p className="font-body text-base text-ink/60">
              Посмотрите на запечатленные мгновения жизни нашего кэмпа. Нажмите на любое фото, чтобы рассмотреть подробнее.
            </p>
          </div>

          {/* GRID OF GALLERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImageIndex(index)}
                className="h-64 rounded-2xl overflow-hidden shadow-soft cursor-pointer relative group bg-oceanDeep"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* INNER HOVER TITLE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <h4 className="font-display font-bold text-sm sm:text-base text-ember mb-1">{img.title}</h4>
                  <p className="font-body text-xs text-white/80 leading-snug">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 md:py-28 bg-sand scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">Отвечаем на вопросы</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight">
              Часто задаваемые вопросы
            </h2>
          </div>

          {/* ACCORDION GROUP */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = !!faqOpenStates[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-sandDark/30 shadow-soft overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-ink hover:text-ocean transition-colors">
                      {faq.q}
                    </span>
                    <span className={`ml-4 text-ocean transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-sm sm:text-base text-ink/75 font-body leading-relaxed border-t border-sand/40 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 md:py-28 bg-oceanDeep text-white scroll-mt-24 relative overflow-hidden">

        {/* Abstract waves element */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,181.3C640,203,800,213,960,192C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-ember font-bold tracking-widest text-xs uppercase block mb-3">Заявка на бронирование</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-sand leading-tight mb-4">
              Забронируйте отдых у океана
            </h2>
            <p className="font-body text-base text-white/85">
              Заполните небольшую форму, и наш администратор свяжется с вами в течение 15 минут для подтверждения доступности дат и уточнения всех деталей.
            </p>
          </div>

          {/* BOOKING FORM CONTAINER */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto">
            <form onSubmit={handleBookingSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CHECK-IN */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Дата заезда</label>
                  <input
                    type="date"
                    required
                    value={formFields.checkIn}
                    onChange={(e) => setFormFields(prev => ({ ...prev, checkIn: e.target.value }))}
                    className="w-full bg-ink/45 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all"
                  />
                </div>

                {/* CHECK-OUT */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Дата выезда</label>
                  <input
                    type="date"
                    required
                    value={formFields.checkOut}
                    onChange={(e) => setFormFields(prev => ({ ...prev, checkOut: e.target.value }))}
                    className="w-full bg-ink/45 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* GUESTS */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Количество гостей</label>
                  <select
                    value={formFields.guests}
                    onChange={(e) => setFormFields(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="1" className="bg-ink">1 гость</option>
                    <option value="2" className="bg-ink">2 гостя</option>
                    <option value="3" className="bg-ink">3 гостя</option>
                    <option value="4" className="bg-ink">4 гостя</option>
                    <option value="5+" className="bg-ink">5+ гостей</option>
                  </select>
                </div>

                {/* ACCOMMODATION SELECT */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Вариант отдыха</label>
                  <select
                    value={formFields.accommodation}
                    onChange={(e) => setFormFields(prev => ({ ...prev, accommodation: e.target.value }))}
                    className="w-full bg-ink/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="Hala-1" className="bg-ink">Хала-1 (Премиум лодж)</option>
                    <option value="Hala-2" className="bg-ink">Хала-2 (Романтик лодж)</option>
                    <option value="Hala-Glamp" className="bg-ink">Хала Глэмп (Купол)</option>
                    <option value="Hala-Kemper" className="bg-ink">Хала Кемпер (Автодом)</option>
                    <option value="Bath" className="bg-ink">Баня Хала Пар (только сеанс)</option>
                    <option value="Surf" className="bg-ink">Занятие Серфингом</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* CONTACT NAME */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Ваше имя</label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Иванов"
                    value={formFields.name}
                    onChange={(e) => setFormFields(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-ink/45 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-white/70">Номер телефона</label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 999-99-99"
                    value={formFields.phone}
                    onChange={(e) => setFormFields(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full bg-ink/45 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/45 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-all"
                  />
                </div>

              </div>

              {/* CONTACT METHOD */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider mb-3 text-white/70">Предпочтительный способ связи</span>
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="WhatsApp"
                      checked={formFields.contactMethod === 'WhatsApp'}
                      onChange={(e) => setFormFields(prev => ({ ...prev, contactMethod: e.target.value }))}
                      className="form-radio text-ember focus:ring-ember h-4 w-4 bg-ink/40 border-white/20"
                    />
                    <span className="text-sm">WhatsApp</span>
                  </label>
                  <label className="flex items-center space-x-2.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Call"
                      checked={formFields.contactMethod === 'Call'}
                      onChange={(e) => setFormFields(prev => ({ ...prev, contactMethod: e.target.value }))}
                      className="form-radio text-ember focus:ring-ember h-4 w-4 bg-ink/40 border-white/20"
                    />
                    <span className="text-sm">Звонок на телефон</span>
                  </label>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-ember hover:bg-amber-500 disabled:bg-amber-500/50 text-white font-display font-bold py-4.5 px-6 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center space-x-2 uppercase tracking-wider text-sm cursor-pointer"
                >
                  {submitting ? (
                    <React.Fragment>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Отправляем заявку...</span>
                    </React.Fragment>
                  ) : (
                    <span>Отправить запрос на бронирование</span>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* CONTACTS / MAP SECTION */}
      <section id="contact" className="py-20 bg-sand border-t border-sandDark/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* CONTACT INFO */}
            <div>
              <span className="text-ocean font-bold tracking-widest text-xs uppercase block mb-3">Контакты</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-ink leading-tight mb-8">
                Ждем вас на Халактырском пляже
              </h2>

              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <span className="text-ocean mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wider mb-1">Адрес глэмпинга:</h5>
                    <p className="text-ink/80 text-sm sm:text-base">Камчатский край, Елизовский район, Халактырский пляж, побережье Тихого океана.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-ocean mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wider mb-1">Телефоны отдела бронирования:</h5>
                    <div className="space-y-1 text-ink/80 text-sm sm:text-base flex flex-col">
                      <a href="tel:+79247917799" className="hover:text-ember transition-colors">+7 (924) 791-77-99</a>
                      <a href="tel:+79638323456" className="hover:text-ember transition-colors">+7 (963) 832-34-56</a>
                      <a href="tel:+79147852219" className="hover:text-ember transition-colors">+7 (914) 785-22-19</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-ocean mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <h5 className="font-display font-bold text-sm text-ink uppercase tracking-wider mb-1">Режим работы:</h5>
                    <p className="text-ink/80 text-sm sm:text-base">Заезд с 14:00 | Выезд до 12:00. Прием звонков администратором: с 09:00 до 21:00 по камчатскому времени (+9 к МСК).</p>
                  </div>
                </div>

              </div>
            </div>

            {/* EMBEDDED STYLISH MAP PLACEHOLDER */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-sandDark/40 p-3 h-80 sm:h-96 w-full relative group">
              {/* Beautiful custom styled vector map/ocean background */}
              <div className="w-full h-full bg-oceanDeep rounded-2xl flex flex-col items-center justify-center p-8 text-center text-white relative">
                {/* Visual elements */}
                <div className="absolute top-4 right-4 bg-white/10 text-xs text-sand px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest font-mono">
                  GPS: 52.9834, 158.8504
                </div>

                <span className="text-ember w-16 h-16 animate-bounce flex items-center justify-center mb-4">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>

                <h4 className="font-display font-black text-xl text-sand mb-2 uppercase tracking-wide">Халактырский Пляж</h4>
                <p className="font-body text-sm text-sand/80 max-w-sm mb-6 leading-relaxed">
                  Мы находимся прямо на береговой линии. Дорога от Петропавловска-Камчатского занимает около 30-40 минут на полноприводном автомобиле.
                </p>

                <a
                  href="https://yandex.ru/maps/?text=52.9834,158.8504"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-oceanDeep font-bold text-xs px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-ember hover:text-white transition-all duration-300"
                >
                  Открыть в Яндекс Картах
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-white/50 py-16 border-t border-ocean/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* BRAND */}
            <div className="md:col-span-2 space-y-4">
              <span className="bg-ocean text-sand font-display font-black text-lg px-3 py-1.5 rounded tracking-wider uppercase inline-block">
                Хала Кэмп
              </span>
              <p className="font-body text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
                Премиальный глэмпинг на Камчатке у Тихого океана. Испытайте незабываемые ощущения дикой природы в абсолютном отельном комфорте.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <h5 className="font-display font-bold text-xs text-sand uppercase tracking-wider mb-4">Навигация</h5>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#stay" className="hover:text-ember transition-colors">Размещение</a></li>
                <li><a href="#bath" className="hover:text-ember transition-colors">Баня Хала Пар</a></li>
                <li><a href="#surfing" className="hover:text-ember transition-colors">Серфинг на Камчатке</a></li>
                <li><a href="#gallery" className="hover:text-ember transition-colors">Наша Галерея</a></li>
              </ul>
            </div>

            {/* SOCIALS */}
            <div>
              <h5 className="font-display font-bold text-xs text-sand uppercase tracking-wider mb-4">Мы в сети</h5>
              <div className="flex space-x-4">
                <a href="https://wa.me/79638323456" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-ocean text-white p-2.5 rounded-full transition-colors duration-200">
                  <span className="text-xs font-bold font-mono">WA</span>
                </a>
                <a href="#" className="bg-white/5 hover:bg-ocean text-white p-2.5 rounded-full transition-colors duration-200">
                  <span className="text-xs font-bold font-mono">TG</span>
                </a>
                <a href="#" className="bg-white/5 hover:bg-ocean text-white p-2.5 rounded-full transition-colors duration-200">
                  <span className="text-xs font-bold font-mono">VK</span>
                </a>
              </div>
            </div>

          </div>

          {/* SYSTEM INFO & BOTTOM FOOTER */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs">
            <p>&copy; {new Date().getFullYear()} Хала Кэмп. Все права защищены. Разработка сайта.</p>
            <p className="mt-4 sm:mt-0 text-white/30 tracking-wider">Камчатка — у края Тихого океана</p>
          </div>

        </div>
      </footer>

      {/* LIGHTBOX FOR IMAGES */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8"
          >
            {/* LIGHTBOX HEADER */}
            <div className="flex justify-between items-center text-white z-10">
              <div>
                <span className="text-ember font-semibold text-xs uppercase tracking-widest block">Хала Кэмп Галерея</span>
                <span className="text-white/60 text-xs">{selectedImageIndex + 1} из {galleryImages.length}</span>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-white transition-all cursor-pointer"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* LIGHTBOX CONTENT IMAGE & NAVS */}
            <div className="relative flex items-center justify-center flex-1 max-h-[75vh]">

              {/* Left arrow */}
              <button
                onClick={prevImage}
                className="absolute left-0 sm:left-4 z-10 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full hover:scale-105 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={galleryImages[selectedImageIndex].url}
                alt={galleryImages[selectedImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />

              {/* Right arrow */}
              <button
                onClick={nextImage}
                className="absolute right-0 sm:right-4 z-10 bg-white/5 hover:bg-white/10 text-white p-3 rounded-full hover:scale-105 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>

            {/* LIGHTBOX FOOTER / INFO */}
            <div className="text-center text-white max-w-xl mx-auto z-10">
              <h4 className="font-display font-black text-lg text-ember mb-1 uppercase tracking-wider">
                {galleryImages[selectedImageIndex].title}
              </h4>
              <p className="font-body text-xs sm:text-sm text-white/70">
                {galleryImages[selectedImageIndex].desc}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* BOOKING SUCCESS MODAL POPUP */}
      <AnimatePresence>
        {bookingSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-sand text-ink rounded-3xl p-6 sm:p-10 max-w-md w-full shadow-2xl relative text-center border-2 border-oceanSoft/30"
            >

              <div className="w-16 h-16 bg-ocean text-sand rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Icons.Check />
              </div>

              <h3 className="font-display font-black text-2xl text-oceanDeep mb-3 uppercase tracking-wide">Заявка принята!</h3>

              <p className="font-body text-sm text-ink/80 leading-relaxed mb-6">
                Спасибо, <span className="font-bold text-ocean">{formFields.name}</span>! Мы получили ваш запрос на бронирование лоджа <span className="font-bold text-ocean">{formFields.accommodation}</span> на выбранные вами даты.
              </p>

              <p className="font-body text-xs text-ink/60 mb-8 bg-white/50 p-3 rounded-xl border border-sandDark">
                Наш администратор свяжется с вами в течение 15 минут в <span className="font-bold text-ocean">{formFields.contactMethod}</span> на указанный номер <span className="font-mono">{formFields.phone}</span>.
              </p>

              <button
                onClick={() => setBookingSubmitted(false)}
                className="w-full bg-ocean hover:bg-oceanSoft text-sand font-display font-bold py-3.5 px-6 rounded-xl transition-all shadow-md uppercase tracking-wider text-xs cursor-pointer"
              >
                Отлично, жду звонка!
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Render the application into DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
