"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Log from "../Login/solar_link-circle-bold.svg";
import Devlink from "../Login/devlinks.svg";
import linkIcon from "./ph_link-bold.svg";
import User from "./ph_user-circle-bold.svg";
import Case from "./Rectangle 15.svg";
import Inner from "./Subtract.svg";
import Start from "./Group 273.svg";

export default function HomePage() {
  const [purple, setPurple] = useState(false);
  const [preview, setPreview] = useState(false);
  const [link, setLink] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <main className="p-[24px] bg-light-grey">
      <div className="flex items-start justify-between p-[24px] self-stretch bg-white mb-[51px]">
        <div className="flex justify-between items-center">
          <Image src={Log} alt="logo" className="mr-[10px]" />
          <Image src={Devlink} alt="devLink" />
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 p-[11px_27px] rounded-custom bg-light-purple">
            <Image src={linkIcon} alt="devLink" />
            <span className="text-purple font-instrument text-lg font-semibold leading-6">
              Links
            </span>
          </div>
          <div
            className={`flex items-center gap-2 p-[11px_27px] rounded-custom ${
              purple ? "text-purple" : "text-grey"
            }`}
            onMouseEnter={() => setPurple(true)}
            onMouseLeave={() => setPurple(false)}
          >
            <Image
              src={User}
              alt="devLink"
              style={{
                filter: purple
                  ? " brightness(0) saturate(100%) invert(30%) sepia(50%) saturate(6000%) hue-rotate(240deg) brightness(90%) contrast(100%)"
                  : "none",
              }}
            />
            <span className="font-instrument text-lg font-semibold leading-6">
              Profile Details
            </span>
          </div>
        </div>

        <button
          className={`flex flex-col items-start gap-2 p-[11px_27px] border border-purple rounded-custom text-purple font-instrument text-lg font-semibold leading-6
          ${preview ? "bg-light-purple" : "bg-white"}`}
          onMouseEnter={() => setPreview(true)}
          onMouseLeave={() => setPreview(false)}
        >
          Preview
        </button>
      </div>

      <div className="flex gap-6 ">
      <div className="flex relative items-center justify-center gap-2 p-6 bg-white rounded-customs w-[560px] display-none sm:display-block">
          <Image src={Case} alt="logo" />
          <Image src={Inner} alt="devLink" className="absolute" />
          <div className="absolute flex-col items-center gap-6 z-10 flex ">
            <div className="w-[96px] h-[96px] bg-light z-100 rounded-full "></div>
            <div className="w-[160px] h-[16px] rounded-[104px] bg-light"></div>
            <div className="w-[72px] h-[8px] rounded-[104px] bg-light mb-[30px]"></div>
            

            <div className="flex flex-col gap-5">
                <div className="w-[237px] h-[44px] rounded-custom gap-2 bg-light py-[11px] px-[16px]"></div>
                <div className="w-[237px] h-[44px] rounded-custom gap-2 bg-light py-[11px] px-[16px]"></div>
                <div className="w-[237px] h-[44px] rounded-custom gap-2 bg-light py-[11px] px-[16px]"></div>
                <div className="w-[237px] h-[44px] rounded-custom gap-2 bg-light py-[11px] px-[16px]"></div>
                <div className="w-[237px] h-[44px] rounded-custom gap-2 bg-light py-[11px] px-[16px]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col p-[40px] bg-white rounded-custom-t">
            <h1 className="text-heading-m font-heading-m text-dark-grey font-instrument-sans font-bold">
              Customize your links
            </h1>
            <p className="text-body-m font-body-m text-grey font-instrument-sans mb-[40px]">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <Link
              href="/Addlink"
              className={`flex px-6 py-2.5 flex-col justify-center items-center gap-2 self-stretch border-purple border rounded-custom text-purple font-semibold font-instrument mb-[24px]
            ${link ? "bg-light-purple" : "bg-white"}
            `}
              onMouseEnter={() => setLink(true)}
              onMouseLeave={() => setLink(false)}
            >
              + Add new link
            </Link>

            <div className="flex flex-col items-center p-[20px] gap-[12px] mb-[20px] bg-light-grey rounded-custom">
              <Image src={Start} alt="start" />
              <h1 className="text-heading-m font-heading-m text-dark-grey font-instrument-sans font-bold mb-[24px]">
                Let’s get you started
              </h1>
              <p className="text-grey text-center text-body-m font-instrument-sans w-[488px]">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>

          <div className="flex px-10 py-6 flex-col items-end gap-2 self-stretch mt-[5px] bg-[#fff] rounded-custom-b">
            <button
              className={`text-white text-heading-s font-heading-s font-instrument-sans bg-purple  rounded-custom opacity-25 flex px-6 py-2.5 flex-col items-start gap-2
            ${save ? "bg-purple-hover" : "bg-purple"}
            `}
              onMouseEnter={() => setSave(true)}
              onMouseLeave={() => setSave(false)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
