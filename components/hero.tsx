"use client";

import React, { useState } from "react";

import { Jim_Nightshade, Kenia, Architects_Daughter } from "next/font/google";
import { HandIcon, HeartIcon } from "@/all_icons";
import Image from "next/image";
import { correctGIF } from "@/public";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const jimNightshade = Jim_Nightshade({ weight: "400", subsets: ["latin"] });
const kenia = Architects_Daughter({ weight: "400", subsets: ["latin"] });

const HERO = () => {
  const [answer, setAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showGIF, setShowGIF] = useState(false);

  const checkAnswer = (e: any) => {
    e.preventDefault();

    if (
      answer.trim().toLowerCase() === "prashant" ||
      answer.trim().toLowerCase() === "prashant singh" ||
      answer.trim().toLowerCase() === "prashant singh hooda"
    ) {
      setIsAnswerCorrect(true);
      setShowGIF(true);
      setAnswer("");

      const timeOut = setTimeout(() => {
        setShowGIF(false);
        setIsAnswerCorrect(null);
      }, 3000);

      return () => {
        clearTimeout(timeOut);
      };
    } else {
      setIsAnswerCorrect(false);
      setShowGIF(true);
      setAnswer("");

      const timeOut = setTimeout(() => {
        setShowGIF(false);
        setIsAnswerCorrect(null);
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-[#222222] p-2 rounded-[40px]">
        <div className="w-full h-full bg-gray-200 rounded-[32px] p-2">
          <div className="w-full relative overflow-hidden  h-full bg-[#2D343E] rounded-[26px]">
            <div className="absolute z-20 right-0 bottom-0 w-full flex justify-end">
              <div className="relative  w-[80%] sm:w-[60%] rounded-tl-[30px]  bg-[#e5e7eb]">
                <div className="flex items-center w-full h-full px-1 overflow-hidden">
                  <Marquee autoFill speed={20}>
                    <span
                      className={` text-[32px] lg:text-[36px] xl:text-[42px] font-semibold px-[20px] xl:px-[30px]  ${kenia.className}`}
                    >
                      Wishing you Happiest Farewell 😍💖
                    </span>
                  </Marquee>
                </div>
                <div className=" size-[60px] -top-[60px] right-0 shadow-[30px_30px_0px_0px_rgba(229,231,235)] bg-[#f3cbc800] rounded-full absolute" />
                <div className=" size-[50px] bottom-0 -left-[50px] shadow-[25px_25px_0px_0px_rgba(229,231,235)] bg-[#f3cbc800] rounded-full absolute" />
              </div>
            </div>
            <div className="relative block lg:flex gap-5 w-full h-full overflow-x-hidden overflow-y-scroll">
              <div className="w-fit">
                <div className="px-6 py-4">
                  <div>
                    <span
                      className={`text-[#B0D36E] text-[20px] sm:text-[24px] lg:text-[36px]  ${kenia.className}`}
                    >
                      duuaao me yaad rakhna !!
                    </span>
                  </div>
                  <div className={`leading-tight relative`}>
                    <div className="flex items-center gap-2">
                      <div>
                        <span className="text-gray-200 max-[376px]:text-[30px] text-[36px] sm:text-[42px] lg:text-[56px] font-bold">
                          Good Byeeee..
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HandIcon className="text-amber-400 text-[32px]" />
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-200 max-[376px]:text-[30px] text-[36px] sm:text-[42px] lg:text-[56px] font-bold">
                        Gala{"'"} 24
                      </span>
                    </div>
                  </div>
                  <div className="max-[321px]:mt-[10px]">
                    <div className="flex gap-2 items-center w-fit  -mt-[20px] sm:-mt-[30px] relative z-10 max-[321px]:ml-[20px]  ml-[100px] sm:ml-[150px] -rotate-12 bg-[#4A525D] border border-gray-400 px-5 py-2 rounded-full">
                      <div>
                        <span className="text-gray-200 font-medium  text-[13px] lg:text-[14px]">
                          we all will miss you..
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="text-red-600" />
                        <HeartIcon className="text-red-600" />
                      </div>
                    </div>
                    <div className="flex gap-2 items-center w-fit relative z-10 ml-0 max-[321px]:mt-[20px] sm:ml-[10px] rotate-6 bg-[#4A525D] border border-gray-400 px-5 py-2 rounded-full">
                      <div>
                        <span className="text-gray-200 font-medium  text-[13px] lg:text-[14px]">
                          ICI ke time milne anaa !!
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center w-fit -mt-[50px] sm:-mt-[70px] max-[321px]:-mt-[70px] relative z-10 max-[321px]:ml-[100px] max-[376px]:ml-[150px] ml-[200px]  sm:ml-[350px] rotate-6 bg-[#4A525D] border border-gray-400 px-5 py-2 rounded-full">
                      <div>
                        <span className="text-gray-200 font-medium  text-[13px] lg:text-[14px]">
                          Best of Luck
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-7 w-full lg:w-[700px] mt-7">
                  <span className="text-gray-300 text-[15px] lg:text-[16px]">
                    Happiest farewell to all our bhiayas and didis of our civil
                    branch. You were the only people who made every event of
                    SKIT sooo enjoyable. The most notorious but{" "}
                    <span className="font-semibold">
                      the most loved ones of our college.
                    </span>
                  </span>
                </div>
                <div className="px-7 mt-2 w-full lg:w-[700px]">
                  <span className="text-gray-300 text-[15px] lg:text-[16px]">
                    Isssi khushi me, heres your well deserved farewell party.{" "}
                    <span className="font-semibold">Enjoyyyyy!!</span>
                  </span>
                </div>
                <div className="px-7 mt-2 w-full lg:w-[700px]">
                  <span className="text-gray-300 text-[14px] lg:text-[15px]">
                    *double click to change your emoji
                  </span>
                </div>
              </div>
              <div className=" w-full h-full flex p-5 ">
                <div className="w-full">
                  <div>
                    <span
                      className={`text-[#B0D36E] text-[20px] sm:text-[24px] lg:text-[36px]  ${kenia.className}`}
                    >
                      Register hereee
                    </span>
                  </div>
                  <div className="mt-3 block sm:flex lg:block xl:flex items-center gap-3">
                    <div>
                      <button className="px-6 py-4 bg-blue-700 text-white text-[13px] lg:text-[14px] font-medium rounded-full">
                        For 3rd yr students (₹300/-)
                      </button>
                    </div>
                    <div className=" mt-3 sm:mt-0 lg:mt-3 xl:mt-0">
                      <button className="px-6 py-4 bg-blue-700 text-white text-[13px] lg:text-[14px] font-medium rounded-full">
                        For 4th yr students (₹400/-)
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-gray-500 my-5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <div>
                        <span className="text-gray-200 font-medium  text-[16px] sm:text-[18px]">
                          we have planned sooo much for you{" "}
                          <span className="text-red-500">❤❤</span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <ul className="flex gap-2 flex-wrap">
                        <li className="bg-[#4A525D] border border-gray-400 px-5 py-2 font-medium rounded-full text-white text-[13px] sm:text-[15px]  ">
                          Pre-Convocation
                        </li>
                        <li className="bg-[#4A525D] border border-gray-400 px-5 py-2 font-medium rounded-full text-white text-[13px] sm:text-[15px]  ">
                          Games
                        </li>
                        <li className="bg-[#4A525D] border border-gray-400 px-5 py-2 font-medium rounded-full text-white text-[13px] sm:text-[15px]  ">
                          Dance
                        </li>
                        <li className="bg-[#4A525D] border border-gray-400 px-5 py-2 font-medium rounded-full text-white text-[13px] sm:text-[15px]  ">
                          Ramp Walk
                        </li>
                        <li className="bg-[#4A525D] border border-gray-400 px-5 py-2 font-medium rounded-full text-white text-[13px] sm:text-[15px]  ">
                          DJ-Night
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-gray-500 my-5" />
                  <div className="text-gray-200 block sm:flex items-center gap-5">
                    <div className="leading-tight">
                      <div>
                        <span className="text-[16px] text-gray-400 xl:text-[18px]">
                          Date
                        </span>
                      </div>{" "}
                      <div>
                        <span className="text-[15px] sm:text-[18px] xl:text-[22px] font-medium sm:font-semibold">
                          17th May, 2024
                        </span>
                      </div>
                    </div>
                    <div className="leading-tight mt-2 sm:mt-0">
                      <div>
                        <span className="text-[16px] text-gray-400 xl:text-[18px]">
                          Time
                        </span>
                      </div>{" "}
                      <div>
                        <span className="text-[15px] sm:text-[18px] xl:text-[22px] font-medium sm:font-semibold">
                          05:00 PM onwards
                        </span>
                      </div>
                    </div>
                    <div className="leading-tight mt-2 sm:mt-0">
                      <div>
                        <span className="text-[16px] text-gray-400 xl:text-[18px]">
                          Venue
                        </span>
                      </div>{" "}
                      <div>
                        <span className="text-[15px] sm:text-[18px] xl:text-[22px] font-medium sm:font-semibold">
                          Civil Block, SKIT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-gray-500 my-5" />
                  <div>
                    <div>
                      <span className="text-gray-200">Guess who am I ?</span>
                    </div>
                    <div className=" mt-3">
                      <form
                        onSubmit={checkAnswer}
                        className="max-[376px]:block flex items-center gap-2 text-white"
                      >
                        <div>
                          <input
                            type="text"
                            placeholder="what's my name"
                            required
                            onChange={(e: any) => {
                              setAnswer(e.target.value);
                            }}
                            value={answer}
                            className="bg-[#4A525D] text-[14px] placeholder:text-gray-200  outline-none border border-gray-500 px-5 py-2 rounded-full"
                          />
                        </div>
                        <div className="max-[376px]:mt-2">
                          <button
                            type="submit"
                            className="bg-blue-700 text-[14px] placeholder:text-gray-200  outline-none px-5 py-2 rounded-full"
                          >
                            check
                          </button>
                        </div>
                      </form>
                    </div>
                    {isAnswerCorrect != null && (
                      <div>
                        {isAnswerCorrect ? (
                          <div>
                            <Image
                              src={correctGIF}
                              alt="correct"
                              className="w-[150px] h-[100px] object-cover rounded-[15px]"
                            />
                          </div>
                        ) : (
                          <div>
                            <span className="text-gray-200 text-[14px] font-medium">
                              Nopeeeee..
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="w-full h-[200px] md:h-[100px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HERO;
