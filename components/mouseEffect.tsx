"use client";

import React, { useEffect, useState } from "react";

const MOUSE_EFFECT = () => {
  const [cursorPostion, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [mainEmoji, setMailEmoji] = useState("😎");

  useEffect(() => {
    const allMailEmoji = [
      "😁",
      "😄",
      "😆",
      "😊",
      "😋",
      "😍",
      "😎",
      "😏",
      "😌",
      "😜",
    ];
    const container = document.getElementById("mosueEffectContainer");

    const containterYPostion = container?.offsetTop || 0;
    const containterXPostion = container?.offsetLeft || 0;

    const changeMainEmoji = () => {
      setMailEmoji(
        allMailEmoji[Math.floor(Math.random() * allMailEmoji.length)]
      );
    };

    const addEmojy = (e: any) => {
      if (!showCursor) {
        setShowCursor(true);
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });

      if (!showCursor) {
        return;
      }
      const emojyList = [
        "😊",
        "🌟",
        "🎉",
        "🌈",
        "🍕",
        "🐾",
        "🚀",
        "🎸",
        "🌺",
        "🌍",
        "🌞",
        "📚",
        "🍔",
        "🎶",
        "🏆",
        "🌟",
        "🍦",
        "🎭",
        "🌲",
        "🌸",
        "❣️",
        "💕",
        "💞",
        "💓",
        "💗",
        "💖",
        "💘",
        "💝",
        "💟",
        "💖",
      ];

      const emojy = document.createElement("span");
      emojy.innerHTML = emojyList[Math.floor(Math.random() * emojyList.length)];
      emojy.style.position = "absolute";
      emojy.style.zIndex = "400";
      emojy.style.left = `${e.clientX - containterXPostion - 4}px`;
      emojy.style.top = `${e.clientY - containterYPostion - 4}px`;
      emojy.style.pointerEvents = "none";

      container?.appendChild(emojy);

      setTimeout(() => {
        container?.removeChild(emojy);
      }, 300);
    };

    container?.addEventListener("mousemove", addEmojy);
    container?.addEventListener("mouseleave", () => {
      setShowCursor(false);
    });
    container?.addEventListener("mouseenter", () => {
      setShowCursor(true);
    });
    container?.addEventListener("dblclick", changeMainEmoji);

    return () => {
      container?.removeEventListener("mousemove", addEmojy);
      container?.removeEventListener("mouseleave", () => {
        setShowCursor(false);
      });
      container?.removeEventListener("mouseenter", () => {
        setShowCursor(true);
      });
      container?.removeEventListener("dblclick", changeMainEmoji);
    };
  }, [showCursor]);

  return (
    <>
      {/* <div
        id="mosueEffectContainer"
        className="w-full h-[50vh] bg-purple-300  relative flex justify-center cursor-none items-center"
        onMouseEnter={() => {
          setShowCursor(true);
        }}
        onMouseLeave={() => {
          setShowCursor(false);
        }}
      >
        <span className="text-[14px] font-bold">SMILE FOR NO REASON</span>
      </div> */}
      <div
        className=" aspect-square hidden lg:block  z-[500] top-0 left-0  duration-200 transition-[scale] pointer-events-none
         rounded-full absolute"
        style={{
          left: `${cursorPostion.x - 20}px`,
          top: `${cursorPostion.y - 20}px`,
          scale: `${showCursor ? "1" : "0"}`,
        }}
      >
        <span className="text-[40px]">{mainEmoji}</span>
      </div>
    </>
  );
};

export default MOUSE_EFFECT;
