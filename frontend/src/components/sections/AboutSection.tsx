export default function AboutSection() {
  const img = "/assets/img/iqbalsonata.png";
  const zig_img = "/assets/img/zig-original.svg";
  const go_img = "/assets/img/go-original.svg";
  const ts_img = "/assets/img/typescript-original.svg";
  const php_img = "/assets/img/php-original.svg";


  return (
    <div className="min-h-screen  p-6 font-sans text-black">
      {/* Header */}
      <section
        className="
    relative p-6 border-[3px] border-black rounded-xl
    shadow-[6px_6px_0_0_rgba(0,0,0,1)] max-w-md mx-auto mb-10
    flex flex-col items-center space-y-4
bg-[#FFF8EE]
  "
      >
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        ></div>

        {/* Icon */}
        <div className="absolute -top-3 -left-3 bg-cyan-300 border-2 border-black p-2 rounded-full z-10">
          <span role="img" aria-label="icon">📌</span>
        </div>

        {/* Image Container */}
        <div className="border-[3px] border-black rounded-lg p-1 bg-pink-200">
          <img
            src={img}
            alt="Iqbal Sonata"
            className="w-32 h-32 rounded-md border-[3px] border-black object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold font-mono text-black">
          Iqbal Sonata
        </h1>

        {/* Badge */}
        <span className="absolute -bottom-3 right-3 bg-green-300 text-black border-[2px] border-black px-2 py-1 rounded-full text-xs font-semibold">
          The most wanted person
        </span>
      </section>


      <section className="max-w-3xl mx-auto border border-black p-6 rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white">
        <p className="text-sm text-justify">
          I'm a software engineer who's interested in <span className="italic">Software Programming</span>. My focus has been on
          building a strong foundation in
          <span className="italic ">
            {" "}
            Backend Development
          </span>
          ,
          <span className="italic ">
            {" "}
            Cloud Computing
          </span>
          ,
          <span className="italic">
            {" "}
            System Programming
          </span>
          . Recently, I’ve been honing my skills through various projects,
          particularly working with
          <span className="italic">
            {" "}
            Golang
          </span>
          ,
          <span className="italic ">
            {" "}
            Typescript
          </span>
          ,
          <span className="italic ">
            {" "}
            Zig
          </span>
          ,
          <span className="italic ">
            {" "}
            PHP
          </span>
          , and further developing my knowledge of cloud technologies.
        </p>
      </section>

      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-mono mb-4">🛠 Experience</h2>

        <div className="space-y-6">
          <div className="p-4 border border-black bg-white rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex justify-between font-semibold items-center">
              <span>IT Support Internship at Permata Hati Hospital</span>
              <span className="text-sm ">
                July - August 2023
              </span>
            </div>
            <p className="text-sm mt-2 text-justify">
              Permata Hati Hospital is one of the largest hospitals in
              <em> Duri,Riau</em>. I had the opportunity to manage and configure
              the hospital's networking systems. This experience allowed me to
              contribute to ensuring seamless connectivity and reliable
              communication within a its environment
            </p>
          </div>

          <div className="p-4 border border-black bg-white rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex justify-between font-semibold items-center">
              <span>Bangkit Academy by Google, Goto & Traveloka</span>
              <span className="text-sm ">
                Aug 2023 - Jan  2024
              </span>
            </div>
            <p className="text-sm mt-2 text-justify">
              Bangkit Academy is a career preparation program that was led by
              Google, Tokopedia & Traveloka. I completed the Bangkit Academy
              program on Cloud Computing specialization held in late 2023, where
              I gained practical experience such as Google Cloud Platform,
              developing scalable applications. Additionally, I have developed
              essential soft skills, including effective communication,
              problem-solving, and teamwork
            </p>
          </div>


          <div className="p-4 border border-black bg-white rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex justify-between font-semibold items-center">
              <span>DevOps Engineer at MNC Pictures</span>
              <span className="text-sm ">
                Maret 2025 - Present
              </span>
            </div>
            <p className="text-sm mt-2 text-justify">
              As a DevOps Engineer at MNC Pictures, I am responsible for automating infrastructure,
              managing CI/CD pipelines, and ensuring the reliability and scalability of our applications.
              I work closely with development and operations teams to streamline deployment processes,
              monitor system performance, and maintain a secure, stable production environment.
              This role allows me to contribute to the continuous improvement of
              our engineering workflow and deliver high-quality software at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mt-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-mono mb-4">
          💻 Programming Languages
        </h2>
        <div className="flex flex-wrap gap-4">
          {[
            { src: go_img, name: "Go" },
            { src: zig_img, name: "Zig" },
            { src: ts_img, name: "TypeScript" },
            { src: php_img, name: "PHP" },
          ].map(({ src, name }) => (
            <div
              key={name}
              className="p-2 border border-black bg-white rounded-md shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center gap-2"
            >
              <img src={src} alt={name} className="w-6 h-6" />
              <span className="font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div >
  );
}
