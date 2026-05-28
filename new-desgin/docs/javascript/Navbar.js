const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
    <div class="fixed w-full top-0 z-[9999] flex justify-center px-2 py-2 sm:px-4 sm:py-4 lg:px-6">
      <header class="w-full max-w-7xl rounded-3xl border border-white/60 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/85">
        <div class="mx-auto flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" class="flex shrink-0 items-center gap-3">
            <img src="./docs/assets/logo.webp" alt="Auburn Appliance Repair Pros" class="h-14 w-auto sm:h-16" />
          </a>

          <nav class="hidden items-center gap-8 xl:flex">
            <a href="#home" class="font-medium text-[#3e3e3e] transition hover:text-[#652030]">Home</a>

            <div class="group relative">
              <a href="#services" class="inline-flex items-center font-medium text-[#3e3e3e] transition hover:text-[#652030]">
                Services
                <i class="fa-solid fa-chevron-down ml-2 text-sm transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div class="min-w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
                  <a href="#services" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Refrigerator Repair</a>
                  <a href="#services" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Dishwasher Repair</a>
                  <a href="#services" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Washer &amp; Dryer Repair</a>
                  <a href="#services" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Stove &amp; Oven Repair</a>
                </div>
              </div>
            </div>

            <div class="group relative">
              <a href="#brands" class="inline-flex items-center font-medium text-[#3e3e3e] transition hover:text-[#652030]">
                Major Brands
                <i class="fa-solid fa-chevron-down ml-2 text-sm transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div class="min-w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
                  <a href="#brands" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Samsung</a>
                  <a href="#brands" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Maytag</a>
                  <a href="#brands" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">GE</a>
                  <a href="#brands" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Kenmore</a>
                  <a href="#brands" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Whirlpool</a>
                </div>
              </div>
            </div>

            <div class="group relative">
              <a href="#about" class="inline-flex items-center font-medium text-[#3e3e3e] transition hover:text-[#652030]">
                About
                <i class="fa-solid fa-chevron-down ml-2 text-sm transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div class="min-w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
                  <a href="#resources" class="block px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-[#faf7f5] hover:text-[#652030]">Resources</a>
                </div>
              </div>
            </div>

            <a href="#footer" class="font-medium text-[#3e3e3e] transition hover:text-[#652030]">Contact</a>
          </nav>

          <a
            href="tel:5304478105"
            class="hidden rounded-full bg-[#652030] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#533e3e] hover:shadow-[#652030]/30 sm:inline-flex xl:flex"
          >
            CALL NOW (530) 447-8105
          </a>

          <button
            id="nav-toggle"
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#3e3e3e] shadow-sm transition hover:border-[#652030] hover:text-[#652030] xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </header>
    </div>

    <div
      id="mobile-nav"
      class="fixed inset-0 z-[99999] hidden xl:hidden"
      style="top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;"
    >
      <div
        id="mobile-overlay"
        class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300"
        style="top:0;left:0;width:100%;height:100%;"
      ></div>

      <div
        id="mobile-drawer"
        class="absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-[#faf7f5] shadow-2xl translate-x-full transition-transform duration-300 ease-out"
        style="top:0;right:0;height:100vh;"
      >
        <div class="flex items-center justify-between border-b border-slate-200/70 px-6 py-5 bg-white">
          <img src="./docs/assets/logo.webp" alt="Logo" class="h-12 w-auto" />
          <button
            id="mobile-close"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-[#faf7f5] text-slate-600 transition hover:border-[#652030] hover:text-[#652030]"
            aria-label="Close navigation"
          >
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div class="flex flex-1 flex-col overflow-y-auto px-6 pb-8 pt-2">

          <a href="#home" class="flex items-center gap-3 border-b border-slate-200/70 py-4 text-base font-semibold text-slate-800 transition hover:text-[#652030]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#652030]/30 shrink-0"></span>
            Home
          </a>

          <button
            data-mobile-group="services"
            type="button"
            class="flex w-full items-center justify-between border-b border-slate-200/70 py-4 text-left text-base font-semibold text-slate-800 transition hover:text-[#652030]"
          >
            <span class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-[#652030]/30 shrink-0"></span>
              Services
            </span>
            <i data-mobile-icon="services" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
          </button>
          <div data-mobile-panel="services" class="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out">
            <div class="border-b border-slate-200/70 bg-white/60 rounded-xl mb-1 overflow-hidden">
              <a href="#services" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Refrigerator Repair</a>
              <a href="#services" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Dishwasher Repair</a>
              <a href="#services" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Washer &amp; Dryer Repair</a>
              <a href="#services" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Stove &amp; Oven Repair</a>
            </div>
          </div>

          <button
            data-mobile-group="brands"
            type="button"
            class="flex w-full items-center justify-between border-b border-slate-200/70 py-4 text-left text-base font-semibold text-slate-800 transition hover:text-[#652030]"
          >
            <span class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-[#652030]/30 shrink-0"></span>
              Major Brands
            </span>
            <i data-mobile-icon="brands" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
          </button>
          <div data-mobile-panel="brands" class="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out">
            <div class="border-b border-slate-200/70 bg-white/60 rounded-xl mb-1 overflow-hidden">
              <a href="#brands" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Samsung</a>
              <a href="#brands" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Maytag</a>
              <a href="#brands" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">GE</a>
              <a href="#brands" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Kenmore</a>
              <a href="#brands" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Whirlpool</a>
            </div>
          </div>

          <button
            data-mobile-group="about"
            type="button"
            class="flex w-full items-center justify-between border-b border-slate-200/70 py-4 text-left text-base font-semibold text-slate-800 transition hover:text-[#652030]"
          >
            <span class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-[#652030]/30 shrink-0"></span>
              About
            </span>
            <i data-mobile-icon="about" class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform duration-300"></i>
          </button>
          <div data-mobile-panel="about" class="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out">
            <div class="border-b border-slate-200/70 bg-white/60 rounded-xl mb-1 overflow-hidden">
              <a href="#resources" class="block px-5 py-3.5 text-sm text-slate-600 transition hover:bg-[#faf7f5] hover:text-[#652030]">Resources</a>
            </div>
          </div>

          <a href="#footer" class="flex items-center gap-3 border-b border-slate-200/70 py-4 text-base font-semibold text-slate-800 transition hover:text-[#652030]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#652030]/30 shrink-0"></span>
            Contact
          </a>

          <div class="mt-6 rounded-2xl bg-white border border-[#f0e8e4] p-5">
            <p class="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[#652030]/60 mb-1">Call Us Now</p>
            <p class="font-serif text-xl font-bold text-[#1a0f0f] mb-4">(530) 447-8105</p>
            <a
              href="tel:5304478105"
              class="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#652030] to-[#4a1622] px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-[0_4px_16px_rgba(101,32,48,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(101,32,48,0.5)]"
            >
              <i class="fa-solid fa-phone-volume text-[#e2c99a]"></i>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileClose = document.getElementById("mobile-close");

  const openMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;
    mobileNav.classList.remove("hidden");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mobileDrawer.classList.remove("translate-x-full");
        if (mobileOverlay) mobileOverlay.style.opacity = "1";
      });
    });
    mobileNav.dataset.open = "true";
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.innerHTML = '<i class="fa-solid fa-xmark text-lg"></i>';
    document.body.style.overflow = "hidden";
  };

  const closeMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;
    mobileDrawer.classList.add("translate-x-full");
    if (mobileOverlay) mobileOverlay.style.opacity = "0";
    mobileNav.dataset.open = "false";
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars text-lg"></i>';
    document.body.style.overflow = "";
    mobileNav.querySelectorAll("[data-mobile-panel]").forEach((panel) => {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
      panel.dataset.open = "false";
    });
    mobileNav.querySelectorAll("[data-mobile-icon]").forEach((icon) => {
      icon.classList.remove("rotate-180");
    });
    setTimeout(() => {
      if (mobileNav.dataset.open === "false") {
        mobileNav.classList.add("hidden");
      }
    }, 300);
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      mobileNav.dataset.open === "true" ? closeMobileNav() : openMobileNav();
    });
  }

  if (mobileClose) mobileClose.addEventListener("click", closeMobileNav);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileNav);

  if (mobileNav) {
    mobileNav.querySelectorAll('a[href^="#"], a[href^="tel:"]').forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });
  }

  navbar.querySelectorAll("[data-mobile-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const groupName = button.getAttribute("data-mobile-group");
      const panel = navbar.querySelector(`[data-mobile-panel="${groupName}"]`);
      const icon = navbar.querySelector(`[data-mobile-icon="${groupName}"]`);
      if (!panel) return;
      const isOpen = panel.dataset.open === "true";

      navbar.querySelectorAll("[data-mobile-panel]").forEach((otherPanel) => {
        if (otherPanel !== panel) {
          otherPanel.dataset.open = "false";
          otherPanel.style.maxHeight = "0px";
          otherPanel.style.opacity = "0";
        }
      });
      navbar.querySelectorAll("[data-mobile-icon]").forEach((otherIcon) => {
        if (otherIcon !== icon) otherIcon.classList.remove("rotate-180");
      });

      panel.dataset.open = String(!isOpen);
      if (isOpen) {
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.style.opacity = "1";
      }
      if (icon) icon.classList.toggle("rotate-180", !isOpen);
    });
  });
}