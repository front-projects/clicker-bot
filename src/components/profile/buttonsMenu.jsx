import { useEffect } from "react";
import { LANG } from "../../util/front/get-language";
import { MinusIcon } from "../UI/icons";
import {
  animProfileButtonsLeft,
  animProfileButtonsRight,
} from "../UI/animations";

export default function ButtonsMenu() {
  useEffect(() => {
    const animLeft = animProfileButtonsLeft();
    const animRight = animProfileButtonsRight();

    return () => {
      animLeft.kill();
      animRight.kill();
    };
  }, []);

  return (
    <div className="w-full grid grid-cols-2 gap-[4px]">
      <button
        className="relative w-full pt-[3px] pr-[2px]"
        id="buttons-menu-left-button"
      >
        <div
          style={{ width: "calc(100% - 2px)" }}
          className="h-[54px]  bg-[#32363C] rounded-[27px] absolute left-[2px] top-0"
        ></div>
        <div className="relative flex items-center justify-center gap-[4px] w-full bg-white rounded-[27px] border-2 border-[#32363C] px-[12px] py-[12px]">
          <div className="flex items-center h-[26px] min-w-[26px]  border-2 rounded-[50%] border-[#32363C] flex items-center justify-center text-[20px]">
            +
          </div>
          <div className="text-[12px] whitespace-nowrap">
            {LANG ? "MONEY DEPOSIT" : "ДЕПОЗИТ"}
          </div>
        </div>
      </button>
      <button
        className="relative w-full pt-[3px] pr-[2px]"
        id="buttons-menu-right-button"
      >
        <div
          style={{ width: "calc(100% - 2px)" }}
          className="h-[54px]  bg-[#32363C] rounded-[27px] absolute left-[2px] top-0"
        ></div>
        <div className="relative flex items-center justify-center gap-[4px]  w-full bg-white rounded-[27px] border-2 border-[#32363C] px-[12px] py-[12px]">
          <div className="flex items-center h-[26px] min-w-[26px]  border-2 rounded-[50%] border-[#32363C] flex items-center justify-center">
            <MinusIcon />
          </div>
          <div className="text-[12px] whitespace-nowrap">
            {LANG ? "MONEY WITHDRAW" : "СНЯТЬ ДЕНЬГИ"}
          </div>
        </div>
      </button>
    </div>
  );
}
