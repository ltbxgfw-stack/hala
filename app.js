// Hala Camp - High-Performance Interactive Script
// Standard ES5/ES6 vanilla JS designed to run out-of-the-box locally without CORS or module errors.

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. STICKY NAVBAR SCROLL ACTION
  // -------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-ink/85', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-ocean/10');
      navbar.classList.remove('bg-transparent', 'py-6');
    } else {
      navbar.classList.remove('bg-ink/85', 'backdrop-blur-md', 'py-4', 'shadow-lg', 'border-b', 'border-ocean/10');
      navbar.classList.add('bg-transparent', 'py-6');
    }
  });

  // -------------------------------------------------------------
  // 2. MOBILE MENU DROPDOWN
  // -------------------------------------------------------------
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on clicking any navigation link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
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

  const galleryData = [
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

  let currentImageIdx = 0;

  function updateLightbox(idx) {
    currentImageIdx = idx;
    const data = galleryData[currentImageIdx];
    lightboxImg.src = data.url;
    lightboxTitle.textContent = data.title;
    lightboxDesc.textContent = data.desc;
    lightboxCounter.textContent = `${currentImageIdx + 1} из ${galleryData.length}`;
  }

  function openLightbox(idx) {
    updateLightbox(idx);
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
      updateLightbox(newIdx);
    });
  }

  if (nextLightboxBtn) {
    nextLightboxBtn.addEventListener('click', () => {
      const newIdx = (currentImageIdx + 1) % galleryData.length;
      updateLightbox(newIdx);
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

      const checkIn = document.getElementById('check-in-input').value;
      const checkOut = document.getElementById('check-out-input').value;
      const guests = document.getElementById('guests-select').value;
      const accommodation = accommodationSelect.value;
      const name = document.getElementById('name-input').value;
      const phone = document.getElementById('phone-input').value;
      const contactMethodEl = document.querySelector('input[name="contactMethod"]:checked');
      const contactMethod = contactMethodEl ? contactMethodEl.value : 'WhatsApp';

      // Set Success Modal values
      if (successName) successName.textContent = name;
      if (successAccommodation) {
        let accommodationLabel = accommodation;
        if (accommodation === 'Hala-1') accommodationLabel = 'Хала-1 (Премиум лодж)';
        if (accommodation === 'Hala-2') accommodationLabel = 'Хала-2 (Романтик лодж)';
        if (accommodation === 'Hala-Glamp') accommodationLabel = 'Хала Глэмп (Купол)';
        if (accommodation === 'Hala-Kemper') accommodationLabel = 'Хала Кемпер (Автодом)';
        if (accommodation === 'Bath') accommodationLabel = 'Баня Хала Пар';
        if (accommodation === 'Surf') accommodationLabel = 'Занятие Серфингом';
        successAccommodation.textContent = accommodationLabel;
      }
      if (successMethod) successMethod.textContent = contactMethod;
      if (successPhone) successPhone.textContent = phone;

      // Show Loading Spinner on Button
      submitBtn.disabled = true;
      btnText.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Отправляем заявку...</span>
      `;

      // Simulate network request
      setTimeout(() => {
        // Reset loading button state
        submitBtn.disabled = false;
        btnText.innerHTML = 'Отправить запрос на бронирование';

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
});
