import Image from "next/image";
import { scrollToSection } from "@/utils/scroll";

interface ScrollButtonsProps {
idSection: string;
}

const ScrollButtons: React.FC<ScrollButtonsProps> = ({idSection})=>{
  
  return (
    <>
      <div className="flex w-[50%] justify-end self-center">
        <button
          className="text-3xl pt-4 animate-bounce cursor-pointer"
          onClick={() => scrollToSection(idSection)}
        >
          <Image
            src="/img/arrowDown.png"
            alt="arrow to scroll"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="flex w-[50%] justify-end self-center">
        <button
          className="text-3xl mt-0 pr-25 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/img/returnHome.png"
            alt="arrow to return to home page"
            width={50}
            height={50}
          />
        </button>
      </div>
    </>
  );
};
export default ScrollButtons;
