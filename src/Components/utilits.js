const aali_tm_preloader = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  const preloader = document.getElementById('preloader');

  if (preloader) {
    if (!isMobile) {
      setTimeout(() => {
        preloader.classList.add('preloaded');
      }, 800);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

// Função para animação WOW.js
export const wowJsAnimation = () => {
  if (typeof window !== 'undefined') {
    new WOW().init();
  }
};

// Função para o cursor personalizado
export const customCursor = () => {
  const myCursor = document.querySelectorAll('.mouse-cursor');
  const hamburger = document.querySelector('.hamburger');
  const kura_tm_topbar = document.querySelector('.kura_tm_topbar');
  const pointer = document.querySelector('.cursor-pointer');
  const e = document.querySelector('.cursor-inner');
  const t = document.querySelector('.cursor-outer');

  function mouseEvent(element) {
    element.addEventListener('mouseenter', () => {
      e.classList.add('cursor-hover');
      t.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
      e.classList.remove('cursor-hover');
      t.classList.remove('cursor-hover');
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n, i;
      let o = false;

      window.onmousemove = (s) => {
        if (!o) {
          t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
          e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
          n = s.clientY;
          i = s.clientX;
        }
      };

      document.body.addEventListener('mouseenter', () => {
        const a = document.querySelectorAll('a');
        e.classList.add('cursor-inner');
        t.classList.add('cursor-outer');

        a.forEach(element => mouseEvent(element));
        if (hamburger) mouseEvent(hamburger);
        if (kura_tm_topbar) mouseEvent(kura_tm_topbar);
        if (pointer) mouseEvent(pointer);
      });

      e.style.visibility = 'visible';
      t.style.visibility = 'visible';
    }
  }
};

// Função para o preloader
export const preloader = () => {
  aali_tm_preloader();
  setTimeout(() => {
    document.querySelector('body').classList.add('opened');
  }, 1500);
};

// Função para a navegação fixa (sticky navigation)
export const stickyNav = () => {
  const offset = window.scrollY;
  const stickys = document.querySelectorAll('.aali_tm_header');
  stickys.forEach((sticky) => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add('animate');
      } else {
        sticky.classList.remove('animate');
      }
    }
  });
};

// Função para a progressão de habilidades
export const activeSkillProgress = () => {
  const progress_inner = document.querySelectorAll('.skillsInner___');
  const triggerBottom = (window.innerHeight / 5) * 5;

  progress_inner.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const boxElement = box.getElementsByClassName('bar')[0];
    const pWidth = box.getAttribute('data-value');

    if (boxTop < triggerBottom) {
      boxElement.classList.add('open');
      boxElement.getElementsByClassName('bar_in')[0].style.width = `${pWidth}%`;
    } else {
      boxElement.classList.remove('open');
    }
  });
};

// Função para lidar com cliques em tags <a>
export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  aTag.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
};

// Função para definir imagens de fundo usando o atributo data-img-url
export const dataImage = () => {
  const d = document.querySelectorAll("[data-img-url]");
  d.forEach(element => {
    element.style.backgroundImage = `url(${element.getAttribute('data-img-url')})`;
  });
};

// Função para animações de efeito de movimento
export const aali_tm_moving_animation = () => {
  const detail = document.querySelectorAll('.moving_effect');
  let offset = 0;

  detail.forEach(element => {
    const direction = element.getAttribute('data-direction');
    window.addEventListener('scroll', () => {
      offset = window.scrollY;
      const h = window.innerHeight;
      let i = element.getBoundingClientRect().top + window.scrollY - offset - h;

      if (element.getAttribute('data-reverse') === 'yes') {
        i *= -1;
      }

      const x = direction === 'x' ? (i * 70) / h : 0;
      const y = direction === 'x' ? 0 : (i * 70) / h;

      if (i * -1 < h + 300 && i < 300) {
        element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
      }
    });
  });
};

// Função para inicializar o efeito de parallax
export const parallax = () => {
  const parallaxElement = document.querySelector('.parallax');
  if (parallaxElement) {
    new Parallax(parallaxElement, {
      relativeInput: true,
      selector: '.layer',
    });
  }
};

// Função para inicializar o efeito jarallax
export const jarallaxContent = () => {
  jarallaxVideo();
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5,
    keepImg: true,
    automaticResize: true,
    videoVolume: 0,
  });
};

// Função para o scroll de navegação
export const scroll_ = () => {
  const sections = document.querySelectorAll('.aali_tm_section');
  const navLi = document.querySelectorAll('.anchor_nav li');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('current');
    if (li.querySelector('a').getAttribute('href') === `#${current}`) {
      li.classList.add('current');
    }
  });
};