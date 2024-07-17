import { DollarIcon } from "./icons";

export default function CoinInfo({ id }) {
  return (
    <div className="flex w-full items-center justify-center gap-[8px]" id={id}>
      <div className="bg-white shadow-[inset_0px_0.711864px_0px_rgba(0,0,0,0.25)] rounded-[50%] border-[3px] border-[#32363C] h-[42px] w-[42px] flex items-center justify-center ">
        <DollarIcon />
      </div>
      <h1 className="text-[36px] font-['Gilroy-800']">561,22 </h1>
    </div>
  );
}
