import { useEffect } from "react";
import { LANG } from "../../util/front/get-language";
import { FullBatteryIcon, SemiBatteryIcon } from "../UI/icons";
import { animaGameBuyEnergy } from "../UI/animations";

export default function BuyEnergy() {
  useEffect(() => {
    const animTitle = animaGameBuyEnergy();
    return () => animTitle.kill();
  }, []);

  return (
    <div className="w-full flex justify-center  py-2" id="buy-energy">
      <div className="w-[90%] border-2 border-[#32363C] bg-white rounded-[15px] flex px-[17px] py-[6px]">
        <div className="flex items-center justify-center gap-[15px] w-1/2 border-r-2 border-dashed border-[#00000069]/41">
          <div className="w-[38px]">
            <SemiBatteryIcon />
            <p className="text-[10px]">700</p>
          </div>
          <div className="text-[12px] pr-4">
            {LANG ? "Subscribe to the channel" : "Подписка на канал"}
          </div>
        </div>
        <div className="flex items-center justify-center gap-[15px] w-1/2 pl-[16px]">
          <div className="w-[38px]">
            <FullBatteryIcon />
            <p className="text-[10px]">1000</p>
          </div>
          <div className="text-[12px]">
            {LANG ? "Subscribe to the site" : "Подписка на сайт"}
          </div>
        </div>
      </div>
    </div>
  );
}
