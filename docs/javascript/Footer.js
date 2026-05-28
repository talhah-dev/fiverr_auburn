const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <footer class="bg-[#1f1f1f] text-white">
      <div class="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div class="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-30">
          <div class="flex justify-center lg:justify-start">
            <img src="./docs/assets/logo.webp" alt="Auburn Appliance Repair Pros" class="h-20 w-auto shrink-0 sm:h-14" />
          </div>

          <div class="text-center lg:text-left">
            <p class="mx-auto max-w-5xl text-base font-semibold leading-8 text-white ">
              Home Services Campaign Disclaimer: This site is a free service to assist homeowners in connecting with local
              service providers. All contractors/providers are independent and this site does not warrant or guarantee any
              work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the
              necessary license and insurance required for the work being performed. All persons depicted in a photo or
              video are actors or models and not contractors listed on this site.
            </p>
          </div>
        </div>

        <div class="mt-10 border-t border-white/10 pt-8">
          <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p class="text-lg  text-white">© 2026 Auburn Appliance Repair</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}
