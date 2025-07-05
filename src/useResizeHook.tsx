import { useEffect, useState } from "react";

export default function useResizeHook(observeResize: boolean = true) {
  const [actualWidth, setActualWidth] = useState(1920);
  const [actualHeight, setActualHeight] = useState(1080);
  function handleResize() {
    const logicalWidth = window.innerWidth;
    const logicalHeight = window.innerHeight;

    const dpr = window.devicePixelRatio;

    const actualWidth = logicalWidth * dpr;
    const actualHeight = logicalHeight * dpr;
    document.documentElement.style.setProperty(
      "--vh",
      `${100 / actualHeight}vh`
    );
    document.documentElement.style.setProperty(
      "--vw",
      `${100 / actualWidth}vw`
    );

    setActualWidth(actualWidth);
    setActualHeight(actualHeight);
  }
  useEffect(() => {
    // 초기 렌더링 시 한번 실행
    handleResize();
    if (observeResize) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (observeResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [actualWidth, actualHeight, observeResize]);
  return { actualWidth, actualHeight };
}
