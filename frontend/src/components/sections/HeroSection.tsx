export default function Hero() {
  const img = "/assets/img/iqbalsonata.png";
  return (
    <section className="relative px-4 py-16 sm:py-24 lg:py-32 bg-[#FFF8EE]">
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-300 rounded-full border-2 border-black"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400 rounded-full border-2 border-black"></div>
      <div className="absolute top-32 right-16 w-24 h-24 bg-yellow-300 rounded-md border-2 border-black transform rotate-12"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-5xl font-bold tracking-tight text-black mb-6">
            A piece of <br />
            <span className="relative inline-block">
              <span className="relative z-10">cake.</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-[#FF7A00] -z-10"></span>
            </span>
          </h1>

          <div className="relative">
            <p className="relative bg-yellow-200 text-black text-xl font-semibold border-4 border-black p-6 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-xl leading-relaxed hover:translate-x-1 hover:translate-y-1 transition-transform duration-300">
              <span className="block text-sm uppercase text-gray-700 mb-2 tracking-wider">
                Hey there!
              </span>
              My name is <span className="underline decoration-wavy decoration-pink-500">Iqbal Sonata</span>.
              I'm a software engineer interested in <strong>Cloud Computing</strong>,
              <strong>System Programming</strong>, and the <span className="italic">Future of Computing</span>.
            </p>
          </div>

          <button className="mt-8 bg-[#FF7A00] hover:bg-[#FF8F00] text-black font-bold py-2 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Let's Connect
          </button>
        </div>

        <div className="relative z-10">
          <div className="relative mx-auto max-w-sm">
            <div className="bg-pink-200 border-4 border-black rounded-3xl p-4 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <div className="w-full aspect-square bg-gray-200 rounded-xl overflow-hidden border-2 border-black">
                <img
                  src={img}
                  alt="Iqbal Sonata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating icon - Chart */}
            <div className="absolute -left-6 top-12 bg-teal-300 border-2 border-black p-3 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <rect x="2" y="10" width="4" height="10" fill="currentColor" />
                <rect x="8" y="4" width="4" height="16" fill="currentColor" />
                <rect x="14" y="2" width="4" height="18" fill="currentColor" />
                <path d="M4 8L12 2L20 8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Floating icon - Eye */}
            <div className="absolute -right-6 bottom-16 bg-yellow-300 border-2 border-black p-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M12 5C7 5 2.73 8.11 1 12C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 12C21.27 8.11 17 5 12 5ZM12 16C9.24 16 7 13.76 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 13.76 14.76 16 12 16ZM12 8C10.34 8 9 9.34 9 11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11C15 9.34 13.66 8 12 8Z" fill="currentColor" />
              </svg>
            </div>

            {/* Code icon */}
            <div className="absolute -top-6 -right-2 bg-blue-200 border-2 border-black p-3 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-12">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-2 right-6 bg-green-300 border-2 border-black px-3 py-1 rounded-full text-xs font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
              This is created for being cool
            </div>
          </div>
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>
    </section>
  );
}