import TypingText from "./TypingText.tsx";

function Hero() {
  const img = "/assets/img/Iqbal Sonata.JPG";
  return (
    <section className="bg-slate-200 dark:bg-slate-800 dark:text-white text-center md:text-start flex md:flex-row items-center justify-center flex-col  md:gap-7 ">
      <div className="container max-w-lg pt-10 pr-10 pl-10 pb-4">
        <TypingText
          text="holla! I'm Iqbal"
          className="text-3xl capitalize font-extrabold font-mono mb-2 text-zinc-800 dark:text-white text-start"
          speed={50}
        />
        <p className="md:font-mono font-serif text-gray-900/85 dark:text-slate-50/90 md:text-sm text-base md:text-start text-justify text-pretty">
          I'm an undergraduate with an associate degree in Computer Engineering
          from{" "}
          <span className="italic font-bold">
            Institute Teknologi Mitra Gama
          </span>
          . I am passionate about software development, particularly
          <span className="italic font-bold"> Backend Development</span>,
          <span className="italic font-bold"> Cloud Computing</span>,
          <span className="italic font-bold"> System Programming</span>.
        </p>
      </div>
      <div className="p-2 mb-2 md:m-2 max-w-xs max-h-fit ">
        <img
          src={img}
          alt="Iqbal Sonata"
          className="md:rounded-full rounded-md md:shadow-2xl shadow-lg shadow-gray-500 md:dark:shadow-lg md:dark:shadow-cyan-100"
        />
      </div>
    </section>
  );
}

export default Hero;
