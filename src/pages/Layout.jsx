import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function Layout() {
  return (
    <>
      <div className="z-10 fixed w-screen h-screen inset-0 max-[540px]:hidden bg-black text-white flex items-center justify-center px-10 text-center text-2xl">
        The game is avalibale only in mobile version
      </div>
      <div className="relative w-screen h-screen">
        <main className="w-full h-full border-2 border-black mt-4 rounded-t-[24px] ">
          <div
            style={{
              height: "calc(100% - 126px)",
              maxHeight: "calc(100% - 126px)",
            }}
            className="w-full pt-[10px]"
          >
            <Outlet />
          </div>
        </main>
        <Navigation />
      </div>
    </>
  );
}
