import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loading from "./pages/Loading";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Game from "./pages/Game";
import Faq from "./pages/Faq";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    WebApp.setHeaderColor("#FFFFFF");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="/en" element={<Layout />}>
          <Route index element={<Navigate to="game" />} />
          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>
          <Route path="game" element={<Game />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
