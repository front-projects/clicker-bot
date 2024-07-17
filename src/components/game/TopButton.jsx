import { useEffect } from "react";
import { animGameTopButtons } from "../UI/animations";

export default function TopButton() {
  useEffect(() => {
    const animTitle = animGameTopButtons();
    return () => animTitle.kill();
  }, []);

  return (
    <div className="relative w-full pt-[3px] pr-[3px]" id="game-top-name">
      <div
        style={{ width: "calc(100% - 3px)" }}
        className="h-[58px]  bg-[#32363C] rounded-[26px] absolute left-[3px] top-0"
      ></div>
      <div className="relative flex items-center justify-between px-[14px] w-full bg-white rounded-[26px] border-2 border-[#32363C] px-[20px] py-[14px]">
        <div className="flex items-center gap-[13px]">
          <div className="w-[26px] h-[26px] rounded-[50%] bg-[#5B5E63]"></div>
          <div className="text-[12px]">Nick Jay</div>
        </div>
        <div className="text-[#32363C80]/50">ID: 7021930058</div>
      </div>
    </div>
  );
}
