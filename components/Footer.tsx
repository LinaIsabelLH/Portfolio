const Footer = () => {
  return (
    <div className="flex-col z-10 justify-center items-center mt-auto pb-4 w-full gap-x-2.5 gap-y-0 max-[1100px]:w-[calc(100%-40px)] max-[1100px]:h-auto max-[1100px]:p-[15px_20px] max-[1100px]:gap-[5px] max-[970px]:text-center max-[430px]:px-2">
      <div className="flex flew-wrap justify-center">
        <p className="text-zinc-100">
        React • Next.js • Vercel •&nbsp;
        </p>
        <a
          href="https://github.com/LinaIsabelLH/Portfolio"
          target="blank"
          className="text-zinc-100 hover:underline decoration-orange-400"
        >
          <p className="text-zinc-100 font-bold">Github</p>
        </a>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-zinc-100 text-sm">© 2025 Lina Isabel Londono Hidalgo</p>
      </div>
    </div>
  );
};

export default Footer;
