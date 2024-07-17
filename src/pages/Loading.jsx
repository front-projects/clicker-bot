import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadImages } from "../util/front/loadImages";
import { imagesToLoad } from "../util/front/imagesToLoad";
import WebApp from "@twa-dev/sdk";

export default function Loading() {
  const [isReady, setIsReady] = useState();
  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    WebApp.BackButton.hide();
    loadImages(imagesToLoad)
      .then(() => {
        setIsReady(true);
      })
      .catch((err) => {
        console.log("Failed to load images", err);
      });
  }, []);
  return (
    <>
      <div
        className="relative flex w-screen h-screen text-3xl"
        id="loading-layout"
      >
        <div className="absolute w-full h-[10vh] left-0 top-[0] z-0 loading-top-gradient"></div>
        <div
          id="loading-page"
          className="w-full h-[95vh] flex flex-col items-center justify-between rounded-t-[40px] mt-[5vh] absolute z-1"
        >
          <div className="flex items-center justify-center h-full">
            Loading...
          </div>
          <div className="loading-bot-gradient w-full pb-10">
            <h1 className="text-center text-[50px]">Clicker</h1>
            <h3 className="text-center loading-text-gradient text-[35px] mt-4">
              Start earning now
            </h3>
          </div>
        </div>
      </div>

      {isReady && <FallbackNavigate to="/en" />}
    </>
  );
}
