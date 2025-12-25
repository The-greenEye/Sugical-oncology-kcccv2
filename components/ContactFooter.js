function ContactFooter() {
    return (
        <footer className="w-full mt-auto fade-in" style={{animationDelay: '0.6s'}} data-name="contact-footer" data-file="components/ContactFooter.js">
            {/* Yellow Contact Strip */}
            <div className="bg-[var(--secondary-yellow)] px-4 md:px-8 py-8 md:py-12 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
                
                {/* Left Side: Character & Question */}
                <div className="flex items-end justify-center md:justify-start relative z-10 w-full md:w-1/3 order-2 md:order-1">
                    <div className="animate-float relative">
                         <div className="icon-circle-help text-[var(--primary-red)] text-7xl md:text-8xl absolute -top-12 -right-6 font-bold filter drop-shadow-md"></div>
                         <div className="w-20 h-28 md:w-24 md:h-36 bg-white rounded-t-full rounded-b-2xl shadow-xl flex items-center justify-center border-4 border-white">
                            <div className="icon-search text-gray-400 text-3xl md:text-4xl"></div>
                         </div>
                    </div>
                </div>

                {/* Center: Info */}
                <div className="flex flex-col items-center justify-center z-10 w-full md:w-1/3 text-center order-1 md:order-2">
                    <div className="bg-white rounded-full px-6 py-2 mb-3 shadow-lg transform hover:scale-105 transition-transform">
                        <span className="font-cairo font-bold text-[var(--primary-red)] text-sm md:text-base">للاستفسار أو التسجيل</span>
                    </div>
                    <div className="font-bold text-black text-sm md:text-lg tracking-wide mb-1">SAYED SALAMA</div>
                    <div className="font-black text-black text-4xl md:text-6xl animate-pulse-slow tabular-nums">51147478</div>
                </div>

                {/* Right: QR Code */}
                <div className="flex justify-center md:justify-end items-center z-10 w-full md:w-1/3 order-3">
                    <div className="bg-white p-3 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-black pattern-grid-lg relative flex items-center justify-center group cursor-pointer">
                             {/* Mock QR Pattern */}
                             <div className="absolute inset-0 border-4 border-white border-dashed opacity-50"></div>
                             <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform">
                                <div className="icon-phone text-white text-lg md:text-xl fill-current"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="bg-white py-4 text-center border-t border-gray-100">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-wider uppercase">
                    © 2026 All rights reserved for Ahmed Shehata Nagy.
                </p>
            </div>
        </footer>
    );
}