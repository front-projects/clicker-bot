import { Link } from "react-router-dom";
import { LANG } from "../../util/front/get-language";
import { useEffect } from "react";
import { animProfileTransactions } from "../UI/animations";

export default function Transactions() {
  useEffect(() => {
    const anim = animProfileTransactions();
    return () => anim.kill();
  }, []);

  return (
    <>
      <div className="w-full">
        <Link to="transactions" className="w-full">
          <div className="w-full relative h-[86px]">
            <div
              className="w-[90%] left-[5%] h-[66px] absolute top-[20px] bg-white rounded-[32.5px] z-0 border-2 border-[#32363C] z-0 opacity-0"
              id="third-tra"
            ></div>
            <div
              className="w-[96%] left-[2%] h-[66px] absolute top-[10px] bg-white rounded-[32.5px] z-0 border-2 border-[#32363C] z-0 opacity-0"
              id="second-tra"
            ></div>

            <div
              id="first-tra"
              className="w-full border-2 border-[#32363C] flex items-center justify-between bg-white rounded-[32.5px] px-[15px] py-[18px] z-1 absolute"
            >
              <div className="flex items-center gap-[9px] ">
                <div className="rounded-[50%] w-[26px] h-[26px] bg-[#5B5E63]"></div>
                <div className="text-[12px]">NICK JAY</div>
              </div>
              <div className="text-[#82EB67] font-[700] text-[14px]">423 $</div>
            </div>
          </div>
        </Link>

        <Link to="transactions" className="w-full">
          <div className="w-full text-center py-4 text-[15px]">
            {LANG ? "View all transactions" : "Посмотреть все транзакции"}
          </div>
        </Link>
      </div>
    </>
  );
}
