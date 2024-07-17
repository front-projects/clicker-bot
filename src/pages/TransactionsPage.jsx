import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TransactionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    WebApp.BackButton.show();
    WebApp.BackButton.onClick(() => {
      navigate(-1);
    });
  }, [navigate]);

  return <div>Transactions</div>;
}
