import { useEffect, useState, useRef, useCallback } from "react";
import CoinInfo from "../UI/CoinInfo";
import { LightingIcon, MainPokemon } from "../UI/icons";
import { useGesture } from "@use-gesture/react";

import {
  animGameButtonEnd,
  animGameButtonStart,
  animGameEnergy,
  animGameMain,
  animGameOnClick,
  animGameTitle,
} from "../UI/animations";

export default function MainTap() {
  const [floatingTexts, setFloatingTexts] = useState([]);
  const nextIdRef = useRef(0);
  const timeoutIdsRef = useRef([]);

  useEffect(() => {
    const animTitle = animGameTitle();
    const animEnergy = animGameEnergy();
    const animMain = animGameMain();

    return () => {
      animTitle.kill();
      animEnergy.kill();
      animMain.kill();
      timeoutIdsRef.current.forEach(clearTimeout);
    };
  }, []);

  const clickHandler = useCallback((e) => {
    const { clientX: x, clientY: y } = e;
    const newText = { id: nextIdRef.current, x: x - 15, y: y - 30 };
    setFloatingTexts((prev) => [...prev, newText]);
    nextIdRef.current += 1;

    const timeoutId = setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((text) => text.id !== newText.id));
    }, 2000);
    timeoutIdsRef.current.push(timeoutId);

    animGameOnClick();
  }, []);

  const click = useGesture({
    onPointerDown: ({ event }) => {
      animGameButtonStart();
      clickHandler(event);
    },
    onPointerUp: () => {
      animGameButtonEnd();
    },
  });

  return (
    <div className="w-full mt-[10px]">
      {floatingTexts.map((text) => (
        <span
          className="floating-text z-10 font-semibold text-[30px]"
          key={text.id}
          style={{ top: text.y, left: text.x }}
        >
          +1
        </span>
      ))}
      <CoinInfo id="coin-info-1" />
      <div className="w-full flex justify-center" id="main-tap">
        <div className="relative w-[67vw] h-[67vw] pt-[5px] pr-[7px] rounded-[50%]">
          <div
            className="absolute bg-[#32363C] rounded-[50%] left-[7px] top-0"
            style={{ width: "calc(100% - 7px)", height: "calc(100% - 5px)" }}
          ></div>
          <div
            className="relative bg-white border-2 border-[#32363C] w-full rounded-[50%] h-full flex items-center justify-center select-none"
            id="main-image-container"
            {...click()}
          >
            <div className="w-[80%] h-[80%] border-2 border-[#32363C] rounded-[50%] relative">
              <div
                style={{
                  width: "calc(100% - 7px)",
                  height: "calc(100% - 7px)",
                }}
                className="border-2 border-[#32363C] rounded-[50%] absolute right-0 top-0 flex items-center justify-center select-none"
              >
                <div id="main-image" className="opacity-0 scale-[.3]">
                  <MainPokemon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex items-center justify-center gap-[6px] mt-[10px]"
        id="energy-menu"
      >
        <LightingIcon />
        <div className="font-['Gilroy-900'] text-[17px] select-none">
          500 / 500
        </div>
      </div>
    </div>
  );
}
