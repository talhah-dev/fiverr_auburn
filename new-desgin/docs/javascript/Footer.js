const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
<footer class="bg-[#faf7f5] relative overflow-hidden">

    <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(101,32,48,0.05)_0%,transparent_65%)] pointer-events-none"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#652030]/20 to-transparent"></div>

    <div class="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 lg:px-14 lg:pt-20">

        <div class="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-10">

            <div class="flex flex-col gap-6">
                <img src="./docs/assets/logo.webp" alt="Auburn Appliance Repair Pros" class="h-14 w-auto" />
                <p class="text-[#533e3e]/80 text-sm leading-[1.85] font-light max-w-xs">
                    Connecting Auburn homeowners with trusted, local appliance repair technicians for every major brand and model.
                </p>
                <a href="tel:5304478105"
                    class="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#652030] to-[#4a1622] text-white text-xs font-semibold tracking-[0.12em] uppercase px-5 py-3 rounded-full shadow-[0_4px_16px_rgba(101,32,48,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(101,32,48,0.45)] transition-all duration-300 w-fit">
                    <i class="fa-solid fa-phone-volume text-[#e2c99a] text-xs"></i>
                    (530) 447-8105
                </a>
            </div>

            <div>
                <p class=" font-bold tracking-[0.15em] uppercase text-[#652030] mb-4">Quick Links</p>
                <div class="w-6 h-[1.5px] bg-gradient-to-r from-[#652030] to-[#c9a96e] rounded-full mb-5"></div>
                <ul class="flex flex-col gap-3 font-medium">
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Home</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Contact</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>About</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Resources</a></li>
                </ul>
            </div>

            <div>
                <p class=" font-bold tracking-[0.15em] uppercase text-[#652030] mb-4">Services</p>
                <div class="w-6 h-[1.5px] bg-gradient-to-r from-[#652030] to-[#c9a96e] rounded-full mb-5"></div>
                <ul class="flex font-medium flex-col gap-3">
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Refrigerator Repair</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Dishwasher Repair</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Washer &amp; Dryer Repair</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Stove &amp; Oven Repair</a></li>
                </ul>
            </div>

            <div>
                <p class=" font-bold tracking-[0.15em] uppercase text-[#652030] mb-4">Major Brands</p>
                <div class="w-6 h-[1.5px] bg-gradient-to-r from-[#652030] to-[#c9a96e] rounded-full mb-5"></div>
                <ul class="flex flex-col font-medium gap-3">
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Samsung</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Maytag</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>GE</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Kenmore</a></li>
                    <li><a href="#" class="text-[#533e3e]/80 text-sm hover:text-[#652030] transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#c9a96e]/50 group-hover:bg-[#652030] transition-colors duration-200 shrink-0"></span>Whirlpool</a></li>
                </ul>
            </div>

            <div>
                <p class="font-bold tracking-[0.15em] uppercase text-[#652030] mb-4">Contact Us</p>
                <div class="w-6 h-[1.5px] bg-gradient-to-r from-[#652030] to-[#c9a96e] rounded-full mb-5"></div>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-start gap-3">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#652030] to-[#4a1622] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(101,32,48,0.25)]">
                            <i class="fa-solid fa-phone text-[#e2c99a] text-[0.55rem]"></i>
                        </div>
                        <div>
                            <p class="text-[#533e3e]/80 text-[0.6rem] uppercase tracking-widest mb-0.5">Phone</p>
                            <a href="tel:5304478105" class="text-[#533e3e]/80 font-medium text-sm hover:text-[#652030] transition-colors duration-200">(530) 447-8105</a>
                        </div>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#652030] to-[#4a1622] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(101,32,48,0.25)]">
                            <i class="fa-solid fa-location-dot text-[#e2c99a] text-[0.55rem]"></i>
                        </div>
                        <div>
                            <p class="text-[#533e3e]/80 text-[0.6rem] uppercase tracking-widest mb-0.5">Location</p>
                            <p class="text-[#533e3e]/80 font-medium text-sm">Auburn, CA &amp; Surrounding Areas</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-3">
                        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-[#652030] to-[#4a1622] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(101,32,48,0.25)]">
                            <i class="fa-solid fa-clock text-[#e2c99a] text-[0.55rem]"></i>
                        </div>
                        <div>
                            <p class="text-[#533e3e]/80 text-[0.6rem] uppercase tracking-widest mb-0.5">Hours</p>
                            <p class="text-[#533e3e]/80 font-medium text-sm">Mon–Sat: 8am – 6pm</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div class="mt-14 border-t border-[#652030]/10 pt-8">
            <div class="flex flex-col items-center justify-between gap-3 sm:flex-row">
                <p class="text-[#533e3e]/80 text-xs">© 2026 Auburn Appliance Repair. All rights reserved.</p>
                <div class="flex items-center gap-1.5 text-[#533e3e]/85 text-xs">
                    <i class="fa-solid fa-shield-halved text-[#652030]/80 text-xs"></i>
                    Licensed &amp; Insured Service
                </div>
            </div>
        </div>

    </div>
</footer>
  `;
}
