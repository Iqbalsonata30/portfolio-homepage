function Description() {
  const img = "/assets/img/Iqbal Sonata.JPG";
  const zig_img = "/assets/img/zig-original.svg";
  const go_img = "/assets/img/go-original.svg";
  const ts_img = "/assets/img/typescript-original.svg";
  const php_img = "/assets/img/php-original.svg";

  return (
    <main className="container  max-w-4xl mx-auto bg-white dark:bg-slate-900 mb-10">
      <section className="pt-7 px-7  flex flex-col justify-center items-center gap-2 md:gap-4 ">
        <div className="block relative  rounded-full shadow-lg dark:shadow-md dark:shadow-cyan-200 ">
          <img
            src={img}
            alt="Iqbal Sonata"
            className="object-cover w-48 h-48  rounded-full ring ring-slate-200"
          />
        </div>
        <p className="font-bold font-serif text-2xl text-black dark:text-white">
          Iqbal Sonata
        </p>
      </section>
      <article className="p-4 text-base md:text-lg text-justify tracking-tight text-slate-800 dark:text-gray-300 antialiased font-light font-serif text-pretty">
        <p>
          I am currently a fresh graduate with an associate degree in Computer
          Engineering from Institute Teknologi Mitra Gama. My focus has been on
          building a strong foundation in
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Backend Development
          </span>
          ,
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Cloud Computing
          </span>
          ,
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            System Programming
          </span>
          . Recently, I’ve been honing my skills through various projects,
          particularly working with
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Golang
          </span>
          ,
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Javascript
          </span>
          ,
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Zig
          </span>
          ,
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            PHP
          </span>
          , and further developing my knowledge of cloud technologies through
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Google Cloud Platform.
          </span>
        </p>
        <p>
          My journey in software development started during my studies, where I
          built hands-on experience in software engineering principles. In
          particular, I completed the
          <span className="italic font-bold text-gray-700 dark:text-slate-50/90">
            {" "}
            Bangkit Academy{" "}
          </span>
          program in 2023, where I gained practical experience with GCP,
          developing scalable applications.
        </p>
      </article>

      <article className="p-4">
        <h1 className="text-xl font-bold font-mono text-black dark:text-white text-center md:text-start ">
          🛠️ Experience :
        </h1>
        <div className="mt-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-serif">
            <h3 className="font-black text-black dark:text-white text-lg">
              IT Support Internship at Permata Hati Hospital
            </h3>
            <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
              July 2023 - August 2023
            </p>
          </div>
          <div className="pt-2 font-normal font-serif">
            <p className="text-sm md:text-lg antialiased  text-justify text-slate-800 dark:text-gray-300 ">
              Permata Hati Hospital is one of the largest hospitals in
              <em> Duri,Riau</em>.I had the opportunity to manage and configure
              the hospital's networking systems. This experience allowed me to
              contribute to ensuring seamless connectivity and reliable
              communication within a its environment
            </p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-serif">
            <h3 className="font-black text-black dark:text-white text-lg">
              Bangkit Academy led by Google, Goto, & Traveloka
            </h3>
            <p className="text-gray-500 font-semibold dark:text-gray-400 text-sm">
              August 2023 - January 2024
            </p>
          </div>
          <div className="pt-2 font-normal font-serif">
            <p className="text-sm md:text-lg antialiased  text-justify text-slate-800 dark:text-gray-300 ">
              Bangkit Academy is a career preparation program that was led by
              Google, Tokopedia & Traveloka. I completed the Bangkit Academy
              program on Cloud Computing specialization held in late 2023, where
              I gained practical experience such as Google Cloud Platform,
              developing scalable applications. Additionally, I have developed
              essential soft skills, including effective communication,
              problem-solving, and teamwork
            </p>
          </div>
        </div>
      </article>

      <article className="p-4">
        <h1 className="text-xl font-bold font-mono text-black dark:text-white text-center md:text-start ">
          💻 Programming Languages:
        </h1>
        <div className="mt-3 min-h-fit">
          <ul className="flex flex-row justify-start flex-wrap gap-3 md:gap-5 text-black dark:text-white">
            <li className="flex justify-center items-center">
              <img src={go_img} alt="Go" width="40" height="40" />
              Go
            </li>
            <li className="flex justify-center items-center gap-1">
              <img src={zig_img} alt="Zig" width="40" height="40" />
              Zig
            </li>
            <li className="flex justify-center items-center gap-1">
              <img src={ts_img} alt="Typescript" width="40" height="40" />
              Typescript
            </li>
            <li className="flex justify-center items-center gap-1">
              <img src={php_img} alt="PHP" width="40" height="40" />
              PHP
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}

export default Description;
