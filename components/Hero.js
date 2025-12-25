function Hero() {
    return (
        <section className="relative w-full bg-white px-2 md:px-4 pb-2" data-name="hero" data-file="components/Hero.js">
            <div className="relative w-full h-64 md:h-[500px] rounded-2xl overflow-hidden group">
                <img 
                    src={IMAGES.hero} 
                    alt="Hospital Building" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-10">
                    <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-full md:max-w-[70%] mb-6 md:mb-10 drop-shadow-lg">
                        SURGICAL ONCOLOGY<br/>DEPARTMENT KCCC
                    </h1>
                    
                    <div className="w-full flex justify-center md:justify-start">
                        <button className="bg-white text-black px-8 py-3 md:px-12 md:py-4 rounded-full font-bold tracking-wider text-sm md:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse-slow">
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}