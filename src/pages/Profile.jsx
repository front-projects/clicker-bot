import { useEffect } from "react";
import ButtonsMenu from "../components/profile/buttonsMenu";
import InviteMenu from "../components/profile/InviteMenu";
import NameInfo from "../components/profile/NameInfo";
import Transactions from "../components/profile/Transactions";
import CoinInfo from "../components/UI/CoinInfo";
import WebApp from "@twa-dev/sdk";
import {
  animProfileCoin,
  animProfileInvite,
  animProfileTitle,
} from "../components/UI/animations";

export default function Profile() {
  useEffect(() => {
    WebApp.BackButton.hide();
    const animTitle = animProfileTitle();
    const animCoin = animProfileCoin();
    const animInvite = animProfileInvite();

    return () => {
      animTitle.kill();
      animCoin.kill();
      animInvite.kill();
    };
  }, []);

  return (
    <div
      className="px-[18px] w-full h-full overflow-y-auto max-[375px]:px-[10px] flex flex-col gap-[10px] justify-between"
      id="profile-section"
    >
      <ButtonsMenu />
      <NameInfo />
      <CoinInfo id="profile-coin" />
      <Transactions />
      <InviteMenu />
    </div>
  );
}
