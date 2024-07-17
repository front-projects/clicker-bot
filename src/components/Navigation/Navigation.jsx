import { useNavigate, useLocation } from "react-router-dom";
import { FaqIcon, GameIcon, ProfileIcon } from "../UI/icons";
import gsap from "gsap";
import WebApp from "@twa-dev/sdk";
import { LANG } from "../../util/front/get-language";

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const linkTo = (to) => {
    WebApp.HapticFeedback.impactOccurred("soft");

    let left;
    to == "game"
      ? (left = "50%")
      : to == "faq"
        ? (left = "80%")
        : (left = "20%");

    gsap.to("#navigation-icon", { left: left });
    setTimeout(() => {
      navigate(to);
    }, 100);
  };

  return (
    <div
      className="fixed bottom-[10px] w-full flex items-center justify-center h-[106px] text-[12px]"
      id="navigation"
    >
      <div
        className={`absolute flex items-center justify-center -translate-x-1/2 ${pathname.includes("profile") ? "left-[20%]" : pathname.includes("game") ? "left-[50%]" : "left-[80%]"}`}
        id="navigation-icon"
      >
        <div className="min-h-[93px] min-w-[89px] relative">
          <div className="bg-white rounded-[50%] border-2 border-[#32363C] w-[88.88px] h-[88.88px] z-2"></div>
          <div className="min-w-full min-h-full absolute bottom-0 right-0 bg-[#32363C] rounded-[50%] z-[-1]"></div>
        </div>
        <div className="absolute">
          {pathname.includes("profile") ? (
            <ProfileIcon />
          ) : pathname.includes("game") ? (
            <GameIcon />
          ) : (
            <FaqIcon />
          )}
        </div>
      </div>
      <div className="w-[80%] border-2 border-[#32363C] py-[20px] grid grid-cols-3 rounded-[32.5px] bg-[#FFFFFF]">
        <div
          to="profile"
          className="text-center"
          onClick={() => linkTo("profile")}
        >
          {LANG ? (
            "PROFILE"
          ) : (
            <span className="text-[10px] font-bold">ПРОФИЛЬ</span>
          )}
        </div>
        <div to="game" className="text-center" onClick={() => linkTo("game")}>
          {LANG ? "GAME" : <span className="text-[10px] font-bold">ИГРА</span>}
        </div>
        <div to="faq" className="text-center" onClick={() => linkTo("faq")}>
          {LANG ? (
            "FAQ"
          ) : (
            <span className="text-[10px] font-bold">ВОПРОСЫ</span>
          )}
        </div>
      </div>
    </div>
  );
}
