const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
    <header class="fixed left-0 top-0 z-[9999] w-full border-b border-black/5 bg-white/95 backdrop-blur-sm shadow-sm shadow-black/5">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" class="flex shrink-0 items-center gap-3">
          <img src="./docs/assets/logo.webp" alt="Auburn Appliance Repair Pros" class="h-14 w-auto sm:h-16" />
        </a>

        <nav class="hidden items-center gap-8 xl:flex">
          <a href="#home" class=" font-medium text-[#3e3e3e] transition hover:text-[#652030]">Home</a>

          <div class="group relative">
            <a href="#services" class="inline-flex items-center  font-medium text-[#3e3e3e] transition hover:text-[#652030]">
              Services
              <i class="fa-solid fa-chevron-down ml-2 text-sm transition group-hover:translate-y-0.5"></i>
            </a>

            <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="min-w-80 overflow-hidden rounded-sm bg-[#5d4645] shadow-2xl shadow-black/20">
                <a href="#services" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Refrigerator Repair</a>
                <a href="#services" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Dishwasher Repair</a>
                <a href="#services" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Washer & Dryer Repair</a>
                <a href="#services" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Stove & Oven Repair</a>
              </div>
            </div>
          </div>

          <div class="group relative">
            <a href="#brands" class="inline-flex items-center  font-medium text-[#3e3e3e] transition hover:text-[#652030]">
              Major Brands
              <i class="fa-solid fa-chevron-down ml-2 text-sm transition group-hover:translate-y-0.5"></i>
            </a>

            <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="min-w-80 overflow-hidden rounded-sm bg-[#5d4645] shadow-2xl shadow-black/20">
                <a href="#brands" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Samsung</a>
                <a href="#brands" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Maytag</a>
                <a href="#brands" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">GE</a>
                <a href="#brands" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Kenmore</a>
                <a href="#brands" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Whirlpool</a>
              </div>
            </div>
          </div>

          <div class="group relative">
            <a href="#about" class="inline-flex items-center  font-medium text-[#3e3e3e] transition hover:text-[#652030]">
              About
              <i class="fa-solid fa-chevron-down ml-2 text-sm transition group-hover:translate-y-0.5"></i>
            </a>

            <div class="invisible absolute left-0 top-full z-50 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="min-w-56 overflow-hidden rounded-sm bg-[#5d4645] shadow-2xl shadow-black/20">
                <a href="#resources" class="block px-6 py-6  font-semibold text-white transition hover:bg-[#652030]">Resources</a>
              </div>
            </div>
          </div>

          <a href="#footer" class=" font-medium text-[#3e3e3e] transition hover:text-[#652030]">Contact</a>
        </nav>

        <a
          href="tel:5304478105"
          class="hidden rounded-md bg-[#652030] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#533e3e] sm:inline-flex"
        >
          CALL US NOW (530) 447-8105
        </a>

        <button
          id="nav-toggle"
          type="button"
          class="inline-flex h-12 w-12 items-center justify-center rounded-md border border-[#e5e5e5] text-[#3e3e3e] transition hover:border-[#652030] hover:text-[#652030] xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

      <!-- MOBILE NAV -->
      <div
        id="mobile-nav"
        class="fixed inset-0 z-[99999] hidden h-screen w-screen bg-black/70 opacity-0 transition-opacity duration-300 xl:hidden"
      >
        <div
          id="mobile-drawer"
          class="absolute right-0 top-0 flex h-screen min-h-screen w-[90%] max-w-md translate-x-full flex-col overflow-y-auto bg-black shadow-2xl transition-transform duration-300 ease-out"
        >
          <div class="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <img
              src="./docs/assets/logo.webp"
              alt="Logo"
              class="h-12 w-auto"
            />

            <button
              id="mobile-close"
              type="button"
              class="inline-flex h-12 w-12 items-center justify-center rounded-md border border-white/10 text-white transition hover:text-[#652030]"
              aria-label="Close navigation"
            >
              <i class="fa-solid fa-xmark text-2xl"></i>
            </button>
          </div>

          <div class="flex flex-1 flex-col px-5 pb-10 pt-4">
            <a href="#home" class="block border-b border-white/10 py-4 text-xl font-medium text-[#652030] transition hover:text-white">
              Home
            </a>

            <!-- SERVICES -->
            <button
              data-mobile-group="services"
              type="button"
              class="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-xl font-medium text-white transition hover:text-[#652030]"
            >
              <span>Services</span>
              <i
                data-mobile-icon="services"
                class="fa-solid fa-chevron-down text-sm transition-transform duration-300"
              ></i>
            </button>

            <div
              data-mobile-panel="services"
              class="max-h-0 overflow-hidden border-b border-white/10 opacity-0 transition-all duration-300 ease-out"
            >
              <a href="#services" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Refrigerator Repair</a>
              <a href="#services" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Dishwasher Repair</a>
              <a href="#services" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Washer & Dryer Repair</a>
              <a href="#services" class="block py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Stove & Oven Repair</a>
            </div>

            <!-- BRANDS -->
            <button
              data-mobile-group="brands"
              type="button"
              class="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-xl font-medium text-white transition hover:text-[#652030]"
            >
              <span>Major Brands</span>
              <i
                data-mobile-icon="brands"
                class="fa-solid fa-chevron-down text-sm transition-transform duration-300"
              ></i>
            </button>

            <div
              data-mobile-panel="brands"
              class="max-h-0 overflow-hidden border-b border-white/10 opacity-0 transition-all duration-300 ease-out"
            >
              <a href="#brands" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Samsung</a>
              <a href="#brands" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Maytag</a>
              <a href="#brands" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">GE</a>
              <a href="#brands" class="block border-b border-white/10 py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Kenmore</a>
              <a href="#brands" class="block py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">Whirlpool</a>
            </div>

            <!-- ABOUT -->
            <button
              data-mobile-group="about"
              type="button"
              class="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-xl font-medium text-white transition hover:text-[#652030]"
            >
              <span>About</span>
              <i
                data-mobile-icon="about"
                class="fa-solid fa-chevron-down text-sm transition-transform duration-300"
              ></i>
            </button>

            <div
              data-mobile-panel="about"
              class="max-h-0 overflow-hidden border-b border-white/10 opacity-0 transition-all duration-300 ease-out"
            >
              <a href="#resources" class="block py-4 pl-8 text-lg text-white transition hover:bg-[#652030]">
                Resources
              </a>
            </div>

            <a href="#footer" class="block border-b border-white/10 py-4 text-xl font-medium text-white transition hover:text-[#652030]">
              Contact
            </a>

            <a
              href="tel:5304478105"
              class="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#652030] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#652030]"
            >
              CALL US NOW (530) 447-8105
            </a>
          </div>
        </div>
      </div>
    </header>
  `;

  const navToggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileClose = document.getElementById("mobile-close");

  // OPEN NAV
  const openMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;

    mobileNav.classList.remove("hidden");

    requestAnimationFrame(() => {
      mobileNav.style.opacity = "1";
      mobileDrawer.classList.remove("translate-x-full");
    });

    mobileNav.dataset.open = "true";

    navToggle.setAttribute("aria-expanded", "true");
    navToggle.innerHTML = '<i class="fa-solid fa-xmark text-xl"></i>';

    document.body.classList.add("overflow-hidden");
  };

  // CLOSE NAV
  const closeMobileNav = () => {
    if (!mobileNav || !mobileDrawer || !navToggle) return;

    mobileDrawer.classList.add("translate-x-full");
    mobileNav.style.opacity = "0";

    mobileNav.dataset.open = "false";

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';

    document.body.classList.remove("overflow-hidden");

    // CLOSE ALL DROPDOWNS
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

  // TOGGLE NAV
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.dataset.open === "true";

      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  // CLOSE BUTTON
  if (mobileClose) {
    mobileClose.addEventListener("click", closeMobileNav);
  }

  // CLICK OUTSIDE
  if (mobileNav) {
    mobileNav.addEventListener("click", (event) => {
      if (event.target === mobileNav) {
        closeMobileNav();
      }
    });
  }

  // CLOSE ON LINK CLICK
  if (mobileNav) {
    mobileNav.querySelectorAll('a[href^="#"], a[href^="tel:"]').forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });
  }

  // MOBILE ACCORDIONS
  const mobileGroups = navbar.querySelectorAll("[data-mobile-group]");

  mobileGroups.forEach((button) => {
    button.addEventListener("click", () => {
      const groupName = button.getAttribute("data-mobile-group");

      const panel = navbar.querySelector(`[data-mobile-panel="${groupName}"]`);

      const icon = navbar.querySelector(`[data-mobile-icon="${groupName}"]`);

      if (!panel) return;

      const isOpen = panel.dataset.open === "true";

      panel.dataset.open = String(!isOpen);

      if (isOpen) {
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.style.opacity = "1";
      }

      if (icon) {
        icon.classList.toggle("rotate-180", !isOpen);
      }
    });
  });
}
