const lenis = new Lenis({
  autoRaf: true,
});

AOS.init({
  once: true,
  duration: 900,
  easing: "ease-out-cubic",
});

const floatingActions = document.createElement("div");
floatingActions.id = "floating-actions";
floatingActions.className =
  "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4";
floatingActions.innerHTML = `
  <a
    href="https://wa.me/15304478105"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact us on WhatsApp"
    class="group inline-flex items-center gap-3"
  >
    <span
      class="whitespace-nowrap rounded-2xl bg-white px-4 py-2 font-medium text-[#333333] shadow-lg shadow-black/10 transition-all duration-300 group-hover:hidden"
    >
      Contact us today
    </span>
    <span
      class="hidden whitespace-nowrap rounded-2xl bg-white px-4 py-2  font-medium text-[#333333] shadow-lg shadow-black/10 transition-all duration-300 group-hover:inline-flex"
    >
      Phone
    </span>
    <span class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform duration-300 group-hover:scale-105">
      <i class="fa-brands fa-whatsapp text-3xl"></i>
    </span>
  </a>
`;

document.body.appendChild(floatingActions);
