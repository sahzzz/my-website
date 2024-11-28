document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});






// Портфолио (модал)
document.addEventListener("DOMContentLoaded", () => {
  // Фиксируем хедер при прокрутке
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Работа с карточками портфолио
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const popup = document.getElementById('portfolioPopup');
  const popupImage = document.getElementById('popupImage');
  const popupClose = document.querySelector('.popup-close');

  // Функция открытия модального окна
  function openModal(fullImageSrc) {
    popupImage.src = fullImageSrc; // Устанавливаем изображение в попап
    popup.classList.add('active'); // Показываем попап
    document.body.style.overflow = 'hidden'; // Отключаем скролл страницы
  }

  // Функция закрытия модального окна
  function closeModal() {
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем скролл страницы
  }

  // Открытие попапа при клике на карточку
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const fullImage = item.getAttribute('data-full');
      openModal(fullImage);
    });
  });

  // Закрытие попапа при клике на кнопку
  popupClose.addEventListener('click', closeModal);

  // Закрытие попапа при клике на фон
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closeModal();
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById('loadMore');
  const portfolioSection = document.querySelector('.portfolio'); // Находим блок "Портфоліо"

  if (loadMoreButton) {
    let isClosedState = false; // Флаг состояния кнопки "Закрити"

    loadMoreButton.addEventListener('click', () => {
      const hiddenItems = document.querySelectorAll('.portfolio-item.hidden');

      if (isClosedState) {
        // Если кнопка в состоянии "Закрити"
        const shownItems = document.querySelectorAll('.portfolio-item:not(.hidden)');
        shownItems.forEach((item, index) => {
          if (index >= 6) {
            item.classList.add('hidden'); // Скрываем карточки, кроме первых 6
          }
        });

        // Анимация скролла к началу секции Портфолио
        portfolioSection.scrollIntoView({
          behavior: 'smooth', // Плавный скролл
          block: 'start', // Скролл к началу секции
        });

        loadMoreButton.innerText = 'Завантажити ще'; // Меняем текст кнопки обратно
        isClosedState = false; // Сбрасываем состояние
      } else {
        // Если кнопка в состоянии "Завантажити ще"
        hiddenItems.forEach((item, index) => {
          if (index < 4) {
            item.classList.remove('hidden'); // Показываем следующие 4 элемента
          }
        });

        // Проверяем, остались ли еще скрытые карточки
        if (document.querySelectorAll('.portfolio-item.hidden').length === 0) {
          loadMoreButton.innerText = 'Закрити'; // Меняем текст кнопки на "Закрити"
          isClosedState = true; // Устанавливаем состояние
        }
      }
    });
  } else {
    console.error('Кнопка "Завантажити ще" не найдена в DOM');
  }
});

