function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-slate-900 text-center">
      <div className="w-full max-w-full p-4 py-6">
        <span className="font-poppins text-sm font-light text-black dark:text-white">
          Copyright © {year} - Iqbal Sonata · All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default FooterSection;
