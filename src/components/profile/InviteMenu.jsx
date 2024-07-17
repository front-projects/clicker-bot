import { LANG } from "../../util/front/get-language";
import { CopyIcon } from "../UI/icons";
import InviteGift from "./InviteGift";

export default function InviteMenu() {
  return (
    <div className="w-full" id="invite-menu">
      <InviteGift />
      <div className="w-full flex mt-4 gap-[5px]">
        <button
          className="bg-[#32363C] rounded-[27px] w-[80%] text-[#EDF1F4] h-[54px] text-[12px]"
          style={{ width: "calc(100% - 95px)" }}
        >
          {LANG ? "INVITE A FRIEND" : "ПРИГЛАСИТЬ ДРУГА"}
        </button>
        <button className="relative w-[90px] pt-[3px] pr-[3px]">
          <div
            style={{ width: "calc(100% - 3px)" }}
            className="h-[54px]  bg-[#32363C] rounded-[27px] absolute left-[2px] top-0"
          ></div>
          <div className="relative flex items-center justify-center gap-[4px] w-full bg-white rounded-[27px] border-2 border-[#32363C] px-[12px] h-[54px]">
            <CopyIcon />
          </div>
        </button>
      </div>
    </div>
  );
}
