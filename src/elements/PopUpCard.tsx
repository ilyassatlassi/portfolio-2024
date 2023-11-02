"use client"
import Live from "../assets/normal-button-secondary-icons-icon-export.svg";
import Source from "../assets/normal-button-secondary-icons-frame.svg";
import Tonic from "../assets/snapshoot-portfolio.png";
import { EvenPopup } from "@/interfaces/evenPopup";
import Image from "next/image";

function PopUpCard({ handlePopUp }: EvenPopup) {
  return (
    <div className="z-50 ">
      <div className=" rounded-2xl bg-white flex flex-col gap-3 p-4 mix-blend-normal">
        <div className="flex flex-row justify-between">
          <h3 className="font-bold text-[32px] lg:text-[40px]">Tonic</h3>
          <button className="" onClick={handlePopUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#67798E"
              />
            </svg>
          </button>
        </div>
        <ul className="flex items-center gap-3">
          <li className="text-[#344563] font-semibold">CANOPY</li>
          <span className="rounded-full bg-[#C1C7D0] w-2 h-2"></span>
          <li className="text-[#7A869A]">Back End Dev</li>
          <span className="rounded-full bg-[#C1C7D0] w-2 h-2"></span>
          <li className="text-[#7A869A]">2023</li>
        </ul>
        {/* <img className="lg:w-full lg:h-[448px]" src={Tonic} alt="Tonic" /> */}
        <Image className="w-full lg:h-[448px]" src={Tonic} alt="" />
        <div className="lg:flex gap-6 lg:pb-4">
          <p className="lg:w-4/6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquos standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it 1960s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&lsquos standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it 1960s with the
            releorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum han printer took a galley of type and
            scrambled it 1960s with the releawn printer took a galley of type
            and scrambled it 1960s.
          </p>
          <div className="lg:flex lg:flex-col gap-3">
            <ul className="flex gap-1 pt-3">
              <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium">
                HTML
              </li>
              <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium">
                CSS
              </li>
              <li className="rounded-lg bg-[#EBEBFF] text-[#6070FF] items-center px-3 py-1 font-medium font">
                JavaScript
              </li>
            </ul>
          <div className="pt-3">
              <svg
                className="py-1"
                xmlns="http://www.w3.org/2000/svg"
                width="303"
                height="2"
                viewBox="0 0 303 2"
                fill="none"
              >
                <path d="M0 1H303" stroke="#EBECF0" />
              </svg>
          </div>
            <div className="flex flex-row justify-around px-3 lg:px-0 py-1 gap-3 items-center">
              <button
                onClick={handlePopUp}
                className="px-5 py-3 rounded-lg border-[#6070FF] border text-[#396DF2] font-medium hover:bg-[#6070FF] hover:text-[#FFFFFF] transition-all duration-1000 ease-out active:bg-[#2230D2] active:text-[#FFFFFF] disabled:text-[#5E6C84] disabled:border-[#C1C7D0] hover:scale-110 disabled:bg-[#ffffff] flex flex-row gap-[10px]"
              >
                <h4>See live</h4>
                <Image src={Live} alt="Live" />
              </button>

              <button
                onClick={handlePopUp}
                className="p-3 rounded-lg border-[#6070FF] border text-[#396DF2] font-medium hover:bg-[#6070FF] hover:text-[#FFFFFF] transition-all duration-1000 ease-out active:bg-[#2230D2] active:text-[#FFFFFF] disabled:text-[#5E6C84] disabled:border-[#C1C7D0] hover:scale-110 disabled:bg-[#ffffff] flex flex-row gap-[10px]"
              >
                <h4>See source</h4>
                <Image src={Source} alt="Live" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpCard;
