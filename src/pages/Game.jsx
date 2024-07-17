import { useEffect } from "react";
import BuyEnergy from "../components/game/BuyEnergy";
import MainTap from "../components/game/MainTap";
import TopButton from "../components/game/TopButton";
import WebApp from "@twa-dev/sdk";

export default function Game() {
  useEffect(() => {
    WebApp.BackButton.hide();
  }, []);

  return (
    <div
      className="h-full flex flex-col items-center justify-between px-[18px] overflow-y-auto"
      id="game-section"
    >
      <TopButton />
      <MainTap />
      <BuyEnergy />
    </div>
  );
}
