import { LANG } from "../../util/front/get-language";
import { GiftIcon } from "../UI/icons";

export default function InviteGift() {
  return (
    <div className="w-full flex items-center border-2 border-[#32363C] rounded-[15px]  bg-white px-[20px] py-[6px]">
      <div className="py-[9px] border-r-2 border-dashed border-[#00000069] pr-[20px]">
        <GiftIcon />
      </div>
      <div className="px-[20px]">
        <h3 className="text-[14px]">
          {LANG ? "Invite a friend" : "Пригласи друга"}
        </h3>
        <p>
          <span className="text-[#168bd8]">+5000 </span>{" "}
          {LANG ? "for you and your friend" : "для тебя и твоего друга"}
        </p>
      </div>
    </div>
  );
}
