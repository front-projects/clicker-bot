import WebApp from "@twa-dev/sdk";
import { useRef, useState } from "react";
import Collapsible from "react-collapsible";
import { ArrowForFaqIcon } from "../UI/icons";
import gsap from "gsap";

export default function FaqItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef();
  const handleToggle = () => {
    const timeline = gsap.timeline({ defaults: { duration: 0.1 } });

    timeline
      .fromTo(itemRef.current, { x: 0, y: 0 }, { x: "3px", y: "-3px" })
      .fromTo(itemRef.current, { x: "3px", y: "-3px" }, { x: 0, y: 0 });

    setIsOpen(!isOpen);
    WebApp.HapticFeedback.impactOccurred("light");
  };

  return (
    <div className="w-full relative mt-[13px] pt-[3px] pr-[3px]">
      <div
        style={{ width: "calc(100% - 3px)" }}
        className="h-[74px]  bg-[#32363C] rounded-[15px] absolute left-[3px] top-0"
      ></div>
      <div
        className="w-full relative rounded-[15px] flex flex-col"
        ref={itemRef}
      >
        <div
          onClick={handleToggle}
          className={`w-full bg-white relative rounded-[15px] text-[12px] border-2 border-[#32363C] p-[26px] flex items-center cursor-pointer`}
        >
          {title}
          <div className="ml-auto">
            {isOpen ? (
              <div className="rotate-[180deg]">
                <ArrowForFaqIcon />
              </div>
            ) : (
              <div>
                <ArrowForFaqIcon />
              </div>
            )}
          </div>
        </div>
        <Collapsible trigger="" open={isOpen} className="w-full">
          <div className="py-[20px] px-[26px] text-[11px]">{children}</div>
        </Collapsible>
      </div>
    </div>
  );
}
