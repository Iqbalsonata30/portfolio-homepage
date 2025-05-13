function FollowSection() {
  return (
    <section className="relative px-6 py-16 bg-[#FFF8EE] border-t-4 border-black">
      {/* Decorative elements */}
      <div className="absolute top-10 right-16 w-16 h-16 bg-yellow-300 rounded-md border-2 border-black rotate-12"></div>
      <div className="absolute bottom-12 left-12 w-20 h-20 bg-blue-200 rounded-full border-2 border-black"></div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        <div>
          <h3 className="text-3xl font-bold text-black font-mono mb-2">
            Follow Me
          </h3>
          <p className="text-black font-semibold text-base bg-yellow-100 border-4 border-black p-4 rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform">
            Follow my social media accounts
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {[
            {
              href: "https://x.com/vansblue_",
              label: "Twitter page",
              icon: (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038c0 .31.036.61.105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05a4.057 4.057 0 0 0 3.292 3.959 4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/in/iqbal-sonata-555001236/",
              label: "LinkedIn profile",
              icon: (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 00-4 0" />
                </svg>
              ),
            },
            {
              href: "https://github.com/Iqbalsonata30",
              label: "GitHub account",
              icon: (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
          ].map(({ href, label, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-3 border-4 border-black rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              {icon}
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      ></div>
    </section>
  );
}

export default FollowSection;
