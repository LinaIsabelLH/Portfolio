
const Footer = () => {
  return (
    <div className="flex flex-wrap z-10 justify-center items-center mt-auto pb-4 w-full gap-x-2.5 gap-y-0 max-[1100px]:w-[calc(100%-40px)] max-[1100px]:h-auto max-[1100px]:p-[15px_20px] max-[1100px]:gap-[5px]">
      <p className="text-zinc-100">
        Site créé en React et Next, hébergé par Vercel :&nbsp;
      </p>
      <a
        href="https://github.com/LinaIsabelLH/Portfolio"
        target="blank"
        className="text-zinc-100 hover:underline decoration-orange-400"
      >
        <p className="text-zinc-100">Voir le projet sur Github</p>
      </a>
    </div>
  );
};

export default Footer;
