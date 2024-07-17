import { useEffect } from "react";
import FaqItem from "../components/Faq/Faq-Item";
import WebApp from "@twa-dev/sdk";
import { animFaqItems, animFaqTitle } from "../components/UI/animations";

export default function Faq() {
  useEffect(() => {
    WebApp.BackButton.hide();
    const animGroup = animFaqItems();
    const animTitle = animFaqTitle();

    return () => {
      animGroup.kill();
      animTitle.kill();
    };
  }, []);

  return (
    <div className="h-full w-full px-[20px]" id="faq-section">
      <h1 id="faq-title" className="text-[24px] py-4 w-full text-center">
        FAQ
      </h1>
      <div
        id="faq-items"
        style={{ height: "calc(100% - 4rem - 24px)" }}
        className="overflow-y-auto"
      >
        <FaqItem title="How it works?">
          When a table is available for purchase, it comes with a unique colored
          skin, clearly marked price, and a progress bar indicating its fill
          percentage. Additionally, each table will display an earnings counter,
          showing how much a player has earned from that particular table. To
          enhance player experience and ease of tracking progress, each whale
          table is numbered from 1 to 12.
        </FaqItem>
        <FaqItem title="What does my level mean?">
          When a table is available for purchase, it comes with a unique colored
          skin, clearly marked price, and a progress bar indicating its fill
          percentage. Additionally, each table will display an earnings counter,
          showing how much a player has earned from that particular table. To
          enhance player experience and ease of tracking progress, each whale
          table is numbered from 1 to 12.
        </FaqItem>
        <FaqItem title="How to get money?">
          When a table is available for purchase, it comes with a unique colored
          skin, clearly marked price, and a progress bar indicating its fill
          percentage. Additionally, each table will display an earnings counter,
          showing how much a player has earned from that particular table. To
          enhance player experience and ease of tracking progress, each whale
          table is numbered from 1 to 12.
        </FaqItem>
        <FaqItem title="How to share?">
          When a table is available for purchase, it comes with a unique colored
          skin, clearly marked price, and a progress bar indicating its fill
          percentage. Additionally, each table will display an earnings counter,
          showing how much a player has earned from that particular table. To
          enhance player experience and ease of tracking progress, each whale
          table is numbered from 1 to 12.
        </FaqItem>
      </div>
    </div>
  );
}
